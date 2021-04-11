import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'types/Authorization';

import { Utils } from '../../../../utils/Utils';
import { SiteAreaComponent } from './site-area.component';

@Component({
  template: '<app-site-area #appRef [currentSiteAreaID]="siteAreaID" [inDialog]="true" [dialogRef]="dialogRef"></app-site-area>'
})
export class SiteAreaDialogComponent implements AfterViewInit {
  @ViewChild('appRef') public appRef!: SiteAreaComponent;
  public siteAreaID!: string;

  public constructor(
    public dialogRef: MatDialogRef<SiteAreaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.siteAreaID = data.id as string;
  }

  public ngAfterViewInit() {
    // Register key event
    Utils.registerSaveCloseKeyEvents(this.dialogRef, this.appRef.formGroup,
      this.appRef.saveSiteArea.bind(this.appRef), this.appRef.close.bind(this.appRef));
  }
}
