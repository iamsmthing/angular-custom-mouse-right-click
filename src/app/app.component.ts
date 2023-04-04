import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showContextMenu = false;
  contextMenuPosition: { x: number; y: number };

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.showContextMenu = true;
  }

  onEdit() {
    console.log('Edit');
    this.showContextMenu = false;
  }

  onDelete() {
    console.log('Delete');
    this.showContextMenu = false;
  }

}
