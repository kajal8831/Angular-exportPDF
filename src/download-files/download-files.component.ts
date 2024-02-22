import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DownloadService } from 'src/download.service';
import {
  ExportAsService,
  ExportAsConfig,
  SupportedExtensions,
} from 'ngx-export-as';

@Component({
  selector: 'app-download-files',
  templateUrl: './download-files.component.html',
  styleUrls: ['./download-files.component.css']
})
export class DownloadFilesComponent implements OnInit{
  
  ngOnInit(): void {
    this.downloadService.GetWeatherForecast().subscribe((data: any[]) => {
      this.posts = data;
      console.log("SSS",this.posts);
    });
  }

  constructor(private downloadService : DownloadService,private exportAsService: ExportAsService) {}

  posts : any = [];
  downloadAs: SupportedExtensions = 'pdf';
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };
  exportAsConfig1: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };

  generatePDF(): void {
    //alert("PDF generated");
    this.exportAsConfig.type = this.downloadAs;
    // download the file using old school javascript method
    this.exportAsService
      .save(this.exportAsConfig, 'Exported_PDF')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
    //   console.log(content);
    // });
  }

  generateExcel(): void {
    //alert("PDF generated");
    this.exportAsConfig.type = 'xlsx';
    // download the file using old school javascript method
    this.exportAsService
      .save(this.exportAsConfig1, 'Exported_Excel')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
    //   console.log(content);
    // });
  }
}
