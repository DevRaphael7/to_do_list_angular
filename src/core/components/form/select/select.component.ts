import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() placeholder = "Select";
  @Input() values: Set<string>
  //Atributo usado para identificar o valor quando emitir de filho para pai (keyIdentify)
  @Input() keyIdentify: string | number = "select"

  private open = false;

  OptionSelected = ""

  @Output() selected = new EventEmitter<{ key: string | number, e: string }>();

  get getOpen() {
    return this.open
  }

  openMenu() {
    this.open = !this.open
  }

  selectOption(e: string) {
    this.OptionSelected = e
    this.open = false;
    this.selected.emit({ e, key: String(this.keyIdentify) })
  }
}
