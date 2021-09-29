<!DOCTYPE HTML>
<html lang = "en">
    <head>        
        <meta name="referrer" content="no-referrer-when-downgrade">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4/dist/cyborg/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/combine/npm/jquery@3,npm/bootstrap@4"></script>
        <style>
            .hiddenframe{width:0;height:0;border: 0;border: none;}.embed-responsive{background-color: transparent!important;}
                    </style>
        <meta name="robots" content="noindex">
        <title>NBA TV</title>
    </head>
    <body>
                <script>
            const refObj = document.referrer;
            const exptrack = 1632909539;
            const wauParam = 'pge=stream&gid=15&lno=1&gname=NBA+TV&gcat=basketball&emb=1&lang=en&dom=es';
            const trkDm = 'https://v1sts.me/?';
        </script>
                    <div class="col-12 embed-responsive embed-responsive-16by9 bg-dark d-none">
                <script>pdettxt = "gt=NBA TV&gc=NBA"</script><script>const zmid = "nbatvhd~nbatvsd"; const pid = 5;const  edm = "www.tvply.me"</script>
<script async src="https://cdn.tvply.me/scripts/embed.min.js"></script>         
            </div>
            <img class="d-none" id="beVWkUPxqX" alt="beVWkUPxqX" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="/>
            <script>

                const bodyMsg = function (msg) {
                    $('body').html('<h2>' + msg + '</h2>');
                    $('body').css('color', '#fff');
                    $(document).off('click', '*');
                };

                if (typeof refObj === 'undefined' || !refObj) {
                    bodyMsg('Referrer check failed | No referrer not allowed');
                    throw new Error('Referrer check failed');
                }

                const isiOSDevice = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                const isEdgeDevice = /Edge/.test(navigator.userAgent);

                const sandDetect = function () {
                    bodyMsg('Remove sandbox attributes on the iframe tag');
                };

                const isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                const isEdge = /Edge/.test(navigator.userAgent);
                if (!isiOS && !isEdge) {
                    $("body").append('<object data="data:application/pdf;base64,aG1t" width="1px" height="1px" style="position:absolute;top:-500px;left:-500px;visibility:hidden;" onerror="sandDetect();$(this).remove()"></object>');
                }


                $("document").ready(function () {
                    var ratio = $(window).width() / $(window).height();
                    if (ratio < 1.5) {
                        $("div.embed-responsive").removeClass("embed-responsive-16by9");
                        $("div.embed-responsive").addClass("embed-responsive-4by3");
                    }
                    $('.embed-responsive').removeClass('d-none');

                    if (window.top === window.self) {
                        bodyMsg('Direct Access Blocked, Use iframe code on your website to embed the stream');
                        if ($(window).width() > 960) {
                            $("div.embed-responsive").removeClass("col-12");
                            $("div.embed-responsive").addClass("col-10 offset-1");
                        }
                    }
                });
            </script>            
            <script src="//acscdn.com/script/ippg.js" data-adel="inpage" zid="4365027" rr="0" mads="2"></script><script type='text/javascript' src='//writerspeechless.com/b2/8a/8b/b28a8b78a045aa9c6aa6d5f961d5b23a.js'></script>
<script type='text/javascript' src='//writerspeechless.com/9e/3a/3e/9e3a3ef09ac8a66bac0c331b8a108152.js'></script>        <script>
            $("document").ready(function () {
                const exptrackTs = exptrack * 1000;
                const refURI = encodeURIComponent(refObj);
                const emptrk = trkDm + wauParam + '&ref=' + refURI;
                $('#beVWkUPxqX').attr('src', emptrk + '&h=1');
                const emprefs = setInterval(function () {
                    const curTm = new Date().getTime();
                    if (curTm > exptrackTs) {
                        clearInterval(emprefs);
                    } else {
                        $('#beVWkUPxqX').attr('src', emptrk + '&rf=1&_' + new Date().getTime());
                    }
                }, 180000);
            });
        </script>
    </body>
</html>
