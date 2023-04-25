//create cursors{
this.cursors=this.InputDeviceInfo.keyboard.createCursorsKeys();
//add collider between player and plattforms}
this.physics.add.collider(this.player, platforms);
this.physics.add.collider(platforms,this,shapesGroup);
this.physics.add.collider(platforms,this.shapesGroup);
update(){
//check if not game over or win
//update player movement
if(this.cursors.left.isDown){
    this.player.setVelocity(-250);
}else{
    if (this.cursors.right.isDown){
        this.player.setVelocityX(250)
    }else{
        this.player.setVelocityX(0)
    }
}
}

}
//afuera y abajjo del update
addShape(){
    //get a random shape
    
}