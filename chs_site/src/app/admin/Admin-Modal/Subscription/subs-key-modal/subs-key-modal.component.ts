import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SubsKeyVM } from '../../../shared/ViewModels/SubsKeyVM';

@Component({
  selector: 'app-subs-key-modal',
  templateUrl: './subs-key-modal.component.html',
  styleUrls: ['./subs-key-modal.component.css']
})
export class SubsKeyModalComponent implements OnInit {
   displayedColumns: string[] = ['id', 'keyName', 'keydescription'];
  dataSource!: MatTableDataSource<SubsKeyVM>;
  isactive:boolean=true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id:number = 0;
  keyName !: string;
  keyDescription!:string;
  _dataSourceList : any[]=[];
subskeypointsform!: FormGroup;
items!: FormArray;
  constructor(private fb: FormBuilder, 
              private dialogRef : MatDialogRef<SubsKeyModalComponent>,
              private _toast : ToastrService) { }

  ngOnInit(): void {
     this.subskeypointsform =this.fb.group({
      items: this.fb.array([])
    });
  }
  getItemsArray() {
    return (this.subskeypointsform.get('items') as FormArray).controls;
  }

  createItem(): FormGroup {  
    return this.fb.group({  
       id:new FormControl(0,[Validators.required]),
      keyName :new FormControl("",[Validators.required]),
      keydescription :new FormControl("",[Validators.required])
    });  
  }   
  addItem(): void {  
    if(this.keyName == "" || this.keyName == undefined){
      this._toast.error('Please enter value for key name.', 'Error');
    }
    else  if(this.keyDescription == "" || this.keyDescription == undefined){
      this._toast.error('Please enter value for key description.', 'Error');
    }
      else {
    this.id++;
    let _dataSource  = {
      id : 0,
      keyName : "",
      keydescription :""
    };
    _dataSource.id= this.id;
    _dataSource.keyName = this.keyName;
    _dataSource.keydescription = this.keyDescription;

    this._dataSourceList.push(_dataSource);
    this.dataSource = new MatTableDataSource(this._dataSourceList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      }
  }
    ngAfterViewInit() {
    
  }
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  CloseModal(){
    this.dialogRef.close();
  }
}