export class LoggedUserData{

  profilePic = '';

  set profileImage(image){
    this.profilePic = image;
  }

  get profileImage(){
    return this.profilePic;
  }
}
