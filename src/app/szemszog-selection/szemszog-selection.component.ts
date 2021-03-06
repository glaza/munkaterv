import { AfterViewInit, Component, Inject, Input, ViewChild } from '@angular/core'
import { MatButtonToggleGroup } from '@angular/material/button-toggle'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { filter, Subject } from 'rxjs'
import { SZEMSZOG } from '../injection-tokens'
import { Csapat, Csoport, CsoportType, Szemszog } from '../models/csapat'

@UntilDestroy()
@Component({
    selector: 'app-szemszog-selection',
    templateUrl: './szemszog-selection.component.html',
    styleUrls: ['./szemszog-selection.component.scss']
})
export class SzemszogSelectionComponent implements AfterViewInit {

    @Input() csapat!: Csapat
    @ViewChild(MatButtonToggleGroup) private buttonGroup!: MatButtonToggleGroup

    constructor(
        @Inject(SZEMSZOG) public szemszog$: Subject<Szemszog>,
    ) {
    }

    ngAfterViewInit(): void {
        this.szemszog$.pipe(
            filter(szemszog => szemszog.csoport.type === CsoportType.Csapat),
            untilDestroyed(this)
        ).subscribe(() => this.buttonGroup.value = undefined)
    }

    changeCsoport(csoport: Csoport) {
        this.szemszog$.next(new Szemszog(this.csapat, csoport))
    }
}
