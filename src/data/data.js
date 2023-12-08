export const stat=[
    //스윙
    // 0.홈런(점수=러너+1,러너=0)
    {text:'HOME RUN!!!',mage:'https://lh4.googleusercontent.com/A-TIYhMuXVlvleWANFUZ4CavPB8Gbc1ybDeXQGPzWEg_U5cHZimKTJy5DTR-0sZ0jCNb25Mg6GCAftZBaoOG4uhOihhnB8sFT_RZD464tPYrggVHmVy392I9P7SP6RlOy1xjxQJY'},
    // 1.페어(러너++,러너=4?(점수++,러너=3))
    {text:'FAIR HIT!',mage:'https://media.istockphoto.com/id/1491149845/vector/baseball-batter-player-running-to-base-after-hitting-ball-flat-vector-isolated.jpg?s=612x612&w=0&k=20&c=cA9s8yH41FRQcgo37DvWxju7PLyM5GPw7hQXn7oxVXo='},
    // 2.외뜬(아웃++,러너=3?(점수++,러너--))
    {text:'OUTFIELD FLYOUT!',mage:'https://www.clker.com/cliparts/1/3/c/a/1197085816177213681johnny_automatic_making_the_catch.svg.hi.png'},
    // 3.내뜬(아웃++)
    {text:'INFIELD FLYOUT!',mage:'https://www.clker.com/cliparts/1/3/c/a/1197085816177213681johnny_automatic_making_the_catch.svg.hi.png'},
    // 4.땅볼(
        // 	러너=0?(아웃++)
        // 	러너=1(병살)?(아웃+2,러너--)
        // 	러너=2(3병)?(아웃+3,러너-2)
        // 	러너=3(홈 투구)?(아웃++)
        // )
    {text:'GROUNDER OUT!',mage:'https://lauraleefritz.net/cdn/shop/products/Baseball_Fielding_large.png?v=1455605166'},
    // 5.삼진(아웃++)
    {text:'SWING STRIKE OUT!',mage:'https://i.pinimg.com/originals/ae/8b/bc/ae8bbc66bb5ff18f5ce05257bc018d14.jpg'},
    // 6.파울(유지)
    {text:'FOUL!!',mage:'https://s3.amazonaws.com/media.socceramerica.com/dam/cropped/2022/10/21/ref-tales.PNG'},
]