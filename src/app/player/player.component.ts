import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  url:any = "http://192.168.0.146:8081/downloadFile/";
  
  songs = "";
  
  currentSong = "";
  
  audio = new Audio();

  constructor(private files: FilesService) { }

  async ngOnInit(): Promise<void> {
    const res:any = await this.files.getData();
    
    this.songs = res
    console.log(this.songs)
    // this.currentSong = this.url + this.songs[0];
    
  }

  playSong(index:number) {
    
  }

}
