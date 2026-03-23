import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user-service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.html',
  styleUrls: ['./user-list-component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];                
  selectedUser: User | null = null;  
  originalUser: User | null = null;  
  successmgs = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: data => this.users = data,
      error: err => console.error('Error loading users', err)
    });
  }
  
  editUser(user: User) {
    this.selectedUser = { ...user };   
    this.originalUser = { ...user };   
  }

  onUpdate() {
    if (!this.selectedUser || !this.originalUser) return;

    if (
      this.selectedUser.name === this.originalUser.name &&
      this.selectedUser.email === this.originalUser.email &&
      this.selectedUser.phone === this.originalUser.phone
    ) {
      this.successmgs= "No changes made!";
      this.selectedUser = null;
      this.originalUser = null;
      return;
    }

    this.userService.updateUser(this.selectedUser.id, this.selectedUser)
        .subscribe({
          next: updatedUser => {
            const index = this.users.findIndex(u => u.id === updatedUser.id);
            if (index > -1) this.users[index] = updatedUser;

            this.successmgs = `User ${updatedUser.name} updated successfully!`;
            this.selectedUser = null;
            this.originalUser = null;
          },
          error: err => {
            console.error('Update failed', err);
            this.successmgs = "Update failed!";
          }
        });
  }
}

