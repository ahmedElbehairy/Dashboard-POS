import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Customers } from 'src/app/store/Reducers/customer.reducer';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/store/Reducers/product.reducer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatPseudoCheckboxModule,
    SharedModule,
    NgbModule,
    CommonModule,
    RouterModule,
    MatTooltipModule,
  ],
})
export class TableComponent {
  @Input() ELEMENT_DATA!: Customers[] | Product[];
  @Input() displayedColumn: string[] = [];
  @Input() Router!: string;
  @Input() nextId!: number;
  @Input() TFE!: string;
  @Output() Delete = new EventEmitter<string>();
  @Output() ManyDelete = new EventEmitter<string[]>();
  @Input() titleOfButton!:string ;
  displayedColumns: string[] = [];
  idItem: string[] = [];
  deleteId!: string;
  dataSource: any;
  selection = new SelectionModel<Customers | Product>(true, []);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      !changes['ELEMENT_DATA'].firstChange &&
      changes['ELEMENT_DATA'].currentValue
    ) {
      this.dataSource = new MatTableDataSource<Customers | Product>(
        this.ELEMENT_DATA
      );
      this.displayedColumns = ['select', ...this.displayedColumn, 'Action'];
    }
  }
  deleteEl(id: string) {
    this.deleteId = id;
  }
  deleteManyEl() {
    this.ManyDelete.emit(this.idItem);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customers): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  selectedRowId: any;

  scrollToIndex() {
    let idItem: string[] = [];
    if (this.selection.selected?.length > 0) {
      this.titleOfButton = 'Delete';
    } else {
      this.titleOfButton = '+ Add Product';
    }
    this.selection.selected.map((el: any, index: number) => {
      idItem[index] = el.id;
    });
    this.idItem = idItem;
    console.log(this.idItem);
  }
}
