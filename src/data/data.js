export const stat=[
    //스윙
    // 0.홈런(점수=러너+1,러너=0)
    {text:'HOME RUN!!!',mage:''},
    // 1.페어(러너++,러너=4?(점수++,러너=3))
    {text:'FAIR HIT!',mage:''},
    // 2.외뜬(아웃++,러너=3?(점수++,러너--))
    {text:'OUTFIELD FLYOUT!',mage:''},
    // 3.내뜬(아웃++)
    {text:'INFIELD FLYOUT!',mage:''},
    // 4.땅볼(
        // 	러너=0?(아웃++)
        // 	러너=1(병살)?(아웃+2,러너--)
        // 	러너=2(3병)?(아웃+3,러너-2)
        // 	러너=3(홈 투구)?(아웃++)
        // )
    {text:'GROUNDER OUT!',mage:''},
    // 5.삼진(아웃++)
    {text:'SWING STRIKE OUT!',mage:''},
    // 6.파울(유지)
    {text:'FOUL!!',mage:''},
]