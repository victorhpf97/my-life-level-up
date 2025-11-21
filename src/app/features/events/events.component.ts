import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';

export interface EventTask {
  id: string;
  label: string;
  checked: boolean;
}

export interface EventItem {
  id?: string;
  title: string;
  image: string;
  images?: string[];
  tasks: EventTask[];
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, CheckboxModule, ButtonModule, ProgressBarModule, FormsModule, DrawerModule, InputTextModule, GalleriaModule],
  templateUrl: './events.component.html',
  styles: [
    `
    .thumbnail-grid {
      display: grid;
      /* Force 5 columns per row */
      grid-template-columns: repeat(5, 1fr);
      gap: 0.75rem;
      max-width: 1200px;
      width: 100%;
    }
    .thumbnail-item {
      display: flex;
      justify-content: center;
    }
    .thumbnail-img {
      width: 100%;
      height: 6.5rem;
      object-fit: cover;
      border-radius: 6px;
      cursor: pointer;
      max-width: 180px;
    }
    `
  ]
})
export class EventsComponent implements OnInit {
  readonly storageKey = 'events:final-de-semana-boco:state';

  title = 'Eventos da minha vida';
  image = 'assets/img/eu e a boco.jpg';
  // Multiple events shown in gallery
  events: EventItem[] = [
    {
      id: 'e1',
      title: 'Noite do minecraft',
      image: 'assets/img/minecraft.png',
      images: ['assets/img/minecraft.png','assets/img/just dance.jpg'],
      tasks: [
        { id: 'm1', label: 'Montar base', checked: false },
        { id: 'm2', label: 'Explorar mina', checked: false }
      ]
    },
    {
      id: 'e2',
      title: 'Passeio com a Bocó',
      image: 'assets/img/eu e a boco.jpg',
      images: ['assets/img/eu e a boco.jpg','assets/img/minecraft.png','assets/img/just dance.jpg'],
      tasks: [
        { id: 'b1', label: 'Levar brinquedo', checked: false },
        { id: 'b2', label: 'Caminhar 30min', checked: false }
      ]
    },
    {
      id: 'e3',
      title: 'Noite de drinks',
      image: 'assets/img/just dance.jpg',
      images: ['assets/img/just dance.jpg','assets/img/minecraft.png'],
      tasks: [
        { id: 'd1', label: 'Preparar drinks', checked: false },
        { id: 'd2', label: 'Tirar fotos', checked: false }
      ]
    }
  ];

  // selected event for detail view
  selectedEvent: EventItem | null = null;

