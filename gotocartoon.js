GoToYoutube = function(){
    gameReset();

    if (pageChanged==true)
    {DictPage--;}
    window.alert("Chapter="+ChapterNr+" Page="+DictPage+"   ");

        //window.open("https://youtu.be/a58Phhm8kuI"); 
    
    if (ChapterNr==1)
        {
            if (DictPage==0)
                {window.open( "https://youtu.be/VCg5ytz_DFA?t=15");} 
        
            else if (DictPage==1)
                 {window.open( "https://youtu.be/OnTYRupeOSs");} 
        
            else if (DictPage==2)
                 {window.open( "https://youtu.be/XhYSqZLVVIw");} 
            else if (DictPage==3)
                 {window.open( "https://youtu.be/5XOAvDJV-MQ");} 
            // //---------------------------------------------------------//
            // else if (DictPage==3)
            // 	{window.open( "---");} 
            // else if (DictPage==6)
            // 	{window.open( "---");} 
        
            // else if (DictPage==9)
            // 	{window.open( "---");} 
        }
    
    else if (ChapterNr==2)
    {
        
        // if(DictPage==0){window.open( "https://youtu.be/nS7tEY5gSJA");} 
        // if(DictPage==1)
        // 	{window.open( "https://www.youtube.com/watch?v=T0MwtvJjHfM&t=2s&ab_channel=B%C3%B8rneTV");} 
        // else if (DictPage==2)
        // 	{window.open( "https://youtu.be/sfin4wzxsBI?t=15");} 
        // else if ((DictPage==3)||(DictPage==4))
        // 	{window.open( "https://www.youtube.com/watch?v=ACGNuROv4p0&ab_channel=PeterMains");} 
        // else if (DictPage==5)
        // 	{window.open( "https://youtu.be/HtkHSWG9Ti0?t=15");} 
        // else if (DictPage==6)
        // 	{window.open( "https://youtu.be/Z4d36lmtRII?t=15");} 
        // else if (DictPage==7)
        // 	{window.open( "https://youtu.be/Z4d36lmtRII?t=15");} 
        // else if (DictPage==8)
        // 	{window.open( "https://youtu.be/SM_s5cwE4z0?t=15 ");} 
        // else if (DictPage==9)
        // 	{window.open( "https://youtu.be/SM_s5cwE4z0?t=15 ");} 
            
    }

        
    // else if (ChapterNr==3)
    // {
    // 	if (DictPage==0)
    // 	{ window.open( "https://www.youtube.com/watch?v=nS7tEY5gSJA&ab_channel=B%C3%B8rneTV");} 

    // 	if ((DictPage==1)||(DictPage==2))
    // 	{window.open( "https://youtu.be/dvavLd3Xq5Y?t=15");} 
    // else if (DictPage==3)  
    // 	{window.open( "https://youtu.be/W72JGtCPHTw?t=15");} 
    // else if (DictPage==4)
    // 	{window.open( "https://youtu.be/QgUjWDX6RgU?t=15");} 
    // else if (DictPage==5)  
    // 	{window.open( "https://youtu.be/Z2AD0FltGBw?t=15");} 
    // }
    // 	else{window.alert("no youtube video for this page");}
        //*/
    if (pageChanged==true){DictPage++;};
}


GoToYoutubeEnglish = function(){
    console.log("GoToYoutubeEnglish func");
    
    gameReset();

    if (pageChanged==true)
    {DictPage--;}
    window.alert("Chapter="+ChapterNr+" Page="+DictPage+"   ");

     if (ChapterNr==1)
    {
        if (DictPage==0)
            {window.open( "https://youtu.be/gu6PYRquPfw");} 
         if(DictPage==1)
                {window.open( "https://youtu.be/hWdLhB2okqA?t=15");} 
         else if (DictPage==2)
                {window.open( "https://youtu.be/mBIPSF8Hciw");}  //eng
         else if ((DictPage==3)||(DictPage==4))
         	    {window.open( "https://youtu.be/yPsywDWFjOg");} //eng
        // else if (DictPage==5)
        // 	{window.open( "https://youtu.be/lJnADJxyr54?t=15");} //eng
        // else if (DictPage==6)
        // 	{window.open( "https://youtu.be/HV86siFCa7o");} //eng
        // else if (DictPage==7)
        // 	{window.open( "https://youtu.be/HV86siFCa7o");}  //eng
        // else if (DictPage==8)
        // 	{window.open( "https://youtu.be/yPsywDWFjOg?t=15 ");} //shopping
        // else if (DictPage==9)
        // 	{window.open( "https://youtu.be/yPsywDWFjOg?t=15 ");} //shopping
    }
    

    if (pageChanged==true){DictPage++;};




}