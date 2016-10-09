var planetaryObliterationLoaded;

if ( ! planetaryObliterationLoaded )
{

    planetaryObliterationLoaded = true;

    function planetaryObliteration()
    {

        var buildVersion = decode( sessionStorage.build_version );

        var patchName = 'planetaryObliteration live_game_sandbox.js';

        console.log(patchName + ' on ' + buildVersion + ' last tested on 89755');

        if (model.baseGroups) {
            model.baseGroups.splice(99, 0, 
                'L_factory',
                'L_combat',
                'L_utility',
                'L_orbital_structure',
                'L_ammo')
        }
        if (model.mobileGroups) {
            model.mobileGroups.splice(99, 0, 
                'L_vehicle',
                'L_bot',
                'L_air',
                'L_sea',
                'L_orbital')
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
