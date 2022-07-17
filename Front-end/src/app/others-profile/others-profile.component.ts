import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetOthersProfileService} from "../get-others-profile.service";
import {GetOthersDetailsPayload} from "./get-others-details.payload";
import {PlayerDetailsService} from "../player-details.service";
import {SendPeerRequestService} from "../send-peer-request.service";
import {ToastrService} from "../toastr.service";
import {GetPeerRequestsAsNotificationService} from "../get-peer-requests-as-notification.service";
import {NotificationsPayload} from "../navbar/notifications.payload";
import {AcceptingOrRejectingTheRequestService} from "../accepting-or-rejecting-the-request.service";
import {UnpeerService} from "../unpeer.service";
import {GetUploadedImageService} from "../get-uploaded-image.service";

@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.scss']
})
export class OthersProfileComponent implements OnInit {

  otherPlayerDetails : GetOthersDetailsPayload
  userName: string
  url : string


  notifications : NotificationsPayload[];
  response : string
  imgBlob: Blob;
  imgSrc: string;



  constructor(private pdService : PlayerDetailsService, private getOtherProfile : GetOthersProfileService,
              private sendPeerRequestService : SendPeerRequestService, private popupNotification: ToastrService,
              private getPeerRequests : GetPeerRequestsAsNotificationService,private getUploadedPhoto : GetUploadedImageService,
              private acceptOrDeclineService : AcceptingOrRejectingTheRequestService, private unPeerService : UnpeerService,
              private router:Router , private actvRoute : ActivatedRoute) {

    this.otherPlayerDetails = {
      firstName : '',
      lastName : '',
      username : '',
      handles : [],
      country: {
        name : ''
      },
      requested : false,
      otherRequested : false,
      peer : false,
      discordTag : '',
      profilePicture : {
        id : '',
        type : '',
        size : 0,
        url : ''
      },
      reviewed : false
    };
    this.userName = '';
    this.url = '';
    this.notifications = [];
    this.response = '';
    this.imgBlob = new Blob();
    this.imgSrc = '';
  }

  ngOnInit(): void {
    this.userName = this.actvRoute.snapshot.params['username'];
    this.pdService.getPlayerDetails().subscribe(data =>{
      console.log(data);
      if (data.username === this.userName){
        this.router.navigate(['/profile'])
      } else {
        this.getothersDetails();
      }
    })


  }

  getothersDetails(){
    this.getOtherProfile.getOthersDetails(this.userName).subscribe(data =>{
      this.otherPlayerDetails = data;
      localStorage.setItem('enteredOtherProfile' , this.otherPlayerDetails.username)
      console.log(this.otherPlayerDetails);
      if (this.otherPlayerDetails.profilePicture){
        this.getUploadedPhoto.getUploadedImage(this.otherPlayerDetails.profilePicture.url).subscribe(data=>{
          this.imgBlob = data;
          console.log(this.imgBlob);
          let reader = new FileReader();
          reader.readAsDataURL(this.imgBlob);
          reader.onload = (event: any) =>{
            this.imgSrc = event.target.result;

          }
        })
      }

    } , error => {
      this.router.navigate(['/profile'])
    })
  }

  sendPeerRequest(){
      this.sendPeerRequestService.sendPeerRequest(this.userName).subscribe(data =>{
        this.getothersDetails();
        this.popupNotification.success("Request has been sent successfully");
        console.log(data);
      })
  }



  acceptingTheRequest(){
    this.response = 'accept';
    this.acceptOrDeclineService.accept(this.response , this.userName).subscribe(data =>{
      console.log(this.response);
      console.log(data);
      this.getothersDetails();
    })
  }

  rejectingTheRequest(){
    this.response = 'reject';
    this.acceptOrDeclineService.reject(this.response , this.userName).subscribe(data =>{
      console.log(this.response);
      console.log(data);
      this.getothersDetails();

    })
  }

  unPeer(){
    this.unPeerService.unPeer(this.userName).subscribe(data =>{
      this.getothersDetails();
    })
  }
}
