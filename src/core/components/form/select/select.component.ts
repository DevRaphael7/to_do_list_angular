import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputModel } from 'src/core/models/input.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() inputData: InputModel;

  private open = false;

  OptionSelected = ""

  listaDeValores: string[] = []

  @Output() selected = new EventEmitter<{ key: string | number, e: string }>();

  ngOnInit(): void {
    try {
      this.listaDeValores = this.inputData.props.value as string[];
    } catch(ex) {
      console.error('Ops, o campo informado para seleção não é type string[]!')
    }
  }

  get getOpen() {
    return this.open
  }

  openMenu() {
    this.open = !this.open
  }

  selectOption(e: string) {
    this.OptionSelected = e
    this.open = false;
    this.selected.emit({ e, key: this.inputData.getId })
  }
}
