(function() {
    document.querySelector('#btn-join-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-create-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-start-mode-0').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-team-leave').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-start-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-start-team').style.cssText = 'background: #272727; border-bottom: #141414; box-shadow: 0 0;';
    
    document.querySelector('#btn-customize').style.backgroundColor = '#272727'
    document.querySelector('#btn-customize').style.cssText = 'border-bottom: #141414; box-shadow: 0 0;';
    document.querySelector('#btn-customize').style.backgroundColor = '#272727'
    
    document.querySelector('#background').style.cssText = 'background-image: url(https://raw.githubusercontent.com/FilipKZhong/SimpleSurviv/master/Visuals/%5BFREE%5D%20RainBowBackground.jpeg)'
    
    document.querySelector('#start-menu').style.cssText = 'position: relative; top: 130px; box-shadow: 0 0;'
    document.querySelector('#news-block').style.cssText = 'position: relative; top: 100px'
    
    document.querySelector('#team-menu').style.cssText = 'display: none; top: 80px'
    
    document.querySelector('#ad-block-left').style.cssText = 'background-color: rgba(0,0,0,0);'

    let squad = document.getElementById('btn-start-mode-1');
    squad.parentNode.removeChild(squad);

    let squad2 = document.getElementById('btn-start-mode-2');
    squad2.parentNode.removeChild(squad2);

    let help = document.getElementById('btn-help');
    help.parentNode.removeChild(help);

    let ad = document.getElementById('surviv-io_300x250');
    ad.parentNode.removeChild(ad);

    let social = document.getElementById('social-share-block');
    social.parentNode.removeChild(social);

    let startContainer = document.querySelector('#start-menu')
    startContainer.style.boxShadow = ''
    startContainer.style.backgroundColor = '#0000'

    let news = document.querySelector('#news-block')
    news.style.boxShadow = ''
    news.style.backgroundColor = '#0000'

    let main = document.getElementById('server-select-main');
    main.parentNode.removeChild(main);

    let gameapp = document.getElementById('start-bottom-left');
    gameapp.parentNode.removeChild(gameapp);

    let streams = document.getElementById('start-top-left-desktop');
    streams.parentNode.removeChild(streams);

    let logo = document.getElementById('start-row-header');
    logo.parentNode.removeChild(logo);

    let xw = document.querySelectorAll('.btn-start-option')

    xw[1].style.backgroundColor = '#141414'

    xw[2].style.backgroundColor = '#141414'

    xw[3].style.backgroundColor = '#141414'

    xw[0].style.backgroundColor = '#141414'
})();