  // Galleria state
  galleriaImages: Array<{ itemImageSrc: string; thumbnailImageSrc?: string; alt?: string }> = [];
  displayCustom = false;
  activeIndex = 0;
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  // UI: create sidebar
  createSidebarVisible = false;
  newEventTitle = '';
  newEventImage = 'assets/img/eu e a boco.jpg';
  newEventTasksText = ''; // newline separated
  newEventImagesText = '';
  // UI: edit sidebar
  editSidebarVisible = false;
  editingEvent: EventItem | null = null;
  editEventTitle = '';
  editEventImage = '';
  editEventTasksText = '';
  editEventImagesText = '';

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    // load events from Firebase and subscribe to updates
    this.eventsService.loadEvents();
    this.eventsService.events$.subscribe(items => {
      console.log('Events loaded from Firebase:', items);
      // Normalize items to ensure required fields exist and provide fallbacks
      this.events = items.map(i => {
        const rawImages = (i as any).images;
        let imagesArr: string[] = [];
        if (Array.isArray(rawImages)) {
          imagesArr = rawImages;
        } else if (typeof rawImages === 'string') {
          // convert multi-line string to array (handles broken lines)
          imagesArr = this.extractUrls(rawImages);
        } else if ((i as any).image) {
          // fallback: if single image field exists, keep as single-item array
          imagesArr = [(i as any).image];
        }

        return {
          id: i.id,
          title: i.title || 'Sem título',
          image: (i as any).image || imagesArr[0] || 'assets/img/box.png',
          images: imagesArr,
          tasks: (i as any).tasks || []
        } as EventItem;
      });
      // if currently selected event was updated remotely, refresh its reference
      if (this.selectedEvent) {
        const updated = this.events.find(e => e.id === this.selectedEvent!.id);
        if (updated) this.selectedEvent = updated;
      }
      this.loadState();
    });
  }

  get currentTasks(): EventTask[] {
    return this.selectedEvent ? this.selectedEvent.tasks : [];
  }

  selectEvent(ev: EventItem) {
    this.selectedEvent = ev;
    // load saved state for this event specifically
    this.loadState();
    // prepare galleria images
    this.galleriaImages = this.getGalleriaImages(ev);
    this.activeIndex = 0;
    this.displayCustom = false;
  }

  getGalleriaImages(ev: EventItem) {
    // Prefer images defined on the event, but exclude the cover image (ev.image)
    const source = (ev.images && ev.images.length) ? ev.images : [];
    const filtered = source.filter(s => s && s !== ev.image);
    // Map to galleria objects; if no gallery images remain, return empty array
    return filtered.map(s => ({ itemImageSrc: s, thumbnailImageSrc: s, alt: ev.title }));
  }

  /**
   * Returns a PrimeFlex column class depending on the number of thumbnails.
   * - 1 image  => full width (col-12)
   * - 2 images => two per row (col-6)
   * - 3 images => three per row (col-4)
   * - >=4 images => four per row (col-3)
   */
  thumbnailColClass(count: number): string {
    if (count <= 1) return 'col-12';
    if (count === 2) return 'col-6';
    if (count === 3) return 'col-4';
    return 'col-3';
  }

  onGalleriaItemClick(event: any) {
    if (event && typeof event.index === 'number') {
      this.activeIndex = event.index;
      this.displayCustom = true;
    }
  }

  // Robust URL extraction from free-form text. Matches http(s) URLs.
  private extractUrls(text: string): string[] {
    if (!text) return [];
    // Split by newlines or commas only (do not split on spaces — filenames may contain spaces)
    const parts = text.split(/\r?\n|,/).map(p => p.trim()).filter(p => p.length > 0);
    const urls: string[] = [];

    const isImage = (s: string) => /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(s.trim());
    const isHttp = (s: string) => /^https?:\/\//i.test(s.trim());
    const isAssetPath = (s: string) => /^(\/)?assets\//i.test(s.trim());

    let i = 0;
    while (i < parts.length) {
      let token = parts[i].replace(/^['"\(]+|['"\)]+$/g, '');

      // If token already looks like a full url, asset path or has image extension, accept it
      if (isHttp(token) || isAssetPath(token) || isImage(token)) {
        urls.push(token);
        i++;
        continue;
      }

      // Otherwise try to merge with subsequent lines to recover broken filenames
      let merged = token;
      let found = false;
      for (let j = i + 1; j < Math.min(parts.length, i + 6); j++) {
        // try merging without separator (covers cases where line was broken inside filename)
        merged = merged + parts[j];
        if (isImage(merged) || isAssetPath(merged) || isHttp(merged)) {
          urls.push(merged);
          i = j + 1;
          found = true;
          break;
        }
      }

      if (found) continue;

      // try merging with space separator (covers filenames split into words across lines)
      merged = token;
      for (let j = i + 1; j < Math.min(parts.length, i + 6); j++) {
        merged = merged + ' ' + parts[j];
        if (isImage(merged) || isAssetPath(merged) || isHttp(merged)) {
          urls.push(merged);
          i = j + 1;
          found = true;
          break;
        }
      }

      if (found) continue;

      // fallback: if token at least contains an image-like extension fragment, keep it; otherwise push as-is
      if (token.length > 0) urls.push(token);
      i++;
    }

    return urls;
  }

  backToGallery() {
    this.selectedEvent = null;
    this.galleriaImages = [];
    this.displayCustom = false;
  }

  get checkedCount(): number {
    return this.currentTasks.filter(t => t.checked).length;
  }

  get progress(): number {
    const tasks = this.currentTasks;
    if (!tasks || tasks.length === 0) return 0;
    return Math.round((this.checkedCount / tasks.length) * 100);
  }

  get isAllChecked(): boolean {
    const tasks = this.currentTasks;
    return tasks.length > 0 && this.checkedCount === tasks.length;
  }

  // Helpers for gallery (per-event progress)
  getEventCheckedCount(ev: EventItem): number {
    return ev.tasks.filter(t => t.checked).length;
  }

  getEventProgress(ev: EventItem): number {
    const total = ev.tasks.length;
    if (total === 0) return 0;
    return Math.round((this.getEventCheckedCount(ev) / total) * 100);
  }

  getEventIsAllChecked(ev: EventItem): boolean {
    return ev.tasks.length > 0 && this.getEventCheckedCount(ev) === ev.tasks.length;
  }

  // called from template when a checkbox changes
  saveState() {
    try {
      if (!this.selectedEvent) return;
      const payload = this.selectedEvent.tasks.map(t => ({ id: t.id, checked: t.checked }));
      localStorage.setItem(`${this.storageKey}:${this.selectedEvent.id}`, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to save events state', e);
    }
  }

  private loadState() {
    try {
      // load saved state per event
      this.events.forEach(ev => {
        const raw = localStorage.getItem(`${this.storageKey}:${ev.id}`);
        if (!raw) return;
        const parsed: Array<{ id: string; checked: boolean }> = JSON.parse(raw);
        parsed.forEach(p => {
          const t = ev.tasks.find(x => x.id === p.id);
          if (t) t.checked = !!p.checked;
        });
      });
      // if a selectedEvent exists, also ensure its data is loaded
      if (this.selectedEvent) {
        const raw = localStorage.getItem(`${this.storageKey}:${this.selectedEvent.id}`);
        if (raw) {
          const parsed: Array<{ id: string; checked: boolean }> = JSON.parse(raw);
          parsed.forEach(p => {
            const t = this.selectedEvent!.tasks.find(x => x.id === p.id);
            if (t) t.checked = !!p.checked;
          });
        }
      }
    } catch (e) {
      console.warn('Failed to load events state', e);
    }
  }

  // Create new event from sidebar inputs
  createEvent() {
    const tasks = this.newEventTasksText
      .split('\n')
      .map((l, i) => ({ id: `t${i+1}`, label: l.trim(), checked: false }))
      .filter(t => t.label.length > 0);
    const images = this.extractUrls(this.newEventImagesText);
    const ev: Omit<EventItem, 'id'> = {
      title: this.newEventTitle || 'New Event',
      image: this.newEventImage,
      images: images.length ? images : [this.newEventImage],
      tasks
    };
    this.eventsService.createEvent(ev).then(() => {
      this.createSidebarVisible = false;
      this.newEventTitle = '';
      this.newEventTasksText = '';
      this.newEventImagesText = '';
    }).catch(err => console.error('Failed to create event in Firebase', err));
  }

  // Open edit drawer prefilled with event data
  openEditEvent(ev: EventItem) {
    this.editingEvent = ev;
    this.editEventTitle = ev.title;
    this.editEventImage = ev.image;
    this.editEventTasksText = ev.tasks.map(t => t.label).join('\n');
    this.editEventImagesText = (ev.images && ev.images.length) ? ev.images.join('\n') : ev.image;
    this.editSidebarVisible = true;
  }

  // Save edits to event
  saveEditEvent() {
    if (!this.editingEvent) return;
    this.editingEvent.title = this.editEventTitle || this.editingEvent.title;
    this.editingEvent.image = this.editEventImage || this.editingEvent.image;
    const images = this.extractUrls(this.editEventImagesText);
    this.editingEvent.images = images.length ? images : [this.editingEvent.image];
    // Rebuild tasks list (preserve checked state when possible)
    const lines = this.editEventTasksText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const newTasks: EventTask[] = lines.map((label, i) => {
      const existing = this.editingEvent!.tasks[i] || this.editingEvent!.tasks.find(t => t.label === label);
      return { id: existing ? existing.id : `${this.editingEvent!.id}-t${i+1}`, label, checked: existing ? existing.checked : false };
    });
    this.editingEvent.tasks = newTasks;
    // close drawer
    // persist changes to Firebase
    const id = this.editingEvent.id!;
    const payload: Partial<EventItem> = {
      title: this.editingEvent.title,
      image: this.editingEvent.image,
      images: this.editingEvent.images,
      tasks: this.editingEvent.tasks
    };
    this.eventsService.updateEvent(id, payload).then(() => {
      this.editSidebarVisible = false;
      // If the user is editing the currently selected event, refresh the galleria immediately
      if (this.selectedEvent && this.selectedEvent.id === id) {
        this.galleriaImages = this.getGalleriaImages(this.selectedEvent);
        this.activeIndex = 0;
        this.displayCustom = false;
      }
      this.editingEvent = null;
      this.saveAllStates();
    }).catch(err => console.error('Failed to update event in Firebase', err));
  }

  // Delete an event (with confirmation)
  deleteEvent(ev: EventItem) {
    if (!window.confirm('Excluir evento "' + ev.title + '"? Esta ação não pode ser desfeita.')) return;
    if (!ev.id) return;
    this.eventsService.deleteEvent(ev.id).then(() => {
      try { localStorage.removeItem(`${this.storageKey}:${ev.id}`); } catch (e) { /* ignore */ }
      if (this.selectedEvent && this.selectedEvent.id === ev.id) this.backToGallery();
    }).catch(err => console.error('Failed to delete event in Firebase', err));
  }

  // Save states for all events (useful after editing tasks list)
  private saveAllStates() {
    try {
      this.events.forEach(ev => {
        const payload = ev.tasks.map(t => ({ id: t.id, checked: t.checked }));
        localStorage.setItem(`${this.storageKey}:${ev.id}`, JSON.stringify(payload));
      });
    } catch (e) {
      console.warn('Failed to save all events state', e);
    }
  }
}
