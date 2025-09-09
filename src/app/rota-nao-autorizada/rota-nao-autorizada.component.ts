import { Component,inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'


@Component({
  selector: 'app-rota-nao-autorizada',
  imports: [lib.LabelComponent],
  templateUrl: './rota-nao-autorizada.component.html',
  styleUrl: './rota-nao-autorizada.component.css'
})
export class RotaNaoAutorizadaComponent {

    LabelService = inject(lib.LabelService);
    readonly LabelFontWeights = lib.LabelFontWeights;
    readonly LabelIconPositionEnum = lib.LabelIconPositionEnum;
    LabelModel! : lib.LabelModel;

    readonly IconsEnum = lib.IconsEnum;
}
