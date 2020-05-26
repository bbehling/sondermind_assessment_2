import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-uniquelist",
  templateUrl: "./uniquelist.component.html",
  styleUrls: ["./uniquelist.component.css"],
})
export class UniquelistComponent implements OnInit {
  public item: string;
  public items = [];
  constructor() {}

  ngOnInit() {}

  onKeyUp(e) {
    if (e.code === "Enter") {
      this.addItem();
    }
  }

  addItem() {
    if (this.item.length > 0) {
      this.item = this.item.replace(/ /g, "");
      if (!this.containsItem()) {
        this.items.push(this.item);
        this.item = "";
      }
    }
  }

  removeItem() {
    if (this.item.length > 0) {
      this.item = this.item.replace(/ /g, "");
      if (this.containsItem()) {
        this.items = this.items.filter((element) => element !== this.item);
        this.item = "";
      }
    }
  }

  clearItems() {
    this.items = [];
  }

  containsItem() {
    return this.items.find((element) => element === this.item);
  }
}
