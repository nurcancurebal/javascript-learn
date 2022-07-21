isEmpty([3546758]);
isEmpty(`fghjk`);
isEmpty('dfghj');
isEmpty();
isEmpty('');
isEmpty(``);


function isEmpty(params) {

    if (!params) {

        console.log('Parametre yok!');

    } else {

        console.log('Parametre var!');
    }
};