import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FilesService } from '../files.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // For remote testing
  url: any = "https://99.244.63.14:8081/downloadFile/";
  
  // For local testing
  // url: any = "http://192.168.0.146:8081/downloadFile/";
  

  songs = "";
  currentSong = "";
  currentSongIndex = 0;
  audio = new Audio();
  isPlaying = !this.audio.paused;

  constructor(private files: FilesService) { }

  async ngOnInit(): Promise<void> {
    const res: any = await this.files.getData();

    this.songs = res
    console.log(this.songs)

  }

  playSong(index: number) {

    this.currentSong = this.url + this.songs[index];

    this.audio.src = this.currentSong;
    this.audio.load();
    this.audio.play();

    this.isPlaying = !this.audio.paused;
    this.currentSongIndex = index;
  
  }

  pauseSong() {
    this.audio.pause();
    this.isPlaying = !this.audio.paused;
  }

  resumeSong() {
    this.audio.play();

    this.isPlaying = !this.audio.paused;
  }

  prevSong() {
    if (this.currentSongIndex != 0) {
      this.currentSongIndex--;
      this.audio.src = this.url + this.songs[this.currentSongIndex];
      this.audio.play()

    }
  }
  
  nextSong() {
    if (this.currentSongIndex < this.songs.length-1) {
      this.currentSongIndex++;
      this.audio.src = this.url + this.songs[this.currentSongIndex];
      this.audio.play()

    }
  }

}
