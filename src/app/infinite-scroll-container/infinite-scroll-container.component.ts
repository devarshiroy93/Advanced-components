import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { catchError, of, Subscription } from 'rxjs';
import { User } from '../Auxiliary/user/user.component';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-infinite-scroll-container',
  standalone: true,
  imports: [InfiniteScrollComponent],
  template: `
    <div>
      <h2>Infinite scroll</h2>
      <app-infinite-scroll 
      [users]="users || []"
      (fetchNext)="onFetchNextSet($event)"></app-infinite-scroll>
    </div>
  `,
  styleUrl: './infinite-scroll-container.component.css'
})
export class InfiniteScrollContainerComponent implements OnInit, OnDestroy {

  http$: HttpClient = inject(HttpClient);

  fetchUserSubscription: Subscription | null = null;

  users: User[] = [];

  startIndex: number = 0;
  endIndex: number = 10;
  stepSize: number = 10;

  fetchUsers() {
    this.fetchUserSubscription = this.http$.get<User[]>(`http://localhost:3000/data?_start=${this.startIndex}&_end=${this.endIndex}`).pipe(
      //map((res:any) => res.data),
      catchError(() => of([])) // Fallback to an empty array in case of an error
    ).subscribe(data => {
      this.users = [...this.users, ...data];
    })

  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  onFetchNextSet(value: boolean) {
    if (value) {
      this.startIndex = this.startIndex + this.stepSize;
      this.endIndex = this.endIndex + this.stepSize;
      this.fetchUsers();
    }
  }

  ngOnDestroy(): void {
    this.fetchUserSubscription?.unsubscribe();
  }

}