import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry, UploadEvent } from 'ngx-file-drop';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss']
})
export class UploadContainerComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUploadContainerComponent, {
    width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    });
    }
}

export interface MediaData {
  attribute: string;
  score: number;
 }

 const ELEMENT_DATA: MediaData[] = [
 {score: 30, attribute: 'Irregular time sequencing'},
 {score: 15, attribute: 'Asynchronous eye blinking'},
 {score: 10, attribute: 'Eye blinking'},
 {score: 25, attribute: 'Abrupt jumpring in movement'}
 ];

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'upload-dialog.example.html',
  styleUrls: ['./upload-container.component.scss']
})
export class DialogUploadContainerComponent {
  public files: UploadFile[] = [];
  public showProgressBar: boolean;
  public color: string;
  public filePath: string;
  public displayedColumns: string[] = ['attribute', 'score'];
  public dataSource = ELEMENT_DATA;
  public quality: string;
  public value: number;
  public showResults: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogUploadContainerComponent>,
    private http: HttpClient) {
      this.showProgressBar = false;
      this.color = 'accent';
      this.quality = 'low';
      this.value = 20;
      this.showResults = false;
    }
    onNoClick(): void {
    this.dialogRef.close();
  }

  public dropped(event: UploadEvent) {
    this.showProgressBar = true;
    this.files = event.files;
    for (const droppedFile of event.files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.filePath = droppedFile.relativePath;
          console.log(droppedFile.relativePath, file);

          // You could upload it like this:
          const formData = new FormData();
          formData.append('logo', file, droppedFile.relativePath);

          this.http.post('http://localhost:1518/api/upload', formData, { responseType: 'blob' })
          .subscribe(data => {
            console.log('Received response: ' + data);
            this.showProgressBar = false;
            this.showResults = true;
          });
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
