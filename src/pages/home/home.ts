import { Component,OnInit } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {Hometab} from '../../tabs/hometab/hometab';
import {Accounttab} from '../../tabs/accounttab/accounttab';
import {Orderstab} from '../../tabs/orderstab/orderstab';
import {Searchtab} from '../../tabs/searchtab/searchtab';
import {OneSignal} from '@ionic-native/onesignal';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

homeTab = Hometab;
accounttab = Accounttab;
orderstab = Orderstab;
searchtab = Searchtab;


  constructor(public navCtrl: NavController,private oneSignal: OneSignal,private alertctrl:AlertController) {

   
  }
  
  
  ngOnInit(){
    
    document.getElementsByClassName("tabbar")[0].classList.add("show-tabbar");
        
  }
  



}
