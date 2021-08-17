class Platform{

    constructor(x, y, w, h){
        this.platform = createSprite(x,y,w,h);
        this.image = loadImage("Assets/platform.png");
        this.platform.addImage(this.image);
    }

    display(){
        this.platform.collide(player);
        
        if(this.platform.collide(player)){
        player.velocityY = 0;
        }
    }
}