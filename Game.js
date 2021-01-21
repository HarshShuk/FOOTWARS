class Game{
    constructor(){}
    display(){
        if(backgroundImg){
            background(backgroundImg);
          }
                //for first country
        for(var j = 85; j<= height-50; j = j+70){
            playerPlinkos.push(new Plinko(55 ,j,'red'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     playerPlinkos.push(new Plinko(85 ,j))
        // }
        for(var j = 60; j<= height-50; j = j+70){
            playerPlinkos.push(new Plinko(120 ,j,'red'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     playerPlinkos.push(new Plinko(150 ,j))
        // }
        for(var j =85; j<= height-50; j = j+70){
            playerPlinkos.push(new Plinko(185 ,j,'red'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     playerPlinkos.push(new Plinko(225 ,j))
        // }
        for(var j = 60; j<= height-50; j = j+70){
            playerPlinkos.push(new Plinko(265 ,j,'red'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     playerPlinkos.push(new Plinko(305 ,j))
        // }
        for(var j = 0; j<playerPlinkos.length;j++){
            playerPlinkos[j].display();
        }

        //for second country

        for(var j = 85; j<= height-50; j = j+70){
            enemyPlinkos.push(new Plinko(955 ,j,'blue'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     enemyPlinkos.push(new Plinko(985 ,j))
        // }
        for(var j = 60; j<= height-50; j = j+70){
            enemyPlinkos.push(new Plinko(1020 ,j,'blue'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     enemyPlinkos.push(new Plinko(1050 ,j))
        // }
        for(var j = 85; j<= height-50; j = j+70){
            enemyPlinkos.push(new Plinko(1085 ,j,'blue'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     enemyPlinkos.push(new Plinko(1125 ,j))
        // }
        for(var j = 60; j<= height-50; j = j+70){
            enemyPlinkos.push(new Plinko(1165 ,j,'blue'))
        }
        // for(var j = 60; j<= height-50; j = j+50){
        //     enemyPlinkos.push(new Plinko(1205 ,j))
        // }
        for(var j = 0; j<enemyPlinkos.length;j++){
            enemyPlinkos[j].display();
        }

        // ground1
        var ground1=new Ground(625,150,1260,5)

        //ground2
        var ground2=new Ground(625,height,1260,5)
    
        //draw line at the centre
        for (var i = 0; i < 700; i=i+20) {
        line(625,i,625,i+10);
        }

        // ground1.display();
        // ground2.display();

        textSize(35)
        fill('darkblue')
        text(armyName,200,30)
        text("Mad Army",900,30)
    
        football.display();


        
    }
}