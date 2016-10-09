
var planetaryObliterationLoaded;

if ( ! planetaryObliterationLoaded )
{

    planetaryObliterationLoaded = true;

    function planetaryObliteration()
    {

        var buildVersion = decode( sessionStorage.build_version );

        var patchName = 'planetaryObliteration live_game_control_group_bar.js';

        console.log(patchName + ' on ' + buildVersion + ' last tested on 89755');
        
        var themesetting = api.settings.isSet('ui','planetaryObliterationThemeFunction',true) || 'ON';
        if(themesetting === "ON"){  
            loadCSS("coui://ui/mods/com.stuart98.planetaryobliteration/css/planetaryObliteration_control_group_bar.css");
        }
        
        handlers.planetaryobliterationui = function(payload){
            console.log("SET UI : " + payload);
            if(payload === "planetaryobliteration"){
                $('.body_panel').addClass("planetaryobliterationui");
                
                model.imageSourceForType = function (type) {
                    return 'coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_' + type.toLowerCase() + '.png'
                };                
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_bot.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_bot.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_tank.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_tank.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_air.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_air.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_naval.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_naval.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_orbital.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_orbital.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_advanced.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_advanced.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_fabber.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/red/icon_category_fabber.png"); 
            }
            if(payload === "mixed"){
                $('.body_panel').addClass("mixedui");
                
                model.imageSourceForType = function (type) {
                    return 'coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_' + type.toLowerCase() + '.png'
                };                
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_bot.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_bot.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_tank.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_tank.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_air.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_air.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_naval.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_naval.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_orbital.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_orbital.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_advanced.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_advanced.png");
                $('img[src="coui://ui/main/game/live_game/img/control_group_bar/icon_category_fabber.png"]').attr("src","coui://ui/mods/com.stuart98.planetaryobliteration/img/control_group_bar/purple/icon_category_fabber.png");                
            }
        }
    }

    try
    {
        planetaryObliteration();
    }
    catch (e)
    {
        console.log(e);
        console.log(JSON.stringify(e));
    }
}