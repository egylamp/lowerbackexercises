// makes playing audio return a promise
        function playAudio (audio)
        {
            return new Promise(res =>
            {
                audio.play();
                audio.onended = res;
            });
        }
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const oneLegPullAudio = new Audio('audio/one-leg-pull.wav');
        const twoLegsPullAudio = new Audio('audio/two-legs-pull.wav');
        const kneesRollAudio = new Audio('audio/knees-roll.wav');
        const hipLeftAudio = new Audio('audio/hip-left.wav');
        const oneLegLeftAudio = new Audio('audio/one-leg-left.wav');
        const headLeftAudio = new Audio('audio/head-left.wav');
        const oneLegBackLeftAudio = new Audio('audio/one-leg-back-left.wav');

        const startNow = new Audio('audio/start-now.wav');
        const takeRest = new Audio('audio/take-rest.wav');
        const continueAgain = new Audio('audio/continue-again.wav');
        const beep = new Audio('audio/beep.wav');
        const oneLeft = new Audio('audio/left.wav');
        const oneRight = new Audio('audio/right.wav');
        const finished = new Audio('audio/finished.wav');
        // how to call
        async function oneLegPull ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/onelegpull.png");
            await playAudio(oneLegPullAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }

        async function twoLegsPull ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/twolegspull.png");
            await playAudio(twoLegsPullAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }

        async function kneesRoll ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/kneesroll.png");
            await playAudio(kneesRollAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {                 
                await playAudio(oneLeft);
                await delay(1000);
                await playAudio(oneRight);
                await delay(1000);
            }            
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }

        async function hipLeft ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/hipleft.png");
            await playAudio(hipLeftAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }
        async function oneLegLeft ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/onelegleft.png");
            await playAudio(oneLegLeftAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }
        async function headLeft ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/headleft.png");
            await playAudio(headLeftAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }
        async function oneLegBackLeft ()
        {
            $(".btn").attr("disabled", "disabled");
            $("#positionShape").attr("src", "img/onelegbackleft.png");
            await playAudio(oneLegBackLeftAudio);
            await delay(1000);
            await playAudio(startNow);
            for (let i = 0; i < 9; i++) {
                let j = 1;
                while (j < 10) {
                    await delay(1000);
                    await playAudio(beep);
                    j++;
                }
                //await delay(10000); 
                await playAudio(takeRest);
                await delay(3000);
                await playAudio(continueAgain);
            }
            let j = 1;
            while (j < 10) {
                await delay(1000);
                await playAudio(beep);
                j++;
            }
            //await delay(10000);
            await playAudio(finished);
            $("button").removeAttr('disabled');
            $("#positionShape").attr("src", "img/lower-Back-Pain.jpg");
        }

        async function fullTraining ()
        {
            await oneLegPull();
            await delay(3000);
            await twoLegsPull();
            await delay(3000);
            await kneesRoll();
            await delay(3000);
            await hipLeft();
            await delay(3000);
            await oneLegLeft();
            await delay(3000);
            await headLeft();
            await delay(3000);
            await oneLegBackLeft();
        }