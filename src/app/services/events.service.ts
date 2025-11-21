import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, remove, update, Database } from 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

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

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private app = initializeApp(environment.firebase);
  private db: Database = getDatabase(this.app);
  private eventsSubject = new BehaviorSubject<EventItem[]>([]);
  public events$ = this.eventsSubject.asObservable();

  loadEvents(): void {
    const eventsRef = ref(this.db, 'eventos');
    onValue(eventsRef, snapshot => {
      const data = snapshot.val();
      const items: EventItem[] = [];
      if (data) {
        Object.keys(data).forEach(key => {
          items.push({ id: key, ...data[key] });
        });
      }
      this.eventsSubject.next(items);
    }, error => {
      console.error('Erro ao carregar eventos do Firebase:', error);
    });
  }

  async createEvent(ev: Omit<EventItem, 'id'>): Promise<void> {
    const eventsRef = ref(this.db, 'eventos');
    const newRef = push(eventsRef);
    await set(newRef, ev);
  }

  async updateEvent(id: string, ev: Partial<EventItem>): Promise<void> {
    const eventRef = ref(this.db, `eventos/${id}`);
    await update(eventRef, ev as any);
  }

  async deleteEvent(id: string): Promise<void> {
    const eventRef = ref(this.db, `eventos/${id}`);
    await remove(eventRef);
  }
}
