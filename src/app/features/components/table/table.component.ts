import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableTitle: string = ''

  @Input() tableData: any = [{}]
  @Input() tableHeader: any = []
}
