const buttons = document.querySelectorAll('button')
buttons.forEach(button =>{
	button.addEventListener('click', ()=>{
		const state = button.className
		loadAnimation(state)
	})
})

const angry = `
<defs>
    <linearGradient id="Degradado_sin_nombre_33" x1="673.73" y1="1833.41" x2="673.73" y2="1811.41" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset=".09" stop-color="#020202"/>
        <stop offset=".13" stop-color="#0a0a0a"/>
        <stop offset=".17" stop-color="#171717"/>
        <stop offset=".2" stop-color="#2a2a2a"/>
        <stop offset=".22" stop-color="#424242"/>
        <stop offset=".25" stop-color="#606060"/>
        <stop offset=".27" stop-color="#848484"/>
        <stop offset=".29" stop-color="#aeaeae"/>
        <stop offset=".31" stop-color="#dbdbdb"/>
        <stop offset=".32" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_96" x1="476.92" y1="877.05" x2="345.73" y2="503.38" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#041c17"/>
        <stop offset=".82" stop-color="#041c17"/>
        <stop offset="1"/>
    </linearGradient>

    <linearGradient id="Degradado_sin_nombre_33" x1="674.06" y1="1891.68" x2="674.06" y2="1869.68" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset=".09" stop-color="#020202"/>
        <stop offset=".13" stop-color="#0a0a0a"/>
        <stop offset=".17" stop-color="#171717"/>
        <stop offset=".2" stop-color="#2a2a2a"/>
        <stop offset=".22" stop-color="#424242"/>
        <stop offset=".25" stop-color="#606060"/>
        <stop offset=".27" stop-color="#848484"/>
        <stop offset=".29" stop-color="#aeaeae"/>
        <stop offset=".31" stop-color="#dbdbdb"/>
        <stop offset=".32" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_92" x1="743.22" y1="734.28" x2="832.47" y2="561.11" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2b4c41"/>
        <stop offset=".82" stop-color="#2b4c41"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_92-2" x1="403.78" y1="790.99" x2="82.41" y2="479.06" xlink:href="#Degradado_sin_nombre_92"/>
    <linearGradient id="Degradado_sin_nombre_96" x1="476.92" y1="877.05" x2="345.73" y2="503.38" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#041c17"/>
        <stop offset=".82" stop-color="#041c17"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_96-2" x1="720.81" y1="913.04" x2="801.48" y2="383.37" xlink:href="#Degradado_sin_nombre_96"/>
    <linearGradient id="Degradado_sin_nombre_49" x1="540.65" y1="304.62" x2="527.26" y2="178.65" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_5" x1="498.24" y1="340.83" x2="476.62" y2="187.55" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-2" x1="461.64" y1="428.56" x2="410.15" y2="244.38" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-3" x1="611.29" y1="324.9" x2="616.01" y2="182.86" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-4" x1="653.66" y1="359.46" x2="666" y2="204.49" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-5" x1="480.15" y1="544.56" x2="351.66" y2="302.8" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-6" x1="494.83" y1="499.77" x2="422.12" y2="309.25" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-7" x1="641.34" y1="462.44" x2="733.41" y2="270.2" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-8" x1="624.63" y1="426.3" x2="638.94" y2="289.77" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-9" x1="551.91" y1="452.4" x2="521.17" y2="321.96" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_45" x1="474.49" y1="633.66" x2="312.86" y2="414.04" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".78" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_44" x1="698.17" y1="535.79" x2="787.53" y2="344.9" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".79" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_47" x1="516.56" y1="578.74" x2="425.75" y2="411.28" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset=".9" stop-color="#550104"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_40" x1="502.58" y1="632.45" x2="363.75" y2="409.29" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_48" x1="596.63" y1="535.94" x2="625.33" y2="348.21" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_73" x1="688.55" y1="508.03" x2="723.67" y2="338.19" xlink:href="#Degradado_sin_nombre_44"/>
    <linearGradient id="Degradado_sin_nombre_72" x1="572.73" y1="528.04" x2="560.61" y2="364.57" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".78" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_40-2" x1="568.23" y1="741.79" x2="442.14" y2="591.28" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-3" x1="576.22" y1="681.71" x2="472.69" y2="519.13" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_39" x1="625.74" y1="646.35" x2="674.32" y2="525.42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".56" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_38" x1="662.32" y1="652.67" x2="787.78" y2="517" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".7" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_5-10" x1="1058.25" y1="518.52" x2="1288.17" y2="310.02" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_29" x1="1070.42" y1="434.31" x2="1205.22" y2="228.45" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".75" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_68" x1="1148.39" y1="434.9" x2="1249.86" y2="262.42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".85" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_28" x1="1050.7" y1="393.5" x2="1097.25" y2="212.31" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".66" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_5-11" x1="1114.35" y1="569.26" x2="1348.71" y2="369.67" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_64" x1="1091.19" y1="627.95" x2="1362.59" y2="441.15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".86" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_70" x1="965.11" y1="425.1" x2="1005.53" y2="222.86" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".85" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_67" x1="992.36" y1="506.37" x2="1086.61" y2="296.91" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".81" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_63" x1="1019.09" y1="718.09" x2="1391.04" y2="524.13" xlink:href="#Degradado_sin_nombre_64"/>
    <linearGradient id="Degradado_sin_nombre_65" x1="1019.45" y1="678.42" x2="1273.44" y2="428.2" xlink:href="#Degradado_sin_nombre_64"/>
    <linearGradient id="Degradado_sin_nombre_66" x1="1001.45" y1="601.91" x2="1181.29" y2="396.4" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d0208"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_23" x1="882.64" y1="455.01" x2="921.62" y2="264.55" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".62" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_58" x1="978.48" y1="803.33" x2="1335.75" y2="657.7" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_20" x1="927.61" y1="579.78" x2="1035.61" y2="370.13" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".67" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_71" x1="861.49" y1="537.79" x2="922.63" y2="327.25" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".86" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_60" x1="872.95" y1="682.21" x2="1233.65" y2="554.22" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".85" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_40-4" x1="900.45" y1="685.96" x2="1297.09" y2="685.96" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_59" x1="933.39" y1="679.23" x2="1143.35" y2="447.6" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_18" x1="820.43" y1="647.53" x2="850.95" y2="495.17" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".56" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_57" x1="885.18" y1="658.38" x2="916.98" y2="488.94" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".74" stop-color="#9d0208"/>
        <stop offset=".75" stop-color="#980208"/>
        <stop offset=".87" stop-color="#460104"/>
        <stop offset=".96" stop-color="#140001"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_56" x1="859.1" y1="767.73" x2="1074.23" y2="675.63" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".87" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_54" x1="867.99" y1="776.56" x2="1174.54" y2="774.47" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d00000"/>
        <stop offset=".82" stop-color="#9d0208"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_5-12" x1="311.51" y1="975.34" x2="157.01" y2="797.67" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-13" x1="284.32" y1="989.74" x2="100.82" y2="837.83" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-14" x1="273.35" y1="909.21" x2="201.38" y2="775.03" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-15" x1="308.94" y1="875.76" x2="253.84" y2="752.81" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-16" x1="262.25" y1="1030.33" x2="82.45" y2="868.03" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-17" x1="267.51" y1="1074.43" x2="59.35" y2="926.41" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-18" x1="357.15" y1="888.36" x2="296.67" y2="762.9" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-19" x1="356.31" y1="967.17" x2="285.29" y2="818.8" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-20" x1="369.21" y1="1101.87" x2="38.72" y2="1008.6" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-21" x1="389.21" y1="1132.92" x2="139.06" y2="960.29" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_5-22" x1="334.45" y1="1037.58" x2="217.1" y2="887.49" xlink:href="#Degradado_sin_nombre_49"/>
    <linearGradient id="Degradado_sin_nombre_40-5" x1="438.96" y1="922.29" x2="394.63" y2="810.63" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-6" x1="338.12" y1="1193.16" x2="74.83" y2="1054.58" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-7" x1="402.44" y1="1039.08" x2="280.88" y2="901.43" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-8" x1="455.9" y1="988.01" x2="393.74" y2="829.53" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-9" x1="439.88" y1="1135.08" x2="159.43" y2="1000.8" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-10" x1="383.71" y1="1200.27" x2="112.86" y2="1044.97" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-11" x1="436.96" y1="1135.03" x2="236.07" y2="958.67" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-12" x1="496.36" y1="1073.38" x2="492.35" y2="979.89" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-13" x1="441.05" y1="1095.12" x2="380.96" y2="981.44" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-14" x1="463.25" y1="1203.02" x2="312.53" y2="1089.57" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_40-15" x1="465.14" y1="1178.42" x2="229.77" y2="1184.35" xlink:href="#Degradado_sin_nombre_40"/>
    <linearGradient id="Degradado_sin_nombre_92-3" x1="878.72" y1="952.16" x2="1133.02" y2="670.61" xlink:href="#Degradado_sin_nombre_92"/>
    <linearGradient id="Degradado_sin_nombre_97" x1="768.79" y1="1162.84" x2="753.52" y2="873.67" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2b4c41"/>
        <stop offset=".82" stop-color="#2b4c41"/>
        <stop offset=".88" stop-color="#2b4c41"/>
        <stop offset="1"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_92-4" x1="519.86" y1="1318.46" x2="430.13" y2="1168.91" xlink:href="#Degradado_sin_nombre_92"/>

    <style>
        .cls-2{fill:#003e32}.cls-3{fill:#012b23}.cls-20{fill:none}.cls-16,.cls-17,.cls-20,.cls-21{stroke-miterlimit:10}.cls-6{fill:#5e2b27}.cls-7{fill:#2b4c41}.cls-8{fill:#03071e}.cls-14{fill:#ff5c41}.cls-15{fill:#dc2f02}.cls-16{fill:#f15c44}.cls-16,.cls-17,.cls-21{stroke:#fff;stroke-width:2px}.cls-17{fill:#e54029}.cls-18{fill:#fbb7b0}.cls-20{stroke:#03071e;stroke-width:34px}.cls-21{fill:#9d0208}
        
        .cls-2{fill:none;stroke:#03071e;stroke-width:34px}.cls-2,.cls-84{stroke-miterlimit:10}.cls-5{fill:#5e2b27}.cls-7{fill:#03071e}.cls-84{stroke:#fff;stroke-width:2px}.cls-18{fill:#dc2f02}.cls-35{fill:#370617}.cls-84{fill:#9d0208}

        
        .monte{
            transform-origin: 670px 1730px;
            animation: monte 5s ease-in-out forwards;
            /*display: none;*/
        }

        .monte1{
            transform: scaleX(0.2) scaleY(.2) rotate(5deg);
            animation-delay: 1.5s;
        }
        .monte2{
            transform: scaleX(0.2) scaleY(.2) rotate(-5deg);
            animation-delay: 2s;
        }

        @keyframes monte{
            100%{
                transform: none;
            }
        }

        .hoja{
            transform: scale(0);
            animation: hoja 2s ease-out forwards;
        }
        .hoja1{
            transform-origin: 602px 1350px;
            animation-delay: 3.5s;
            animation-name: hoja1;
        }
        .hoja2{
            transform-origin: 695px 1365px;
            animation-delay: 3.5s;
            animation-duration: 3s;
        }
        .hoja3{
            transform-origin: 690px 970px;
            animation-delay: 4s;
        }
        .hoja4{
            transform-origin: 630px 840px;
            animation-delay: 5s;
            animation-duration: 3s;
        }
        .hoja5{
            transform-origin: 630px 785px;
            animation-delay: 4.7s;
            animation-name: hoja5;
        }
        @keyframes hoja{
            to{
                transform: none;
            }
        }
        @keyframes hoja1{
            to{
                transform: scale(1.5);
            }
        }
        @keyframes hoja5{
            to{
                transform: translateX(10px);
            }
        }

        .flor{
            transform: scale(0);
            opacity: 0;
            animation: flor 3s forwards;
        }
        .flor1{
            transform-origin: 510px 1145px;
            animation-delay: 2s;
        }
        .flor3{
            transform: scale(0);
            transform-origin: 820px 730px;
            animation-delay: 3.5s;
            animation-duration: 2s;
        }
        .flor2{
            transform-origin: 610px 740px;
            animation-delay: 3s;
        }
        @keyframes flor{
            40%{
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            50%{
                opacity: 1;
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            100%{
                opacity: 1;
                animation-timing-function: linear;
                transform: scale(1);                                
            }
        }

        .florcerrada{
            animation: florcerrada 3s ease-out forwards;
        }

        .flor1 .florcerrada{
            animation-delay: 3s;
        }
        @keyframes florcerrada{
            to{
                opacity: 0;
            }
        }

        .flor1 .florcerrada{
            animation-delay: 3s;
        }

        .flor1 .hilera{
            transform-origin: 470px 1100px;
            animation: hilera 3s ease forwards;
        }
        .flor1 .hilera1{
            animation-delay: 3s;
        }
        .flor1 .hilera2{
            animation-delay: 3s;
        }
        .flor1 .hilera3{
            animation-delay: 3.5s;
            animation-timing-function: ease-in;
        }



        .flor2 .florcerrada{
            animation-delay: 4s;
        }

        .flor2 .hilera{
            transform-origin: 600px 720px;
            animation: hilera 3s ease forwards;
        }
        .flor2 .hilera1{
            animation-delay: 4s;
        }
        .flor2 .hilera2{
            animation-delay: 5s;
        }
        .flor2 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }


        .flor3 .florcerrada{
            animation-delay: 3s;
        }

        .flor3 .hilera{
            transform-origin: 810px 720px;
            animation: hilera 2s ease-in-out forwards;
        }
        .flor3 .hilera1{
            animation-delay: 4s;
        }
        .flor3 .hilera2{
            animation-delay: 4s;
        }
        .flor3 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }

        @keyframes hilera{
            to{
                transform: scale(0.7);
            }
        }

    </style>
    <mask id="mask" x="617.73" y="1811.2" width="111" height="24.22" maskUnits="userSpaceOnUse">
        <path fill="url(#Degradado_sin_nombre_33)" d="M618.73 1811.41h110v22h-110z"/>
    </mask>
</defs>
<g>
    <ellipse class="cls-2" cx="592.37" cy="1890.62" rx="72" ry="42.5" transform="rotate(-45 592.371 1890.622)"/>
    <path class="cls-3" d="M632.92 1833.28s-61.91 99-95.23 101.42c0 0 2.68 14.42 9.68 5.42 0 0 61.1-10.67 85.55-106.84zM765.37 1837.12a311.95 311.95 0 01-79 83 83 83 0 0033.54-5.25c39.17-15 64.81-61.26 55.46-73.75-1.37-1.83-4.1-3.73-10-4z"/>
    <path class="cls-2" d="M774.91 1822c-5.88-8.06-44.75 3.7-69.53 29.74-29.59 31.09-26.43 69.21-25 71.35a7.66 7.66 0 002 2 6.72 6.72 0 003 1 399.31 399.31 0 0055.46-52c17.92-20.32 39.43-44.73 34.07-52.09z"/>
    <path class="cls-2" d="M791 1833.18c-1.4-1.53-2.8-3.06-5.1-3.46-15.55-2.73-24.28 54.86-65.57 80a86.28 86.28 0 01-35.94 11.75c-.9.25-2.37.79-2.61 1.86a2.38 2.38 0 00.59 1.84c1.74 2.3 45.85 14.58 79.22-10.88 28.72-21.97 42.72-66.66 29.41-81.11z"/>
    <path class="cls-3" d="M775 1822v.07z"/>
    <path d="M735.37 1888.12s44-66 79-96" stroke-miterlimit="10" stroke="#012b23" stroke-width="4" fill="none"/>
    <circle class="cls-2" cx="813.87" cy="1793.62" r="4.5"/>
    <path class="cls-3" d="M664.68 1764.64a339.32 339.32 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.79c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.58-4-52.47-22.39-58.48a22.86 22.86 0 00-10.91-.68z"/>
    <path class="cls-2" d="M667.49 1747.73c-8.5-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.51a7.77 7.77 0 002.61 1.09 6.91 6.91 0 003.16-.22 400.36 400.36 0 0031.51-69.19c8.86-25.69 19.46-56.44 11.72-61.19z"/>
    <path class="cls-2"  d="M730.19 1791c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.83 53.65-69.26 76.78a86.42 86.42 0 01-36.45 10c-.91.21-2.4.68-2.7 1.74a2.42 2.42 0 00.51 1.87c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.54 45.8-64.49 33.19-79.54z">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-30 640 1860"
          to="0 640 1860"
          dur="2s"
          fill="freeze"
          begin = "0s"
          id = "semilla"
          />
    </path>
    <path class="cls-3" d="M690.24 1769v.08z"/>
</g>
<g style="opacity: 0.2">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <path d="M928.51 1924.45c-15.27 38-74.17 47.22-138.74 57.36a495 495 0 01-155-.38c-180 24.24-207.92-18.48-213.66-30.27-29.78-61.13 84.87-216.77 226.13-231.47 2.53-.26 5.74-.56 9.58-.8a248.64 248.64 0 0128.65.2c88.21 6.17 149.35 49.72 149.35 49.72 43.6 31.08 114.28 104.47 93.69 155.64z" fill="#3d1a17"/>
    <path class="cls-6" d="M552.66 1894.6l-5.48 3.05-8.59-2.2-5.25-5.81 2.06-5.03 7.81-.48 7.68 4.45 1.77 6.02zM473.66 1913.6l-5.48 3.05-8.6-2.2-5.24-5.81 2.06-5.03 7.81-.48 7.68 4.45 1.77 6.02zM684.55 1893.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM532.55 1945.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM764.55 1867.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM835.55 1937.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM541.89 1856.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM651.89 1941.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM659.89 1856.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM568.89 1793.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM786.89 1787.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM612.89 1827.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6z"/>
</g>

<g class="hojas">
    <g class="hoja hoja4">
        <path d="M474.83 873.92s-236.16 45.87-342.06-229.81l-65-183.41a182.3 182.3 0 0042.07 36.51c37.36 23.34 69.57 23.76 111.76 32.69 0 0 51.65 10.94 111.76 39.21 36.16 17 96.43 55.91 148.8 154.86 0 0 36.09 55.8 33.32 93.44s-23.37 63.14-40.65 56.51z" fill="url(#Degradado_sin_nombre_92-2)"/>
        <path class="cls-7" d="M441.59 741.41c18.21 82.75 43 101.23 43 101.23-23.23-2-90.13-45.57-90.13-45.57-8.43-114-65.55-188.91-65.55-188.91C351 638.22 366 701 366 701c.48 31.55 17.86 93.33 17.86 93.33q-9.15-6.21-17.17-12.24c-7.69-5.93-15.2-12-22.15-17.72-25.29-21.67-37.48-37.5-37.48-37.5-10.82-80-44.2-130.67-56.3-146.83 16.33 27.33 46.83 135.92 50 147.26-.39-.32-.77-.66-1.18-1l-3.44-3.23 1 1.08c-3.29-3-7.11-6.6-11.37-10.8l10.35 9.72-82.13-87.51c2.49-55.89-39.5-89.08-39.5-89.08 32.89 37.47 35.52 75.61 35.56 86.38a6468.137 6468.137 0 01-42-46.77 47.47 47.47 0 01-1.85-4.94c-4.88-15.89-13.94-34-19.2-44.72 3.73 11.68 8.8 31 10.59 37.9-30.14-34-52.69-59.86-52.69-59.86l59.81 76.32-43.17-23.08c45.85 37.55 46.4 30 46.4 30 29.64 41.92 66.86 69.65 66.86 69.65-17.8.91-79.8-45.29-79.8-45.29 1.59 16.5 87.94 62.66 87.94 62.66a364.38 364.38 0 0053.39 49.4c-17.3 6.4-117.14-47-117.14-47 27.49 33 127.38 60.27 127.38 60.27l56.64 43.32c-36.22 9.33-121.51-25.84-121.51-25.84 41 40.17 130.13 35.67 130.13 35.67 30.21 21.37 70.69 43 70.69 43-67 8.51-157.69-29.54-157.69-29.54 111.19 51.62 162 34.45 162 34.45 156.05 39.09 181.5 11 181.5 11s-47.52-3.7-89.2-7.3c-8.61-1.59-19.33-3.45-32.33-5.51-41.59-6.59-55.46-97.46-55.46-97.46C419.6 659.24 380.76 628 380.76 628c12.94 14.78 60.83 113.41 60.83 113.41zM338.2 759.06q-2.51-2.1-4.86-4.11c-1.81-2.12-1.04-1.63 4.86 4.11z"/>
    </g>
    <g class="hoja hoja5">
        <path d="M698.37 841.29s155.16 12.47 149.54-180.21l-7-127.76A78.83 78.83 0 01824.57 561c-16.39 17.78-35.25 20.43-59.62 30.51 0 0-30.73 12.7-58 34.86-14.56 11.85-43.93 42.13-51.13 115.13 0 0-7.76 40.13 3.47 65.1s30.26 40.46 39.08 34.69z" fill="url(#Degradado_sin_nombre_92)"/>
        <path class="cls-7" d="M693.13 669.47S677.44 693.35 681 756c0 0 14.64 61.88-9 69.5-7.38 2.38-13.43 4.46-18.25 6.18-24.42 5.63-52.35 11.78-52.35 11.78s22.6 16.85 107.51-21.36c0 0 35.24 7.57 89.7-35.56 0 0-45.45 32.47-88.33 31.94 0 0 19.11-17.6 32-34.24 0 0 55.32-3.87 70-33.91 0 0-42.91 30.12-67.28 26.67l23.43-33.36s53.76-26 62.11-50.18c0 0-47.13 43.43-59.27 40.49a165.77 165.77 0 0019.91-37.19s40.75-37.56 37.53-48.72c0 0-26 35.71-37 36.48a161.79 161.79 0 0023-51.77s2.25 5 20.58-23.67L815 627.87l17-55.69s-7.13 19.07-16.83 44.12c-.67-4.76-2.49-18.07-3.19-26.18-.47 7.57-1.38 20.4-.31 31.41a32.74 32.74 0 01.13 3.45c-4.31 11-9 22.88-13.67 34.55-2.71-7.22-10.79-32.94-.32-60.56 0 0-17.09 25.45-1.39 62.66l-27.7 64.91 3.82-7.3c-1.52 3.14-2.92 5.87-4.16 8.11l.34-.81-1.34 2.46-.46.77c-1-7.84-10-82.86-7-102.42-3.26 11.75-10.68 48.24 3.05 102.62 0 0-3.39 11.53-13.26 28-2.77 4.38-5.8 9-9 13.57a199.27 199.27 0 01-7.33 9.51s-5.12-42.68-12.83-63.84c0 0-6.82-43.18-1-65 0 0-15.71 54.51 8.12 131.48 0 0-29.6 34.34-43.21 37.46 0 0 10.39-14.28.45-71.07.02-.08 4.09-69.74 8.22-80.61zm61 81.28c-.62 1-1.25 2.06-1.91 3.12 2.15-4.29 2.5-4.68 1.94-3.12z"/>
    </g>
</g>

<g class="monte monte2">
    <path d="M685.48 1761.68c28.8-266 .55-477.45-28.42-615-26-123.35-57.64-211.75-65-232C492.55 641 356.62 501.74 309.69 426.69c-1.41-2.25-6-9.7-7.63-9-2.09.9 2.14 15 3 18 17.23 59.3 158.72 717.21 305 1029 3.54 7.55 12.05 25.47 22 51a806.35 806.35 0 0153.42 245.99z" fill="url(#Degradado_sin_nombre_96)"/>
    <path d="M311.06 437.68a3604.55 3604.55 0 01233 574A3607.6 3607.6 0 01689.45 1746" stroke-width="6" stroke="#04231d" stroke-miterlimit="10" fill="none"/>
</g>
<g class="monte monte1">
    <path d="M673.06 1773.68c3.1-260.1-6.48-469.89-16-615-11.52-175.66-19.2-199.11-12-281 26.3-298.9 179.33-563 193-558 1.58.58 1.41 4.76 1 10-4.86 62.8-72.06 647.01-166 1444z" fill="url(#Degradado_sin_nombre_96-2)"/>
    <path d="M831.06 338.68a5365.42 5365.42 0 00-158 1435" stroke="#000" stroke-width="6" stroke-miterlimit="10" fill="none"/>
</g>

<g class="all-flor1">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 720; stroke-dashoffset:720;" d="M676.23 1752.56a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95">
        <animate
            attributeName = "stroke-dashoffset"
            from = "720"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id="tallo1"
        />
    </path>
    
    <g>
        <animateMotion
           dur="3s"
           begin="tallo1.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M160 600a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95"
        />
        <g class="flor flor1">
            <path d="M374.39 1013.47c-48.72 39-157.24-54.31-197.91-132.63-13.56-26.1-25.64-58.65-26.34-78.43-.87-24.81 17.56-5.23 30.43 2.78 15.75 9.8 27.22 27.2 48 58.2 50.72 75.66 198.48 107.92 145.82 150.08" fill="url(#Degradado_sin_nombre_5-12)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M327.84 1054.09c37.47-49.91-59.17-155.48-138.71-193.69-26.51-12.75-59.42-23.81-79.21-23.89-24.83-.1-4.69 17.71 3.72 30.33 10.28 15.44 28 26.35 59.67 46.17 0 0 2.49 1.78 14.31 10.39 60.72 44.19 90 145.66 123.38 142.36 3.82-.38 9.92-2.35 16.84-11.67" fill="url(#Degradado_sin_nombre_5-13)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M322.83 1021.69c51.08-36-1.26-158.34-60.85-214.28-19.86-18.64-42.66-27.54-56.77-39-10.51-8.52-16.38 8.52-13 22.32 4.15 16.88 13 45.75 20.7 70 25.56 80.93 54.68 199.92 109.91 161" fill="url(#Degradado_sin_nombre_5-14)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M358.05 1013.55c54.18-31.2 13.28-157.79-40.92-219-18.06-20.39-39.94-31.35-52.95-44-9.68-9.44-17.09 7-15 21 2.58 17.18 8.78 46.76 14.18 71.57 18 82.94 36.1 204.1 94.67 170.38" fill="url(#Degradado_sin_nombre_5-15)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M305.46 1051.79c-49.84 49.4-161-28.94-202.66-103.62-13.89-24.89-15.39-44.09-23.41-61.45-6-12.94 1.06-28.43 14.25-22.34 16.13 7.45 53.37 27.06 76.08 39.61 75.88 42 189.62 94.41 135.74 147.8" fill="url(#Degradado_sin_nombre_5-16)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M301.25 1084.74c-44.85 54-163-13.28-211.71-83.59-16.23-23.43-19.54-42.4-29.24-58.91-7.18-12.3-1.67-28.4 12-23.61 16.78 5.87 55.74 21.78 79.55 32.09 79.57 34.44 197.84 75.67 149.37 134" fill="url(#Degradado_sin_nombre_5-17)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path class="cls-18" d="M352.26 954.11c107.84-88.68-7.78-110.49-82.77-122.82-25-4.11-60.16 5.94-78.87 5.17-13.92-.58-32.34 14.8-33.57 28-1.52 16.2-17.72 47.52-16.92 69.23 2.67 72.55 95.55 116.24 212.13 20.38"/>
            <path d="M403.09 1072.58c58.18-22.48 29.64-180.81-19.1-266.18-16.25-28.46-37.33-46.89-49.23-65-8.86-13.51-18.77-9.36-18.07 7.58.86 20.73 9.38 57.85 26.38 96.06 41.46 93.25-2.87 251.88 60 227.58" fill="url(#Degradado_sin_nombre_5-18)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M400.55 1071.79c57.67-40.23 3.82-164.73-60.23-219.79-21.35-18.35-39.64-23.38-54.87-34.54-11.33-8.29-27.73-4.19-24.43 10 4 17.34 15.64 57.84 23.3 82.64 25.61 82.88 53.89 205.18 116.23 161.7" fill="url(#Degradado_sin_nombre_5-19)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M383.88 1084.42c-20.7 59-179.71 32.86-266.45-14.87-28.91-15.91-47.95-36.87-66.43-48.55-13.77-8.71-9.92-18.77 7-18.35 20.73.53 58.06 8.5 96.74 25 94.39 40.26 251.49-7.05 229.12 56.77" fill="url(#Degradado_sin_nombre_5-20)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M415.51 1136.78c-39.56 48.44-180.07-30.59-245.32-105.17-21.75-24.86-32.51-51.09-45.9-68.41-10-12.91-2.92-21.05 12.86-14.85 19.3 7.59 64.54 27.47 92.29 40.19 92.73 42.51 228.84 95.88 186.07 148.24" fill="url(#Degradado_sin_nombre_5-21)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M385.45 1116c43.48-45-32.32-157.46-102.26-202.57-23.32-15-47.62-19.86-63.83-28.74-12.07-6.61-14.53 11.4-8.48 24.54 7.42 16.07 21.89 43.24 34.22 66 41.18 76 93.34 189.37 140.35 140.77" fill="url(#Degradado_sin_nombre_5-22)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M478.88 1089.49c57.25-25.26 27.36-165.44-21.72-238.15-16.35-24.24-37.39-39-49.34-54.35-8.9-11.41-18.64-6.81-17.77 8.39 1.06 18.6 9.88 51.31 27.08 84.27 42 80.43-.14 227.16 61.75 199.84" fill="url(#Degradado_sin_nombre_40-5)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M359.28 1173.83c-28.76 55.35-165.85 14.25-234.79-40.7-23-18.32-47.21-43.11-55.86-60.87-10.85-22.28 13.94-11.9 29-9.82 18.38 2.55 35.92 13.78 67.49 33.63 77 48.44 225.29 17.92 194.2 77.76" fill="url(#Degradado_sin_nombre_40-6)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M471.21 1173.12c50.55-37.31-16.7-183.88-85.17-254.07-22.83-23.4-47.81-35.74-63.85-50.26-11.94-10.8-20.47-4.13-15.55 12.18 6 19.95 22.21 66.83 32.66 95.62 34.9 96.19 77.25 236.87 131.91 196.53" fill="url(#Degradado_sin_nombre_40-7)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M506.06 1143.53c55.07-30.26 7.91-184.47-50.62-263.14-19.52-26.22-42.63-41.78-56.6-58.3-10.4-12.3-19.74-6.82-17 10 3.31 20.58 13.12 69.2 19.65 99.12 21.8 100 45.07 245 104.6 212.32" fill="url(#Degradado_sin_nombre_40-8)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M461.68 1130.09c24.66-57.43-121.56-98-214.54-122.68-31-8.23-58.37-6-79.2-10.14-15.51-3.09-19.49 6.92-7.24 18.26 15 13.87 29.7 38.21 52.81 57.33 77.2 63.88 221.5 119.31 248.17 57.23" fill="url(#Degradado_sin_nombre_40-9)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M413.62 1189.78c24-57.71-122.65-96.61-215.9-120.26-31.09-7.89-58.44-5.33-79.32-9.25-15.54-2.92-19.4 7.13-7 18.33 15.13 13.7 30.13 37.88 53.45 56.74 77.92 63 222.83 116.82 248.8 54.44" fill="url(#Degradado_sin_nombre_40-10)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M477.34 1169.5c23.73-57.13-78.07-140.54-153.62-202.44 0 0-15.89-13-80.72-37.88-3.45-1.33-11-4.12-14.16-1-3.47 3.5.38 12.53 2.19 16.68 18.72 42.83 28.08 64.24 33.45 71.28 74.16 97.14 148.48 194.49 192.94 175.54 13-5.51 18.58-18.9 19.92-22.18z" fill="url(#Degradado_sin_nombre_40-11)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M474.73 1153.75c60.34-2.25 81.76-88.23 62.6-139.93-6.38-17.23-20.25-30.07-25.73-41.31-4.09-8.37-14.47-7.81-18.93 1-5.45 10.8-8.79 31.24-4.65 53.61 10.08 54.58-78.53 129.06-13.29 126.62" fill="url(#Degradado_sin_nombre_40-12)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M476.87 1187.27c51.06-35.17 12.54-138.62-38.53-183.43-17-14.93-37.65-21.12-49.9-30.14-9.12-6.71-17.8-.49-15.81 11.36 2.43 14.49 10 48.27 15 69 17 69.1 34 171.29 89.2 133.26" fill="url(#Degradado_sin_nombre_40-13)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M474.58 1183.72c32.23-52.64-59-75-117.35-88.34-19.43-4.43-39.09 0-52.52-1.76-10-1.31-15.39 7.84-9.83 16.69 6.81 10.82 10.69 30.86 21.78 45.56 37.07 49.11 123.09 84.76 157.92 27.85" fill="url(#Degradado_sin_nombre_40-14)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M469.17 1169.12c-5.86 61-114.29 74.91-177.87 50.79-21.19-8.05-36.52-23.27-50.28-29.85-10.24-4.9-9-15.38 2.22-19.1 13.76-4.55 46.73-13.53 67.14-18.61 68.19-17 165.14-49.16 158.79 16.77" fill="url(#Degradado_sin_nombre_40-15)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
            <path class="cls-35" d="M385.77 1229.08c21.47 2 44.75 3.15 69.61 3 14-.07 27.54-.56 40.44-1.35l6.49-6.13 4.65-8.07 8.37-5.44 2.74-7.5 5.12-2.38a330 330 0 0017.58-115.14l-17.7 31.8-14.13 8.43-10.07 20.55-18.49 6.41q-5 10.27-10.06 20.54l-27.58 15q-5.74 12.2-11.44 24.29z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M300.25,984.29C227.69,1028,101.4,875.33,62.57,758c-12.94-39.12-22.65-86.88-19.7-114.47,3.7-34.62,24.42-3.51,40,10.35,19.06,17,30.92,43.56,52.54,91C188.14,860.69,378.68,937,300.25,984.29"/>
                <path class="cls-21 hilera hilera1" d="M307.89,929.67c58.33-62.92-42.18-218.24-135.27-280.1-31-20.61-63.45-27-85-39.17-16.07-9-19.47,16-11.46,34.16,9.8,22.23,28.95,59.8,45.26,91.25C175.9,840.93,244.84,997.68,307.89,929.67"/>
                <path class="cls-21 hilera hilera1" d="M423.34,863c41.8-75.92-91.78-201.32-196.36-237.8-34.87-12.16-67.75-10.16-91.49-16.48-17.67-4.71-15.12,20.47-3.13,36.09C147,664,174.35,695.59,197.49,722c77.32,88.3,180.67,223.09,225.85,141"/>
                <path class="cls-21 hilera hilera1" d="M203.39,1049.31C115.05,1083.71,21,919.21,10.54,799.56c-3.5-39.88,5.15-65.31,4.76-92.18-.28-20,16.85-35.76,29.75-20.34,15.78,18.86,50.91,65.48,72,94.67,70.49,97.55,181.84,230.42,86.34,267.6"/>
                <path class="cls-21 hilera hilera1" d="M219.32,1101.77C134.54,1144.74,26.1,990.14,4.81,872c-7.1-39.38-.8-65.57-3.62-92.29-2.09-19.89,13.52-37.29,27.75-23.2,17.41,17.24,56.59,60.21,80.22,87.21,79,90.23,201.8,211.61,110.16,258.06"/>
                <path class="cls-21 hilera hilera1" d="M496.09,886.46c33.27-80.08-144.35-211.38-271.48-249.25-42.37-12.62-79.73-10.36-108.21-16.9-21.19-4.87-26.55,9.1-9.76,25.48,20.55,20,63.91,49,116.28,70.71,127.78,53,237.19,256.53,273.17,170"/>
                <path class="cls-21 hilera hilera1" d="M404.35,906.87c43.46-86-98.66-210.61-209.4-241.19-36.91-10.2-61.84-5.41-87-10.23C89.3,651.86,72.35,667,85.16,683c15.66,19.48,54.85,63.61,79.51,90.3,82.41,89.17,192.7,226.58,239.68,133.61"/>
                <path class="cls-21 hilera hilera1" d="M212,1140.06C130.4,1161.46,46.39,954,38.45,814.84,35.8,768.46,45.92,729.79,46,699c0-23,14.16-26.22,25.79-5.94C86,717.82,103.6,768,112.56,826.3c21.87,142.34,187.7,290.61,99.46,313.76"/>
                <path class="cls-21 hilera hilera1" d="M337.91,1142.36c-70.72,46.45-215.25-123.65-266.28-253.21C54.62,846,52.13,806,42.51,776.73c-7.15-21.81,5.24-29.43,22.6-13.9,21.25,19,70.15,66.35,99.92,96.1,99.48,99.39,249.33,233.22,172.88,283.43"/>
                <path class="cls-21 hilera hilera1" d="M334.54,990.52C387.52,922.69,274.15,772.21,176,716c-32.72-18.75-65.63-23-88.2-33.81-16.8-8-18.11,17.56-8.59,35.42,11.65,21.86,33.92,58.61,52.84,89.36,63.24,102.78,145.2,256.88,202.48,183.56"/>
                
                <path class="cls-21 hilera hilera2" d="M524.49,968.93c59-64-59.55-222.95-164.12-286.45-34.85-21.17-70.29-27.84-94.4-40.32-17.94-9.29-27.82,2-18,20.56,12,22.72,42,58.77,83,90.4,99.87,77.19,129.79,285,193.56,215.81"/>
                <path class="cls-21 hilera hilera2" d="M350.25,1189.53c-66.57,56-223.53-66.47-284.43-171.85C45.53,982.55,27,938.51,25.06,911.41c-2.42-34,24.42-8.07,42.89,2.26,22.6,12.64,39.54,35.93,70.23,77.41,74.89,101.2,284.05,137.91,212.07,198.45"/>
                <path class="cls-21 hilera hilera2" d="M505.76,1098.41c57.4-65.85-81-241-196.91-313.46-38.64-24.16-76.74-32.85-103.28-47.25-19.77-10.72-29.33.9-17.44,21.19,14.56,24.83,51.54,82.52,74.94,117.78,78.19,117.84,180.64,292.92,242.69,221.74"/>
                <path class="cls-21 hilera hilera2" d="M546.89,1066.14c62.24-61.49-62.42-246.28-172.47-327-36.69-26.91-74-38.35-99.38-54.65-18.88-12.13-29.3-1.25-19,19.86,12.62,25.83,45.1,86.07,65.75,122.95,69,123.24,157.82,305.35,225.09,238.87"/>
                <path class="cls-21 hilera hilera2" d="M437.71,1125.4C493.43,1058.79,312,949.88,196.15,882.06c-38.6-22.61-76.41-30-102.9-43.36-19.72-10-29,1.78-16.91,21.4,14.79,24,25.16,61.77,48.86,95.79,79.22,113.66,252.27,241.53,312.51,169.51"/>
                <path class="cls-21 hilera hilera2" d="M365.05,1148.27c4.05-23.56-1.65-53.59-183.47-222.58-16.82-15.63-51.24-47-105.19-66-7.86-2.77-14.45-4.69-18.77-5.87a177.45,177.45,0,0,0-3,22.56s-3.28,48.5,23.29,104.69c22.48,47.53,110.85,138.41,254.57,222.87C356.2,1181.24,362.86,1161,365.05,1148.27Z"/>
                <path class="cls-21 hilera hilera2" d="M486,1114.88C513.11,1034,361.59,930.74,249.14,854.15c0,0-23.65-16.11-117.13-43.1-5-1.43-15.9-4.44-19.93.23-4.48,5.17,1.87,17.13,4.85,22.62,30.81,56.67,46.21,85,54.49,94.07C285.71,1053,400.24,1178.36,460.49,1147.5,478.1,1138.49,484.45,1119.52,486,1114.88Z"/>
                
                <path class="cls-21 hilera hilera3" d="M474.92,1093.58c90.57-29.34,86.13-169,34.86-239.14C492.69,831,466.15,817.51,453,802.82c-9.79-10.94-25.3-5.64-28.27,9.66-3.64,18.73.08,51.17,16,83.33,38.74,78.45-63.68,229.49,34.23,197.77"/>
                <path class="cls-21 hilera hilera3" d="M476.23,1132.46c75.94-61.56,2.67-219.42-83.1-283.57-28.59-21.37-61.76-28.57-82.13-41.24-15.16-9.43-28,1.41-23.46,19.79,5.6,22.48,21.59,74.65,32.12,106.53,35.18,106.51,74.47,265,156.57,198.49"/>
                <path class="cls-21 hilera hilera3" d="M464.8,1147.61c56.61-79.14-84.38-124.65-174.57-152.14-30.07-9.16-61.49-4.39-82.4-8.68-15.57-3.19-25.08,10.58-17.34,25.13,9.49,17.79,13.34,49.74,29.12,74.1,52.75,81.41,184,147.15,245.19,61.59"/>
                <path class="cls-21 hilera hilera3" d="M424.46,1175.61c-46.07,72.42-190.29,20.9-254.34-49.6-21.35-23.51-30.82-52.26-43.81-69.22-9.67-12.62-1.5-24.93,14.91-22.43,20.06,3.05,66.93,12.8,95.64,19.43,95.92,22.14,237.41,43.53,187.6,121.82"/>
                <path class="cls-21 hilera hilera3" d="M348.05,1209.55q10.77.2,21.88,0a593.62,593.62,0,0,0,152.18-23.14l5-11.64,12.48-9.58q2.17-7.61,4.36-15.21c15.32-39.85,19.17-71.73,19.86-93.23.55-17.18-.2-50.4-.24-50.4a4.65,4.65,0,0,0,0,.48l-23.26,10.9-21.18,15-13.29,33.52-28.28,12.35-13.29,33.53-41.51,26.94q-7.49,19.8-15,39.59Z"/>
            </g>
        </g>
    </g>

    <g class="hoja hoja1">
        <path d="M566.34 1407.71S445 1399.44 429.07 1251l-7.94-98.06s20.1 44.2 66.17 53.79c0 0 98 46.91 102.09 128.67 0 0 10.39 32 4.14 50s-19.61 27.79-27.19 22.31z" fill="url(#Degradado_sin_nombre_92-4)"/>
        <path class="cls-7" d="M567.31 1338.65c-1.85 42.8 7.87 55 7.87 55-11.09-4-38.11-34-38.11-34 10.7-56.81-7.49-100.81-7.49-100.81 6.89 17.56 6.07 50.18 6.07 50.18-3.87 15.48-3.4 47.92-3.4 47.92q-3.66-4.21-6.8-8.21c-3-3.89-5.87-7.82-8.52-11.53-9.54-13.88-13.44-23.19-13.44-23.19 5.1-40.5-4.62-69.59-8.44-79.06 4.43 15.48 5.23 72.49 5.3 78.45l-.44-.65-1.26-2 .35.66c-1.22-1.88-2.61-4.15-4.15-6.76l3.8 6.1-28.76-53.43c8.48-27-7.73-48.66-7.73-48.66 11.2 22.58 7.53 41.56 6.15 46.83-4.94-9.57-9.88-19.27-14.45-28.31a25.24 25.24 0 01-.27-2.66c-.32-8.4-2.39-18.43-3.57-24.34.31 6.19.28 16.28.25 19.89-10.32-20.51-18-36.09-18-36.09l19.31 45.06-18.09-16.89c17.52 24.3 18.77 20.7 18.77 20.7a174.15 174.15 0 0023.62 42.71c-8.83-1.87-33.14-32.51-33.14-32.51-1.37 8.27 34.83 42 34.83 42a184.48 184.48 0 0019.66 31.08c-9.28.87-51.13-38.18-51.13-38.18 9.15 19.68 54.41 46 54.41 46l22 28.53c-18.9-.15-56-28.41-56-28.41 14.8 24.95 58.94 34.33 58.94 34.33 12 14.36 29 30.2 29 30.2-33.84-4.55-73.21-34.92-73.21-34.92 47.62 39.66 74.68 37.88 74.68 37.88 71.17 39.37 87.25 28.94 87.25 28.94s-22.73-8-42.63-15.16c-4-1.89-9-4.2-15.08-6.89-19.46-8.53-14.46-54.73-14.46-54.73-3.8-48.08-18.72-68.37-18.72-68.37 4.45 8.89 15.03 63.3 15.03 63.3zm-52.81-4.81l-1.84-2.64c-.6-1.27-.29-.93 1.84 2.64z"/>
    </g>
</g>

<g class="all-flor2">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M676.23 1774.56a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1.5s"
            fill = freeze
            id = "tallo2"
        />
    </path>
    
    <g>
        <animateMotion
           dur="3s"
           begin="tallo2.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M80 1050a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17"
        />
        <g class="flor flor2">
            <path d="M538.12 513.8C607.24 503.25 612.68 343 579 250c-11.23-31-28.9-65.65-44.67-81.24-19.79-19.55-17.64 10.5-20.81 27.2-3.87 20.42 1.77 43.07 11.56 83.74 23.87 99.22-61.67 245.51 13 234.09" fill="url(#Degradado_sin_nombre_49)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M547.19 487.54c-69 12.16-124.89-126-122.32-217.57.86-30.51 11.78-55.66 13.84-75.91 1.52-15.07 19.71-6.28 28 7.3 10.14 16.62 26.08 46.5 39.29 71.7 44.16 84.23 115.77 201.33 41.19 214.48" fill="url(#Degradado_sin_nombre_5)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M521.26 506.35C456.16 532.2 373.47 408.18 357.49 318c-5.33-30.06.28-56.89-1.8-77.14-1.55-15.07 18-10.14 28.9 1.49 13.29 14.22 34.94 40.26 53 62.27 60.28 73.56 154.09 173.77 83.7 201.72" fill="url(#Degradado_sin_nombre_5-2)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M600.85 487.87C679 479 688.54 326.93 652.56 238.12c-12-29.6-27.71-44.38-37.25-63.58-7.11-14.29-25.58-19-29.52-3.23C581 190.63 572 236.92 567 265.57c-16.6 95.72-50.61 231.89 33.84 222.3" fill="url(#Degradado_sin_nombre_5-3)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M627.78 514.45c78.62 1.08 107.33-148.56 82.87-241.2-8.16-30.88-21.88-47.53-28.92-67.78-5.24-15.07-23-22.1-28.87-6.93-7.21 18.56-22 63.34-30.55 91.13-28.57 92.85-79.52 223.62 5.47 224.78" fill="url(#Degradado_sin_nombre_5-4)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path class="cls-18" d="M481.27 460.74c-153 32.67-91.44-83.91-49.93-158.26 13.84-24.78 47.19-48.6 59.56-65.54 9.21-12.61 35.54-18 48-9.87 15.26 10 54 17.62 72.5 33.47 61.75 53 35.25 164.88-130.14 200.2"/>
                <path d="M559.78 597.66c-58.29 38.55-184.38-90.28-230.72-190.22-15.45-33.3-18.59-64.52-27.45-87.17-6.59-16.86 3.63-23.22 18.65-11.58 18.38 14.24 46.75 46.11 70.62 86.44C449.15 493.52 622.8 556 559.78 597.66" fill="url(#Degradado_sin_nombre_5-5)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M554.37 577.25c-72.43 31-158.89-94-173.27-187.57-4.8-31.18 1.27-51.55-.31-72.64-1.17-15.7 12.45-28.86 24-17.32 14.1 14.11 45.73 49.16 64.76 71.15 63.62 73.48 163.14 172.88 84.84 206.38" fill="url(#Degradado_sin_nombre_5-6)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M560.72 575.47c64.84 26.64 161.36-126 186-234.12 8.21-36.06 4.85-67.6 8.83-91.79 3-18-8.33-22.28-20.59-7.78-15 17.74-36.13 54.94-51.12 99.61-36.6 109-193.21 205.28-123.13 234.08" fill="url(#Degradado_sin_nombre_5-7)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M584.75 641.7c70 3.83 110.64-172.17 98.17-282.51-4.16-36.78-17.75-65.48-22-89.65-3.16-18-15.22-18.31-22-.57-8.3 21.71-26 74.18-36.42 106.76-34.82 108.87-93.41 261.84-17.77 266" fill="url(#Degradado_sin_nombre_5-8)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M591.38 604.25c-70 2.82-107.56-144.46-93.12-236.6 4.81-30.71 18.91-54.63 23.58-74.8 3.47-15 20.37-3.65 26.83 11.21 7.91 18.19 19.84 50.55 29.68 77.84 32.87 91.15 88.73 219.29 13 222.35" fill="url(#Degradado_sin_nombre_5-9)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M533.36 648.62c-53.86 44.9-179.7-54.9-228.26-140.36-16.19-28.48-20.55-57-30-76.58-7-14.62 2.44-22.11 17.27-13.67 18.14 10.33 46.58 35.47 71.11 69.14 59.84 82.17 228.1 112.94 169.87 161.47" fill="url(#Degradado_sin_nombre_45)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M628.68 629.8c65.06 25.55 150.53-110.13 168.26-207.3 5.9-32.39 8.11-71.19 2.33-92.55-7.25-26.81-20.54.22-31.69 13-13.64 15.69-20.17 38.09-32.21 78.11-29.37 97.66-177 181.08-106.69 208.7" fill="url(#Degradado_sin_nombre_44)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M589.26 718.24c-68.1 17.89-148.73-143.81-161.85-252.9-4.37-36.36 2.41-66.84 1-91-1-18 10.78-20.77 21.55-5 13.19 19.28 42.72 66.36 60.49 95.71 59.41 98.07 152.4 233.9 78.79 253.24" fill="url(#Degradado_sin_nombre_47)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M578.11 711.34c-61.36 34.52-180.25-101.56-220.51-203.79-13.42-34.08-14.56-65.28-22-88.34-5.56-17.17 5.18-22.82 19.58-10.3 17.63 15.33 58.1 53.41 82.72 77.31C520.14 566.09 644.45 674 578.11 711.34" fill="url(#Degradado_sin_nombre_40)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M550.84 684.25c-67.89-17.2-4.31-174.89 37.08-274.42 13.8-33.18 34.45-56 45-77.36 7.82-15.9 19.43-12.61 21.18 6 2.13 22.78 13.74 52.47 15 86 4.21 112.2-44.82 278.32-118.21 259.73" fill="url(#Degradado_sin_nombre_48)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M637.44 671.23c-67.76-17.72-3-174.92 39.19-274.13 14-33.07 34.88-55.73 45.55-77 7.94-15.84 19.52-12.46 21.12 6.16 2 22.79 13.35 52.57 14.35 86.16 3.34 112.23-47 278-120.21 258.82" fill="url(#Degradado_sin_nombre_73)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M582.85 720.69c-66.65-19.06-68.75-166.51-70.31-275.93 0 0-.33-23 23.11-97.21 1.24-3.94 4.08-12.55 9-13.09 5.49-.59 10.73 9.08 13.1 13.56 24.49 46.29 36.74 69.44 39.16 79.06 33.43 132.8 66.92 265.88 19.28 291.64-13.9 7.53-29.52 3.06-33.34 1.97z" fill="url(#Degradado_sin_nombre_72)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M584.83 701.46c-44.16 51.27-134.42 9.92-166.3-43-10.62-17.64-12.18-38.76-18.19-51.42-4.47-9.43 3.27-18.13 14.12-15.86 13.27 2.76 33.5 14.14 50.2 33.39 40.74 47 167.91 21.46 120.17 76.88" fill="url(#Degradado_sin_nombre_40-2)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M620.91 718.9c-60.78 33.66-145.32-56.64-164.76-130.24-6.48-24.53-2.39-48.31-5.32-65.11-2.18-12.5 8.39-18.09 19.29-10.19 13.32 9.68 43.45 34.1 61.65 49.53 60.83 51.53 154.85 119.62 89.14 156" fill="url(#Degradado_sin_nombre_40-3)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M593.15 726.74c-68.22-11.35-20.21-105.06 11.32-164.2 10.51-19.71 28.7-33.1 37.06-45.76 6.22-9.43 17.92-7.28 21.33 3.92 4.17 13.71 18.29 31.7 22.6 51.88C699.85 640 666.9 739 593.15 726.74" fill="url(#Degradado_sin_nombre_39)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M617.71 702c60.42 32.6 141-59.63 158.26-133.85 5.75-24.74 1.14-48.51 3.6-65.42 1.83-12.58-8.67-18-19.15-9.85-12.83 10-41.75 35.05-59.22 50.87-58.34 52.88-148.8 123-83.49 158.25" fill="url(#Degradado_sin_nombre_38)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path class="cls-35" d="M701.77 688.08q-24.39 28.5-48.72 57c-9.6 11.25-19.83 23.25-29.41 34.51l-9.9 1.41-10.33-1.55-10.6 3.55-7 .06a475.79 475.79 0 01-118-75l37 13 18-8L548 723.77l18.8-18.69 24.75 12.46 34.25-19.46 28 7z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M521.94,446.72c-86.64-3-109.86-204.39-77.71-326.75,10.71-40.79,29-87.18,46.93-109.22,22.48-27.64,22.91,10.61,28.55,31.2C526.6,67.14,522,96.57,514,149.35c-19.35,128.8,101.57,300.56,7.92,297.37"/>
                <path class="cls-21 hilera hilera1" d="M559,404.11c85.13-21.46,85.51-210.78,40.13-315.77-15.13-35-39.37-58.57-51.12-81-8.75-16.72-25.63,2.86-28.89,22.92-4,24.54-8.5,67.45-12,103.54C495.19,254.36,466.93,427.3,559,404.11"/>
                <path class="cls-21 hilera hilera1" d="M695.18,411.32c78.2-41.84,33.52-223.93-35.87-313.55C636.17,67.9,606.84,51.27,590,32.61c-12.53-13.9-24.4,9.13-22.81,29.23,1.94,24.57,7.73,66.95,12.85,102.53,17.1,118.88,30.6,292.17,115.14,247"/>
                <path class="cls-21 hilera hilera1" d="M402.57,448.49c-95-19.75-83.91-213.32-26.19-321.84,19.23-36.17,40.84-53.17,55.49-76.43,10.91-17.32,34.4-21.29,36.87-.87,3,25,7.17,84.57,9,121.39,6.08,123,27.53,299.11-75.15,277.75"/>
                <path class="cls-21 hilera hilera1" d="M387,502.39C290.28,492,283.45,298.85,331.07,185.6c15.87-37.75,35.88-56.71,48.36-81.21,9.3-18.23,32.39-24.45,36.75-4.43,5.32,24.5,15,83.22,20.2,119.57C453.81,341,491.51,513.64,387,502.39"/>
                <path class="cls-21 hilera hilera1" d="M744.53,472c73.21-50.15-6-261.87-93.94-365.26C621.28,72.27,588,53.37,567.17,31.88c-15.47-16-27.86-7-22.58,16.42C551.05,77,572.1,126,604.93,173.82,685,290.55,665.39,526.21,744.53,472"/>
                <path class="cls-21 hilera hilera1" d="M654.44,438.34c85.24-49.56,32.79-235.73-45.17-323.73-26-29.33-50-39.12-68.91-57.27-14-13.5-37-9.92-34.94,10.88C508,93.66,517,153.38,523.3,190c21,122.47,39,301.87,131.14,248.3"/>
                <path class="cls-21 hilera hilera1" d="M359.37,531.17c-82-27.15-38.34-252,32.44-375.85,23.59-41.27,53.83-68.8,71.05-95.25,12.82-19.68,26.78-14.6,25.45,9.28-1.63,29.22-14.46,82.08-39.3,137.14-60.62,134.33-1,354-89.64,324.68"/>
                <path class="cls-21 hilera hilera1" d="M466.1,603.35c-86.58.42-115.73-226.14-87.27-365.76,9.49-46.54,29.63-82.21,37.71-112.7,6-22.7,20.91-22.33,27.15.68,7.63,28.16,23.18,96.05,32.14,138.17C505.76,404.5,559.7,602.9,466.1,603.35"/>
                <path class="cls-21 hilera hilera1" d="M547.89,471.18c83.28-28.65,69.93-221,17.07-324-17.62-34.34-43.48-56.33-56.82-78.2-9.93-16.27-25.33,5-27.13,25.61-2.19,25.25-3.58,69.2-4.49,106.14-3,123.45-18.67,301.39,71.37,270.41"/>
                
                <path class="cls-21 hilera hilera2" d="M722.92,558.59c86.31-22,73.22-224.51,18.92-337.31-18.1-37.6-44.8-63.08-58.51-87.24-10.22-18-25-13.82-26.91,7.6-2.37,26.2,3.29,73.87,20.76,123.84,42.64,121.92-47.57,316.91,45.74,293.11"/>
                <path class="cls-21 hilera hilera2" d="M450.39,650.71C362,661.63,295.66,469,302.18,344.63c2.17-41.45,10.82-89.58,24.28-113.91,16.88-30.52,25.46,6.69,35.55,25.86,12.34,23.44,13.88,52.87,17.08,105.58,7.82,128.6,166.81,276.74,71.3,288.55"/>
                <path class="cls-21 hilera hilera2" d="M634.63,659.24c86-24.49,64.89-251.94,5.86-378.77-19.69-42.28-47.53-71-62.28-98.13-11-20.22-25.66-15.59-26.77,8.45-1.36,29.42-1.8,99.55-1.39,142.85,1.38,144.72-8.35,352.07,84.58,325.6"/>
                <path class="cls-21 hilera hilera2" d="M687.92,654.49c87.69-18,83.78-246.13,34.39-376.78-16.47-43.55-42.11-74.18-54.79-102.32-9.44-20.94-24.45-17.41-27.37,6.46-3.58,29.2-9.3,99-12.15,142.16-9.54,144.22-34.88,350,59.92,330.48"/>
                <path class="cls-21 hilera hilera2" d="M561.19,644.45c85-26.08-10-220.73-71.56-343.5-20.51-40.93-48.84-68.35-64.11-94.6-11.37-19.53-25.87-14.64-26.44,8.94-.7,28.85-12.87,67-11.5,109.44,4.59,141.7,81.76,347.92,173.61,319.72"/>
                <path class="cls-21 hilera hilera2" d="M486.1,623.56c16.61-18,28.46-46.91-33.3-293.31C447.09,307.47,435,261.37,399.34,215c-5.19-6.76-9.78-12.07-12.83-15.49a182,182,0,0,0-15.13,17.69S341.52,256.94,333,320c-7.22,53.32,17.92,180.58,94.14,333.2C460.11,646.91,477.1,633.28,486.1,623.56Z"/>
                <path class="cls-21 hilera hilera2" d="M608.5,662.35C676.89,608,604.43,435,550.66,306.55c0,0-11.31-27-76.47-102.3-3.46-4-11.16-12.67-17.22-10.92-6.73,1.94-8,15.74-8.45,22.12-5.17,65.8-7.76,98.7-5.71,111.1,28.32,171,56.7,342.44,125.6,349.57C588.55,678.2,604.58,665.47,608.5,662.35Z"/>
                
                <path class="cls-21 hilera hilera3" d="M610.86,637.9C704.94,663.23,779,541,774.14,452.15c-1.62-29.61-16.85-56-19.94-76-2.3-14.84-18.56-18.94-29.64-7.47-13.57,14-28.47,43.95-32.77,80.39C681.28,538,509.17,610.52,610.86,637.9"/>
                <path class="cls-21 hilera hilera3" d="M590.3,672C689.79,661.52,715,485.21,677.14,382.34c-12.61-34.29-37.06-59-47.47-81.19-7.75-16.55-24.84-14.42-31.16,3.9-7.73,22.41-23.11,76.09-31.85,109.31-29.22,111-83.91,268.95,23.64,257.63"/>
                <path class="cls-21 hilera hilera3" d="M572.05,678.62c92.71-36.34-2.89-154-64.95-227.9-20.69-24.62-50.3-38.05-65.86-53.4-11.57-11.42-27.42-4.9-28.88,11.89-1.79,20.56-16.3,50.12-16.34,79.83-.14,99.26,75.81,228.86,176,189.58"/>
                <path class="cls-21 hilera hilera3" d="M521.83,680.14C441.91,716.59,346.89,592,331.26,495.75c-5.21-32.08,2.69-62,1-83.82C331,395.7,344.88,389.7,357.56,401c15.52,13.81,50.29,48.31,71.23,70,70,72.5,179.43,169.76,93,209.15"/>
                <path class="cls-21 hilera hilera3" d="M437.33,666.66q9.14,6.17,18.78,12.18a607.26,607.26,0,0,0,143.48,65l10.8-7.19,16.05-1.27,12.22-10.61c35.37-25.65,56.46-50.86,69-68.92,10.06-14.43,27.94-43.35,27.9-43.37l-.27.4-26-3.62-26.53,1.05-30.1,21.35-31.15-5.17-30.1,21.35-50.64,0-34.93,25.61Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor3">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M677.23 1796.56c7.78-176 2.15-311.79-4.78-405.11-1.85-24.92-8.72-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.61-48.14 48.36-134.08 151.74-219.87">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id = "tallo3"
        />
    </path>
    
    <g>
        <animateMotion
           dur="3s"
           begin="tallo3.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M-150 1070c7.78-176 2.15-311.79-4.78-405.11-1.85-24.92-8.72-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.61-48.14 48.36-134.08 151.74-219.87"
        />
        <g class="flor flor3">
            <path d="M986 540.43c55.26 59.25 212.2-40.23 279.15-133.19 22.33-31 44-70.54 48.57-95.81 5.78-31.71-21.57-10-39.62-2.15-22.1 9.63-40.1 29.83-72.64 65.72C1122.1 462.69 926.23 476.38 986 540.43" fill="url(#Degradado_sin_nombre_5-10)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M1022.78 561.57c-66.21-46.68 11-215.69 94-294.66 27.67-26.33 63.91-53.13 88.32-61.14 30.63-10 12.86 20 7.51 39-6.54 23.18-24.1 43.75-55.27 80.85-76.06 90.55-63 286.46-134.58 236" fill="url(#Degradado_sin_nombre_29)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M1090.75 558.25c-8.27-100.67 11.87-185.72 45.9-231.71a337.68 337.68 0 0140.54-44.26c36.15-33.22 44.77-25.4 75-48.6 13.93-10.68 21 11.64 16.08 29.42-6 21.76-18.53 58.93-29.3 90.09-36 104.14-78 257.56-148.26 205.06" fill="url(#Degradado_sin_nombre_68)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M1016.47 549.34c-73.76-33.89-36-202.41 26.82-288 20.93-28.51 47.91-45.28 63.22-63.22 11.39-13.36 22.92 7 21.87 25.41-1.29 22.53-5.79 61.5-9.81 94.22-13.44 109.37-22.37 268.16-102.1 231.54" fill="url(#Degradado_sin_nombre_28)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M1068.33 596.45c66.87 61.87 207.59-44.73 258.34-143.47 16.92-32.91 18-57.89 27.64-80.78 7.17-17.05-2.65-36.84-19.48-28.35-20.6 10.39-68 37.48-97 54.78-96.54 57.81-241.83 130.93-169.5 197.82" fill="url(#Degradado_sin_nombre_5-11)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M1059.46 636.4c59.11 69.32 211.41-19.94 273.45-112 20.68-30.69 24.7-55.37 37-77 9.13-16.08 1.71-36.89-16-30.45-21.67 7.9-72 29.2-102.73 43-102.73 46-255.58 101.51-191.68 176.45" fill="url(#Degradado_sin_nombre_64)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path class="cls-18" d="M1003.65 464.9c-140-115.13 10.11-143.44 107.47-159.45 32.45-5.33 78.1 7.72 102.38 6.72 18.08-.75 42 19.21 43.6 36.4 2 21 23 61.69 22 89.88-3.46 94.19-124.06 150.92-275.41 26.45"/>
                <path d="M942.64 631.61c-76.18-27.45-43.83-233.8 16.91-346.06 20.24-37.41 47.06-62 62-85.87 11.09-17.8 24.07-12.7 23.67 9.31-.5 26.93-10.46 75.36-31.38 125.46-51 122.26 11.19 326.83-71.17 297.16" fill="url(#Degradado_sin_nombre_70)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M954.26 624.45c-78.81-46.06-22.06-212.79 55.1-290.7 25.72-26 48.86-34.37 67.41-50.39 13.81-11.92 35.45-8.32 32.66 10.38-3.4 22.86-14.22 76.48-21.56 109.37-24.52 109.89-48.41 271.12-133.61 221.34" fill="url(#Degradado_sin_nombre_67)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M987.48 705c42.38 69.28 237.07-7.32 334.14-91.58 32.35-28.09 50.8-59.88 71.08-79.77 15.09-14.81 7.46-26.53-13.93-21.36-26.17 6.32-71.38 26.63-116 58.13C1154 647.33 941.66 630.15 987.48 705" fill="url(#Degradado_sin_nombre_63)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M942.05 730.14c60.68 54 224.54-76.25 292.84-185.28 22.77-36.34 31.16-72.17 44.76-97.14 10.13-18.59-.58-27.58-19.53-16.39-23.19 13.7-77.09 48.49-110 70.51-110.13 73.57-273.62 170-208 228.3" fill="url(#Degradado_sin_nombre_65)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M960.57 675c-56.45-58.38 41.95-204.42 132.76-263 30.27-19.53 61.82-25.78 82.87-37.31 15.66-8.58 18.86 14.8 11 31.85-9.63 20.87-28.42 56.15-44.42 85.69C1089.31 591 1021.6 738.13 960.57 675" fill="url(#Degradado_sin_nombre_66)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M873.58 640.2c-78.3-21.69-66.26-207.38-16.89-310 16.46-34.22 40.7-57.15 53.16-79.1 9.29-16.33 22.68-12.25 24.41 7.44 2.13 24.1-3 67.77-18.94 113.34-38.79 111.22 42.9 291.78-41.74 268.33" fill="url(#Degradado_sin_nombre_23)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M961.69 785.18c37.61 71.72 215.38 17.69 304.61-54 29.74-23.89 61.08-56.21 72.23-79.31 14-29-18.16-15.38-37.66-12.6-23.84 3.4-46.55 18.07-87.45 44-99.79 63.27-292.4 24.37-251.73 101.9" fill="url(#Degradado_sin_nombre_58)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M850.71 750.1c-66-47.94 19.82-238.9 108-330.71 29.4-30.6 61.7-46.88 82.38-65.89 15.4-14.15 26.54-5.57 20.31 15.65-7.61 26-28.16 87-41.43 124.47-44.34 125.23-97.91 308.3-169.27 256.48" fill="url(#Degradado_sin_nombre_20)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M819 730.93c-74.77-32.62-32-237.57 34.37-346.2 22.13-36.2 50.18-59.05 66.29-82.06 12-17.13 24.72-11.15 23.2 10.92-1.85 27-8.8 91-13.7 130.46C912.8 575.89 899.86 766.19 819 730.93" fill="url(#Degradado_sin_nombre_71)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M853.63 695.56c-35.75-72.84 151.18-135 270.11-173.17 39.64-12.71 75.29-11.6 102-18.35 19.9-5 25.72 7.68 10.59 23.19-18.51 19-36 51.51-64.71 77.81-95.9 87.9-279.36 169.27-318 90.52" fill="url(#Degradado_sin_nombre_60)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M928.05 765.14c-35.36-73 151.9-134.2 271-171.7 39.72-12.5 75.35-11.19 102.13-17.8 19.93-4.92 25.67 7.83 10.46 23.25-18.61 18.87-36.28 51.31-65.13 77.46-96.38 87.38-280.28 167.74-318.5 88.79" fill="url(#Degradado_sin_nombre_40-4)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M855.22 760c-37.79-70.87 83.36-191.35 173.27-280.76 0 0 18.91-18.81 99.59-59 4.29-2.14 13.75-6.7 18.17-3 4.92 4.09 1.08 16.23-.75 21.82-18.84 57.68-28.27 86.52-34.33 96.29-83.72 134.78-167.62 269.85-227.45 250.91-17.48-5.54-26.34-22.15-28.5-26.26z" fill="url(#Degradado_sin_nombre_59)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M843.12 729.89c-77.88-9-96.92-122.47-66.9-187.45 10-21.66 29.25-36.88 37.49-50.87 6.13-10.42 19.51-8.65 24.39 3.22 6 14.53 8.22 41.33.61 69.86-18.57 69.63 88.6 175 4.41 165.24" fill="url(#Degradado_sin_nombre_18)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M865.33 776.45C792.12 743 818.09 602 873.3 533.24c18.41-22.92 43.38-35.48 57-49.77 10.15-10.64 22.64-4.64 22.77 11 .16 19.08-1.87 64-3.71 91.55-6.16 92.17-4.9 226.67-84 190.47" fill="url(#Degradado_sin_nombre_57)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M850.7 776.43c-49.86-62.73 64.2-106 137.23-132.41 24.34-8.79 50.38-6.18 67.4-10.59 12.67-3.27 21.07 7.66 15.31 19.94-7.06 15-8.89 41.47-20.86 62.17-40 69.15-145.18 128.7-199.08 60.89" fill="url(#Degradado_sin_nombre_56)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M867.24 767.27c12.25 78.6 153.85 88.35 234.4 52.23 26.85-12 45.56-32.94 62.89-42.52 12.89-7.13 10.52-20.62-4.34-24.58-18.17-4.85-61.59-14-88.43-19-89.68-16.78-217.78-51.1-204.52 33.86" fill="url(#Degradado_sin_nombre_54)" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/>
                <path class="cls-35" d="M958.77 836.08a330 330 0 00-137-9l-12.93-11-6-10.48q-2-1.77-4-3.53c-16.73-28.42-37.67-74.71-36.71-132.4a232.14 232.14 0 012.71-31.6l17.13 39.45 18.34 10.94 13.07 26.68 24 8.32 13.06 26.67 35.81 19.46q7.42 15.76 14.84 31.54z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M1021.46,452.86C956.32,371.39,1122.19,192.44,1259.17,126c45.65-22.15,102.37-41.75,136.53-42.63,42.86-1.1,8.25,29.24-6.15,50.51-17.61,26-48.15,44.82-102.58,78.9C1154.14,296,1091.88,540.93,1021.46,452.86"/>
                <path class="cls-21 hilera hilera1" d="M1089.38,453.32c86.27,61,259.55-86.91,319.94-210.59,20.13-41.23,22.69-81.84,34-110.16,8.43-21.08-22.68-21.17-43.56-8.45-25.54,15.57-68.28,45-104,70.07C1176.27,277.8,996.13,387.4,1089.38,453.32"/>
                <path class="cls-21 hilera hilera1" d="M1189.46,583.43c99.46,38.7,230.85-144.71,258.4-278.3,9.18-44.53,1.41-84.34,5.27-114.35,2.88-22.33-27.45-15.14-44.57,2.05-20.94,21-55.12,59.49-83.62,92-95.23,108.72-243,256.75-135.48,298.58"/>
                <path class="cls-21 hilera hilera1" d="M926.37,345.18c-56.32-102.25,129.21-243.7,273.55-275.95,48.12-10.74,80.57-4.32,113.3-9.15,24.36-3.59,46.39,14.76,29.66,33-20.46,22.33-71.66,72.78-103.88,103.27C1131.37,298.22,987.26,455.72,926.37,345.18"/>
                <path class="cls-21 hilera hilera1" d="M864.92,373.14c-66.21-96.51,104.9-254,245.67-299.14,46.92-15.06,79.91-11.63,112.07-19.4,23.94-5.79,47.7,10.45,32.82,30.11-18.22,24-64.31,78.85-93.44,112.08-97.32,111-225.55,280.67-297.12,176.35"/>
                <path class="cls-21 hilera hilera1" d="M1172.67,676c103.15,27.62,234.59-210.51,260.18-371.84,8.53-53.77-.29-99,3.07-134.83,2.5-26.66-15.42-30.94-32.68-7.78-21.13,28.34-49.45,86-67.45,153.42-43.94,164.58-274.63,331.17-163.12,361"/>
                <path class="cls-21 hilera hilera1" d="M1132.87,567.36c112,39.09,241.06-154.62,260.42-294.75,6.45-46.72-3.44-76.36-1.63-107.81,1.34-23.4-19.94-41.63-37.29-23.41-21.23,22.28-68.74,77.28-97.31,111.72-95.48,115.07-245.3,272-124.19,314.25"/>
                <path class="cls-21 hilera hilera1" d="M817,370.45c-39.38-96.16,200.26-232.39,368.81-264.67,56.19-10.76,105-4.69,142.68-9.66,28-3.7,34.31,13,11.44,30.52-28,21.39-86.32,51.07-156.08,71.47C1013.65,247.91,859.58,474.4,817,370.45"/>
                <path class="cls-21 hilera hilera1" d="M834.62,524.49c-68.18-78.78,116-282.82,265.87-366.14,50-27.78,98.31-37.3,132.5-53.79,25.45-12.27,36.78,1.61,20.63,25.33-19.75,29-69.6,96.39-101.08,137.56-105.18,137.57-244.21,342.2-317.92,257"/>
                <path class="cls-21 hilera hilera1" d="M1019.43,495.72c91.4,53.67,256.67-109.14,309.38-238.07,17.57-43,17.41-83.84,27-113.15,7.09-21.82-24.38-19.25-44.64-4.73-24.78,17.76-66,50.91-100.5,79-115.19,93.87-290,218.93-191.19,276.94"/>
                
                <path class="cls-21 hilera hilera2" d="M1076.62,724.09c87.69,61.63,262.47-108.89,323-246.83,20.18-46,22.56-90.33,33.89-121.78,8.43-23.41-6.93-33.64-28-18.63-25.79,18.35-64.91,60.85-96.89,115.94-78,134.43-326.81,204.68-232,271.3"/>
                <path class="cls-21 hilera hilera2" d="M779.05,547.21C699.88,475,823.91,263.56,942.65,172.12c39.58-30.47,90.34-60.25,123.1-67,41.11-8.47,13.83,28.49,4.21,52.72-11.76,29.64-37.44,54.09-83.09,98.29C875.49,364,864.63,625.24,779.05,547.21"/>
                <path class="cls-21 hilera hilera2" d="M915.52,722.24c89.69,59.38,281-138,350.67-291.24,23.22-51.09,27.64-99,40.9-133.74,9.88-25.87-5.85-35.66-28.69-17.84-28,21.79-92.36,76.3-131.61,110.58-131.15,114.58-328.23,268-231.27,332.24"/>
                <path class="cls-21 hilera hilera2" d="M961.59,767.21c85.16,66,290.49-116.17,371.19-263.61,26.9-49.15,34.81-96.56,50.59-130.18,11.74-25-3.24-36-27.33-20-29.48,19.6-97.74,69-139.41,100.22-139.24,104.22-347.11,242.2-255,313.53"/>
                <path class="cls-21 hilera hilera2" d="M871.53,643.55c90.35,57.21,193.84-182,257.83-334.35,21.33-50.79,24.2-98.15,36.22-132.65,9-25.69-6.88-35.11-28.87-17.17-26.9,22-71.31,40.74-109,75.2-125.89,115.14-253.88,347.13-156.19,409"/>
                <path class="cls-21 hilera hilera2" d="M831.82,558.58c29.42,1.12,65.14-10.72,241.92-260.09,16.34-23.06,49-70.17,63.48-139.12,2.11-10,3.37-18.39,4.11-23.86a220,220,0,0,0-28,0s-59.73,3.86-124,45.42c-54.38,35.15-151,157.78-230.73,346.92C790.14,553.13,815.89,558,831.82,558.58Z"/>
                <path class="cls-21 hilera hilera2" d="M892.21,700.8C995.4,720.75,1096.78,519,1172,369.35c0,0,15.82-31.49,33.6-150,.94-6.29,2.84-20.13-3.51-24.29-7-4.63-20.61,5.07-26.83,9.6-64.17,46.8-96.26,70.2-106,81.78-134.1,159.81-268.5,320-221,388.49C862.11,695,886.3,699.66,892.21,700.8Z"/>
                
                <path class="cls-21 hilera hilera3" d="M916.41,683.82c50.51,105.79,220.23,77.71,297.57,3.73,25.79-24.66,38-59.26,53.79-77.69,11.76-13.73,2.78-31.8-16.38-32.94-23.45-1.41-62.45,8.41-99.12,33-89.48,60-290.48-40.48-235.86,73.89"/>
                <path class="cls-21 hilera hilera3" d="M869.16,691.72c87.47,82.71,268.28-32.35,332.65-147.46,21.46-38.37,24.85-80,37-106.95,9.05-20-6.28-34-28-25.42-26.53,10.48-87.62,38.47-124.82,56.5C961.73,528.62,774.6,602.31,869.16,691.72"/>
                <path class="cls-21 hilera hilera3" d="M848.81,680.23C954.61,736.48,987.28,557,1006.18,442.44c6.31-38.19-4.61-75.76-2.77-102,1.37-19.52-17-28.9-33.49-17.08-20.17,14.46-58.55,24.35-85.73,47.57-90.81,77.6-149.75,248.49-35.38,309.29"/>
                <path class="cls-21 hilera hilera3" d="M808.09,635.54C712.21,591.06,751.68,406.65,827.35,317c25.23-29.87,58.79-46.1,77.38-64.71,13.84-13.85,30.18-5.88,29.8,14.55-.47,25-4.76,83.78-8.19,119.9-11.46,120.68-14.6,296.87-118.25,248.78"/>
                <path class="cls-21 hilera hilera3" d="M754.25,547.77q1.51,13.18,3.57,26.71a730.62,730.62,0,0,0,52.95,182l15,4.24,13.71,13.68,19.27,2.85c51.13,12.24,90.68,11.76,117,9.11,21.06-2.12,61.49-8.42,61.48-8.47l-.59.06-17.07-26.62-21.74-23.42-43.08-10.78-19.66-32.52-43.08-10.78-39.63-46.29-50.75-11.87Q778,581.72,754.25,547.77Z"/>
            </g>
        </g>
    </g>
    
    <g class="hoja hoja3">
        <path d="M812.44 1050.43s229.45 77.91 294.36-215.05l38-195.53a122.73 122.73 0 01-35.14 35.58c-31.51 20.6-61 17.41-101.62 23.34 0 0-51.22 7.47-100.76 30.55-26.48 12.33-82.35 46.84-121 154.29 0 0-27 57.62-19.56 99.59s30.22 72.58 45.72 67.23z" fill="url(#Degradado_sin_nombre_92-3)"/>
        <path class="cls-7" d="M870 789.09s-32.77 30.06-51.24 126c0 0-1.49 99-40 101.49-12 .78-22 1.61-29.9 2.38-39-.8-83.5-2.17-83.5-2.17s27.69 34 170.41 8.72c0 0 50.3 24.85 148.94-19.51 0 0-81 31.69-145.49 14.57 0 0 35.54-19.3 61.4-39.48 0 0 85 15.23 118.62-24.51 0 0-76.23 29.12-111.71 14.63l48.06-41.44s91.06-18.76 112.86-52.07c0 0-87.67 47.6-104.87 38.53a258.4 258.4 0 0044.21-48.55s75.82-41.16 75.21-59.24c0 0-52.8 44-69.8 41 0 0 31.69-26.4 54.36-69.4 0 0 1.49 8.4 40.08-27.89l-37.91 20.58 46.84-77.59s-18 26.07-42.21 60.19c.81-7.44 3.13-28.22 5.17-40.72-3.6 11.24-9.86 30.26-12.44 47.29a50.21 50.21 0 01-1.12 5.25c-10.71 15-22.26 31.11-33.79 46.93-1.35-11.92-3.74-53.82 22.58-91.51 0 0-35.49 31.9-26 94L962.23 904l8.55-9.57c-3.5 4.15-6.65 7.74-9.38 10.65l.83-1.08-2.85 3.18c-.34.34-.66.67-1 1 1.54-12.19 16.5-128.87 28.45-157.25-9.39 16.49-34.49 68.75-34.48 156.05 0 0-9.5 16.12-30.67 37.2a577.684 577.684 0 01-18.7 17.06q-6.82 5.73-14.68 11.57s8.53-66.37 4.94-101.24c0 0 6.16-67.77 23.22-98.51 0 0-44.48 76.31-37.83 201.56 0 0-57.75 40.56-79.48 40.08 0 0 21.12-17.6 27.75-107.11.02-.02 32.71-103.67 43.1-118.5zM931.13 935q-2 1.95-4.07 4c4.85-5.67 5.51-6.13 4.07-4z"/>
    </g>
    <g class="hoja hoja2">
        <path d="M795.53 1360.54s217.33-107.16 56.08-360.2L740.24 835.18a122.78 122.78 0 01.3 50c-7.71 36.85-30.81 55.44-55.34 88.36 0 0-30.94 41.51-49.65 92.85-10 27.45-25.1 91.36 23.53 194.68 0 0 21.64 59.84 56.59 84.25s72.68 29.96 79.86 15.22z" fill="url(#Degradado_sin_nombre_97)"/>
        <path class="cls-7" d="M651.41 1135.07s-1.91 44.42 52.86 125.32c0 0 68.94 71 43.48 100.06-8 9.06-14.39 16.66-19.46 22.83-28.14 27-60.58 57.5-60.58 57.5s43.66 4.5 126.66-114.33c0 0 53.14-18 91.53-119.11 0 0-34.85 79.66-92.58 113.18 0 0 11.49-38.78 15.51-71.34 0 0 70.84-49.31 66.53-101.2 0 0-33.31 74.49-68.64 89.33l4.69-63.29s51.12-77.65 43-116.62c0 0-28.34 95.65-46.91 101.4a258.52 258.52 0 00-3.07-65.59s24.51-82.72 11.29-95.07c0 0-6.22 68.46-20.39 78.32 0 0 3.73-41.08-10.63-87.51 0 0 7 4.88 8.61-48.07L781 982.24l-21.74-88s5.74 31.2 12.74 72.43c-4.69-5.84-17.74-22.18-25.14-32.46 5.4 10.5 14.42 28.37 24.64 42.24a49.11 49.11 0 012.92 4.51c3.06 18.19 6.26 37.74 9.3 57.08-9.38-7.48-40.71-35.42-48.75-80.69 0 0-2.54 47.66 48.14 84.87l14.78 108.86-.72-12.81c.47 5.41.78 10.17.9 14.16l-.18-1.35.24 4.26v1.39c-7.53-9.71-79.46-102.79-91.07-131.31 5 18.3 24.23 73 86 134.72 0 0 4.68 18.12 4.62 48-.2 8.07-.56 16.67-1.15 25.29a320.57 320.57 0 01-2.2 18.57s-40.9-53-68.1-75.09c0 0-43.57-52.27-53.24-86.07 0 0 22.51 85.4 115.77 169.27 0 0-12.15 69.51-27.86 84.55 0 0 2.49-27.39-56.11-95.36-.04-.01-50.22-96.43-53.38-114.23zM797.84 1195c0 1.85 0 3.75-.06 5.69-.58-7.43-.43-8.23.06-5.69z"/>
    </g>
</g>

<g mask="url(#mask)" style="transform: translateY(-10px); opacity: 0">
    <animate
        attributeName = "opacity"
        from = "0"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1.5s"
        fill = "freeze"
    />
    <path class="cls-6" d="M678.73 1832.41a33.68 33.68 0 00-27-21c-13.83-1.62-27.55 6-34 19z"/>
    <path class="cls-6" d="M667.73 1833.41c6.45-13 20.17-20.62 34-19a33.68 33.68 0 0127 21q-14.46-.51-29-1-16.03-.53-32-1z"/>
</g>`

const confused = `
<defs>
    <linearGradient id="Degradado_sin_nombre_33" x1="606.31" y1="1856.35" x2="606.31" y2="1834.35" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset=".09" stop-color="#020202"/>
        <stop offset=".13" stop-color="#0a0a0a"/>
        <stop offset=".17" stop-color="#171717"/>
        <stop offset=".2" stop-color="#2a2a2a"/>
        <stop offset=".22" stop-color="#424242"/>
        <stop offset=".25" stop-color="#606060"/>
        <stop offset=".27" stop-color="#848484"/>
        <stop offset=".29" stop-color="#aeaeae"/>
        <stop offset=".31" stop-color="#dbdbdb"/>
        <stop offset=".32" stop-color="#fff"/>
    </linearGradient>
    <style>
        .cls-2{fill:#498271}.cls-3{fill:#476e66}.cls-4{fill:#053d33}.cls-5{fill:#e85d04}.cls-28{fill:none}.cls-10,.cls-12,.cls-13,.cls-14,.cls-18,.cls-19,.cls-21,.cls-27,.cls-28,.cls-9{stroke-miterlimit:10}.cls-9{fill:#f15c44}.cls-10,.cls-12,.cls-13,.cls-14,.cls-18,.cls-19,.cls-21,.cls-27,.cls-9{stroke:#fff;stroke-width:2px}.cls-10{fill:#ffba08}.cls-12{fill:#b73427}.cls-13{fill:#d00000}.cls-14{fill:#e54029}.cls-15{fill:#fbb7b0}.cls-16{fill:#ff5c41}.cls-18{fill:#ce5649}.cls-19{fill:#e5604e}.cls-22{fill:#012b23}.cls-23{fill:#003e32}.cls-25{fill:#5e2b27}.cls-21{fill:#e85e05;}.cls-27{fill:#9d0208}.cls-28{stroke:#333e39;stroke-width:34px}
        .monte{
            transform-origin: 610px 1730px;
            animation: monte 5s ease-in-out forwards;
        }
        .monte1{
            transform: scaleX(0.2) scaleY(.2) rotate(5deg);
            animation-delay: 1.5s;
        }
        .monte2{
            transform: scaleX(0.2) scaleY(.2) rotate(-5deg);
            animation-delay: 2s;
        }
        @keyframes monte{
            100%{
                transform: none;
            }
        }
        .hoja{
            transform: scale(0);
            animation: hoja 2s ease-out forwards;
        }
        .hoja1{
            transform-origin: 530px 1370px;
            animation-delay: 3.5s;
        }
        .hoja2{
            transform-origin: 635px 1380px;
            animation-delay: 3.5s;
            animation-duration: 3s;
        }
        .hoja3{
            transform-origin: 630px 980px;
            animation-delay: 4s;
        }
        .hoja4{
            transform-origin: 530px 830px;
            animation-delay: 5s;
            animation-duration: 3s;
        }
        .hoja5{
            transform-origin: 560px 810px;
            animation-delay: 4.7s;
        }
        @keyframes hoja{
            to{
                transform: none;
            }
        }
        .flor{
            transform: scale(0);
            opacity: 0;
            animation: flor 3s forwards;
        }
        .flor1{
            transform-origin: 420px 1145px;
            animation-delay: 2s;
        }
        .flor3{
            transform-origin: 740px 790px;
            animation-delay: 3.5s;
            animation-duration: 2s;
        }
        .flor2{
            transform-origin: 535px 740px;
            animation-delay: 3s;
        }
        @keyframes flor{
            40%{
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            50%{
                opacity: 1;
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            100%{
                opacity: 1;
                animation-timing-function: linear;
                transform: scale(1);                                
            }
        }
        .florcerrada{
            animation: florcerrada 3s ease-out forwards;
        }

        @keyframes florcerrada{
            to{
                opacity: 0;
            }
        }
        .flor1 .florcerrada{
            animation-delay: 4s;
        }

        .flor1 .hilera{
            transform-origin: 470px 1100px;
            animation: hilera 4s ease forwards;
        }
        .flor1 .hilera1{
            animation-delay: 3.5s;
        }
        .flor1 .hilera2{
            animation-delay: 5s;
        }
        .flor1 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }
        .flor2 .florcerrada{
            animation-delay: 4.5s;
        }
        .flor2 .hilera{
            transform-origin: 560px 600px;
            animation: hilera 3s ease forwards;
        }
        .flor2 .hilera1{
            animation-delay: 4s;
        }
        .flor2 .hilera2{
            animation-delay: 5s;
        }
        .flor2 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }
        .flor3 .florcerrada{
            animation-delay: 4s;
        }
        .flor3 .hilera{
            transform-origin: 840px 620px;
            animation: hilera 3s ease-in-out forwards;
        }
        .flor3 .hilera1{
            animation-delay: 3s;
        }
        .flor3 .hilera2{
            animation-delay: 4.5s;
        }
        .flor3 .hilera3{
            animation-delay: 3.5s;
            animation-timing-function: ease-in;
        }
        @keyframes hilera{
            to{
                transform: scale(0.7);
            }
        }
    </style>
    <mask id="mask" x="550.31" y="1834.13" width="111" height="24.22" maskUnits="userSpaceOnUse">
        <path fill="url(#Degradado_sin_nombre_33)" d="M551.31 1834.35h110v22h-110z"/>
    </mask>
</defs>
<g style="transform: translate(-80px, 0px);">
    <ellipse class="cls-2" cx="592.37" cy="1890.62" rx="72" ry="42.5" transform="rotate(-45 592.371 1890.622)"/>
    <path class="cls-3" d="M632.92 1833.28s-61.91 99-95.23 101.42c0 0 2.68 14.42 9.68 5.42 0 0 61.1-10.67 85.55-106.84zM765.37 1837.12a311.95 311.95 0 01-79 83 83 83 0 0033.54-5.25c39.17-15 64.81-61.26 55.46-73.75-1.37-1.83-4.1-3.73-10-4z"/>
    <path class="cls-2" d="M774.91 1822c-5.88-8.06-44.75 3.7-69.53 29.74-29.59 31.09-26.43 69.21-25 71.35a7.66 7.66 0 002 2 6.72 6.72 0 003 1 399.31 399.31 0 0055.46-52c17.92-20.32 39.43-44.73 34.07-52.09z"/>
    <path class="cls-2" d="M791 1833.18c-1.4-1.53-2.8-3.06-5.1-3.46-15.55-2.73-24.28 54.86-65.57 80a86.28 86.28 0 01-35.94 11.75c-.9.25-2.37.79-2.61 1.86a2.38 2.38 0 00.59 1.84c1.74 2.3 45.85 14.58 79.22-10.88 28.72-21.97 42.72-66.66 29.41-81.11z"/>
    <path class="cls-3" d="M775 1822v.07z"/>
    <path d="M735.37 1888.12s44-66 79-96" stroke-miterlimit="10" stroke="#012b23" stroke-width="4" fill="none"/>
    <circle class="cls-2" cx="813.87" cy="1793.62" r="4.5"/>
    <path class="cls-3" d="M664.68 1764.64a339.32 339.32 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.79c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.58-4-52.47-22.39-58.48a22.86 22.86 0 00-10.91-.68z"/>
    <path class="cls-2" d="M667.49 1747.73c-8.5-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.51a7.77 7.77 0 002.61 1.09 6.91 6.91 0 003.16-.22 400.36 400.36 0 0031.51-69.19c8.86-25.69 19.46-56.44 11.72-61.19z"/>
    <path class="cls-2"  d="M730.19 1791c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.83 53.65-69.26 76.78a86.42 86.42 0 01-36.45 10c-.91.21-2.4.68-2.7 1.74a2.42 2.42 0 00.51 1.87c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.54 45.8-64.49 33.19-79.54z">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-30 640 1860"
          to="0 640 1860"
          dur="2s"
          fill="freeze"
          begin = "0s"
          id = "semilla"
          />
    </path>
    <path class="cls-3" d="M690.24 1769v.08z"/>
</g>
<g style="opacity: 0.2">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <path class="cls-22" d="M597.26 1787.58a339.58 339.58 0 01-12.2 46.73 324.9 324.9 0 01-30.81 65.79c39.93-3.55 70.71-25.81 76.3-53.36 4.19-20.59-4-52.47-22.39-58.49a22.8 22.8 0 00-10.9-.67z"/>
    <path class="cls-23" d="M600.07 1770.67c-8.51-5.21-40 20.44-53 53.95-15.54 40 1.88 74.06 4 75.5a7.53 7.53 0 002.61 1.09 6.75 6.75 0 003.15-.22 399.7 399.7 0 0031.52-69.18c8.85-25.64 19.46-56.4 11.72-61.14z"/>
    <path class="cls-23" d="M662.77 1813.92c-1.33-1.59-2.67-3.19-4.94-3.7-15.4-3.45-26.83 53.66-69.25 76.79a86.42 86.42 0 01-36.45 10c-.92.21-2.4.68-2.7 1.74a2.35 2.35 0 00.51 1.86c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.45 45.79-64.45 33.19-79.53z"/>
    <path class="cls-22" d="M622.82 1791.89v.08z"/>
    <path d="M861.09 1947.39c-15.28 38-74.17 47.21-138.74 57.35a495.05 495.05 0 01-155.05-.37c-180 24.24-207.93-18.48-213.67-30.27-29.77-61.14 84.88-216.77 226.13-231.47 2.54-.27 5.75-.57 9.59-.8a249.93 249.93 0 0128.65.17c88.2 6.18 149.35 49.72 149.35 49.72 43.65 31.11 114.33 104.5 93.74 155.67z" fill="#562822"/>
    <path class="cls-25" d="M485.24 1917.53l-5.48 3.06-8.6-2.21-5.24-5.8 2.06-5.04 7.81-.47 7.68 4.44 1.77 6.02zM406.24 1936.53l-5.48 3.06-8.6-2.21-5.24-5.8 2.06-5.04 7.81-.47 7.68 4.44 1.77 6.02zM617.12 1916.39l-3.3-5.33 1.81-8.69 5.57-5.5 5.13 1.82.82 7.78-4.09 7.88-5.94 2.04zM465.12 1968.39l-3.3-5.33 1.81-8.69 5.57-5.5 5.12 1.82.83 7.78-4.09 7.88-5.94 2.04zM697.12 1890.39l-3.3-5.33 1.81-8.69 5.57-5.5 5.13 1.82.82 7.78-4.09 7.88-5.94 2.04zM768.12 1960.39l-3.3-5.33 1.81-8.69 5.57-5.5 5.13 1.82.82 7.78-4.09 7.88-5.94 2.04zM474.47 1879.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.94 7.95-1.84 5.99zM584.47 1964.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.95 7.95-1.85 5.99zM592.47 1879.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.95 7.95-1.85 5.99zM501.47 1816.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.94 7.95-1.84 5.99zM719.47 1810.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.95 7.95-1.85 5.99zM545.47 1850.19l-6.26-.47-5.95-6.59-1.16-7.74 4.49-3.06 6.78 3.92 3.95 7.95-1.85 5.99z"/>
</g>
<g class="monte monte1">
    <path fill="#052b24" d="M617.72 1726.35c28.81-266 .55-477.45-28.41-615-26-123.36-57.64-211.76-65-232-99.51-273.64-235.45-412.95-282.37-488-1.41-2.26-6-9.7-7.63-9-2.1.9 2.13 15 3 18 17.23 59.29 158.72 717.2 305 1029 3.54 7.54 12 25.46 22 51a805.93 805.93 0 0153.41 246z">
        <animate
            attributeName = "fill"
            dur = 1.5s
            from = "#052b24"
            to = "#e85d04"
            fill = "freeze"
            begin = "3.5s"
        />
    </path>
    <path d="M243.31 402.35a3605.1 3605.1 0 01233 574A3607.39 3607.39 0 01621.7 1710.7" stroke-width="6" stroke-miterlimit="10" stroke="#04231d" fill="none"/>
</g>
<g class="monte monte2">
    <path d="M599.36 1792.57c3.09-260.1-6.48-469.9-16-615-11.53-175.67-19.21-199.12-12-281 26.29-298.91 179.32-563 193-558 1.57.57 1.4 4.75 1 10-4.86 62.79-72.08 647-166 1444z" fill="#052b24"/>
    <path d="M757.36 357.57a5365.42 5365.42 0 00-158 1435" stroke="#04261f" stroke-width="6" stroke-miterlimit="10" fill="none"/>
</g>

<g class="all-flor2">
    <g class="hoja hoja4">
        <path class="cls-3" d="M407.08 838.59S170.92 884.45 65 608.77L0 425.36s60.9 74.29 153.83 69.21c0 0 211.15 39.86 260.56 194.06 0 0 36.09 55.81 33.32 93.44s-23.35 63.15-40.63 56.52z"/>
        <path class="cls-4" d="M373.84 706.07c18.21 82.76 43 101.24 43 101.24-23.22-2-90.13-45.58-90.13-45.58-8.42-114-65.54-188.91-65.54-188.91 22.09 30.07 37.1 92.86 37.1 92.86.48 31.55 17.86 93.32 17.86 93.32Q307 752.79 299 746.77c-7.69-5.93-15.2-12-22.15-17.72-25.29-21.67-37.48-37.51-37.48-37.51-10.83-80-44.2-130.67-56.31-146.83 16.33 27.34 46.84 135.92 50 147.27l-1.18-1-3.44-3.23 1 1.08c-3.28-3-7.1-6.61-11.36-10.8l10.35 9.72-82.14-87.52c2.5-55.89-39.49-89.07-39.49-89.07 32.89 37.47 35.52 75.6 35.55 86.38a6710.442 6710.442 0 01-42-46.78 47.32 47.32 0 01-1.85-4.93c-4.88-15.9-14-34-19.2-44.72 3.73 11.68 8.8 31 10.59 37.89-30.15-33.95-52.7-59.85-52.7-59.85L97 555.45l-43.18-23.08c45.85 37.55 46.4 30 46.4 30 29.63 41.95 66.86 69.63 66.86 69.63-17.83.9-79.87-45.31-79.87-45.31 1.59 16.5 87.94 62.66 87.94 62.66a365 365 0 0053.38 49.41c-17.3 6.4-117.14-47-117.14-47 27.49 32.95 127.38 60.28 127.38 60.28l56.64 43.32c-36.21 9.32-121.5-25.84-121.5-25.84 41 40.16 130.13 35.67 130.13 35.67 30.21 21.36 70.69 43 70.69 43-67 8.51-157.69-29.54-157.69-29.54 111.18 51.62 162 34.46 162 34.46 156.05 39.09 181.49 11 181.49 11s-47.51-3.71-89.19-7.3c-8.61-1.59-19.34-3.46-32.33-5.52-41.59-6.58-55.46-97.45-55.46-97.45C351.85 623.9 313 592.71 313 592.71c13 14.74 60.84 113.36 60.84 113.36zm-103.4 17.65c-1.66-1.4-3.28-2.76-4.85-4.1-1.81-2.13-1.04-1.62 4.85 4.1z"/>
    </g>
    <g class="hoja hoja5">
        <path class="cls-2" d="M630.62 806s155.16 12.46 149.54-180.21l-7-127.77S755 552.4 697.2 556.17c0 0-118.2 43-109.09 150 0 0-7.77 40.14 3.47 65.11s30.22 40.45 39.04 34.72z"/>
        <path fill="#6d452c" d="M625.37 634.14s-15.68 23.86-12.11 86.53c0 0 14.63 61.89-9 69.5-7.37 2.38-13.42 4.46-18.25 6.19-24.41 5.62-52.35 11.77-52.35 11.77S556.29 825 641.2 786.78c0 0 35.24 7.57 89.71-35.56 0 0-45.45 32.46-88.33 31.94 0 0 19.1-17.61 32-34.24 0 0 55.32-3.87 70-33.92 0 0-42.91 30.12-67.28 26.68l23.42-33.37s53.77-26 62.11-50.17c0 0-47.12 43.43-59.26 40.48a166.05 166.05 0 0019.9-37.18s40.76-37.56 37.54-48.73c0 0-26 35.71-37 36.49a161.81 161.81 0 0023-51.77s2.24 5 20.57-23.68l-20.38 18.78 17-55.69s-7.13 19.07-16.84 44.13c-.66-4.77-2.48-18.08-3.18-26.18-.47 7.57-1.38 20.4-.32 31.41a30.17 30.17 0 01.13 3.44c-4.3 11.05-9 22.88-13.66 34.55-2.72-7.21-10.8-32.94-.32-60.55 0 0-17.1 25.45-1.39 62.66l-27.7 64.91 3.82-7.31c-1.52 3.14-2.92 5.87-4.17 8.11l.35-.8-1.27 2.43-.46.76c-1-7.83-10-82.86-7-102.41-3.25 11.75-10.67 48.24 3.05 102.61 0 0-3.38 11.54-13.25 28-2.77 4.38-5.8 9-9 13.57q-3.35 4.64-7.32 9.52s-5.12-42.69-12.84-63.84c0 0-6.81-43.18-1-65 0 0-15.71 54.52 8.12 131.49 0 0-29.6 34.34-43.21 37.46 0 0 10.39-14.29.45-71.08-.01-.02 4.06-69.72 8.18-80.58zm61 81.28l-1.91 3.12c2.16-4.3 2.54-4.69 1.95-3.12z"/>
    </g>

    <path class="cls-28" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M603.93 1791.05a4441.4 4441.4 0 00-20.7-706.73 4433.149 4433.149 0 00-58.82-382.17">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1.5s"
            fill = freeze
            id = "tallo2"
        />
    </path>

    <g>
        <animateMotion
           dur="3s"
           begin="tallo2.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M70 1050a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17"
        />
        <g class="flor flor2">
            <path class="cls-9" d="M470.37 478.47c69.12-10.56 74.56-170.84 40.87-263.8-11.23-31-28.9-65.65-44.67-81.23-19.79-19.55-17.64 10.5-20.81 27.19-3.87 20.42 1.77 43.08 11.55 83.74 23.88 99.23-61.66 245.51 13.06 234.1"/>
            <path class="cls-10" d="M514.28 428.2c-58.75 38.17-164.23-67.14-197.66-152.4-11.14-28.42-10.92-55.84-16.95-75.28-4.49-14.47 15.68-13.49 28.62-4.23 15.84 11.33 42.19 32.59 64.2 50.63 73.58 60.25 185.29 140 121.79 181.28"/>
            <path class="cls-9" d="M437.93 499.92c-63.71 29.13-152.59-90.53-173.14-179.77-6.85-29.75-2.61-56.84-5.72-76.95-2.32-15 17.49-11 28.94 0 14 13.54 36.94 38.44 56.07 59.5C408 373.12 506.8 468.42 437.93 499.92M536.16 452.51c77.94-10.43 84.48-162.65 46.75-250.73C570.33 172.43 554.32 158 544.4 139c-7.39-14.15-26-18.51-29.58-2.64-4.42 19.41-12.51 65.87-16.91 94.61-14.7 96-46 232.84 38.25 221.58"/>
            <path class="cls-9" d="M450.1 447.1c74.09-26.32 49-176.6-6.14-255-18.38-26.12-37-37-50.67-53.5-10.16-12.31-29.23-12.73-29.48 3.54-.31 19.9 1.38 67 3 96.06 5.48 97 3.17 237.32 83.26 208.87M552.35 477.93c78.47 5 114.67-143 94.9-236.73-6.59-31.25-19.46-48.57-25.47-69.15-4.48-15.32-21.84-23.23-28.49-8.38-8.13 18.18-25.16 62.16-35.09 89.48-33.21 91.3-90.67 219.34-5.85 224.78"/>
            <path d="M413.52 425.4c-153 32.68-91.45-83.91-49.93-158.26 13.84-24.78 47.18-48.6 59.56-65.53 9.2-12.61 35.54-18 48-9.88 15.26 10 54 17.62 72.5 33.47 61.75 53 35.25 164.89-130.14 200.2" fill="#203e31"/>
            <path class="cls-9" d="M489.44 593.93C432.73 634.76 301.61 511.05 251.33 413c-16.76-32.67-21.14-63.74-30.89-86-7.26-16.58 2.7-23.34 18.17-12.31 18.94 13.5 48.55 44.22 74 83.56 62.13 96 238.13 151.51 176.82 195.66"/>
            <path class="cls-12" d="M486.27 555.48c-69.51 37.09-166.37-80.06-188.72-172-7.45-30.65-3.16-51.47-6.54-72.35-2.51-15.54 9.93-29.81 22.4-19.31 15.27 12.85 49.78 45.06 70.63 65.34 69.69 67.75 177.37 158.24 102.23 198.33"/>
            <path class="cls-9" d="M467.32 532c62.51 31.69 170.84-112.77 204-218.64 11.05-35.29 10.2-67 16.09-90.8 4.38-17.71-6.54-22.86-19.91-9.38-16.37 16.5-40.38 51.9-58.87 95.24-45.14 105.8-208.9 189.35-141.31 223.58"/>
            <path class="cls-9" d="M537.62 609.12c70-3.9 91-183.3 66.49-291.59-8.18-36.1-24.84-63.14-31.71-86.69-5.12-17.54-17.14-16.53-21.93 1.85-5.86 22.49-17.68 76.59-24.45 110.12-22.63 112-64 270.52 11.6 266.31"/>
            <path class="cls-9" d="M532.78 567.32c-69.74 7-116-137.8-107-230.63 3-30.95 15.63-55.66 19.08-76.08 2.58-15.2 20.12-4.85 27.46 9.6 9 17.68 22.81 49.28 34.25 75.93 38.24 89 101.62 213.63 26.24 221.18"/>
            <path class="cls-13" d="M474.57 618.43c-53.35 45.51-180.32-52.83-229.86-137.73-16.51-28.3-21.2-56.72-30.86-76.24-7.2-14.53 2.19-22.14 17.11-13.86 18.26 10.12 47 34.93 71.9 68.32 60.78 81.48 229.38 110.32 171.71 159.51"/>
            <path class="cls-14" d="M565 594.82c65.74 23.73 147.41-114.27 162.43-211.9 5-32.54 6.13-71.38-.24-92.58-8-26.59-20.52.79-31.31 13.92-13.2 16.07-19.11 38.64-30 79-26.69 98.41-171.97 185.9-100.88 211.56"/>
            <path class="cls-14" d="M507.81 687.59c-69.26 12.65-137.36-154.72-142.14-264.48-1.6-36.59 7.49-66.47 7.94-90.7.34-18.05 12.33-19.89 21.87-3.36 11.68 20.23 37.55 69.42 53 100 51.77 102.3 134.16 244.82 59.29 258.51"/>
            <path class="cls-12" d="M523.43 661.9c-62.78 31.86-175.74-109.17-211.61-213-11.95-34.62-11.75-65.84-18.22-89.2-4.82-17.4 6.15-22.58 20-9.45 16.95 16.06 55.76 55.84 79.33 80.77 78.78 83.31 198.36 196.45 130.49 230.9"/>
            <path class="cls-14" d="M494.2 652.23C425.35 639.41 478.72 478 513.66 376c11.65-34 30.8-58.08 39.92-80.07 6.78-16.37 18.58-13.83 21.51 4.63 3.58 22.6 17.07 51.48 20.48 84.91 11.37 111.7-26.94 280.62-101.37 266.76"/>
            <path class="cls-12" d="M543.21 624.41C479.13 596.17 568 451.24 625.39 360c19.12-30.43 43.28-49.5 57.19-68.81 10.35-14.38 21.25-9.21 19.88 9.43-1.69 22.81 4.83 54 .49 87.34-14.5 111.34-90.45 267-159.74 236.48"/>
            <path class="cls-10" d="M515.1 685.36c-66.65-19.07-68.75-166.51-70.31-275.94 0 0-.33-23 23.1-97.21 1.25-3.94 4.09-12.55 9-13.08 5.49-.6 10.72 9.07 13.1 13.56 24.49 46.29 36.73 69.43 39.16 79.06 33.42 132.79 66.92 265.88 19.28 291.64-13.89 7.53-29.51 3.06-33.33 1.97z"/>
            <path class="cls-14" d="M499.27 671.29c-46.29 49.35-134.73 4.21-164.33-50-9.87-18.07-10.53-39.24-16-52.14-4.07-9.61 4-18 14.77-15.25 13.14 3.32 32.88 15.55 48.75 35.49 38.71 48.67 166.84 28.56 116.8 81.91"/>
            <path class="cls-13" d="M555.86 681.4C496 716.74 409 628.83 387.54 555.8c-7.16-24.34-3.74-48.22-7.14-64.93-2.52-12.44 7.89-18.32 19-10.72 13.59 9.29 44.38 32.87 63 47.78 62.24 49.82 158.12 115.26 93.45 153.47"/>
            <path class="cls-14" d="M544.47 696.64c-69.13 1.85-39.84-99.29-20.14-163.35 6.57-21.35 21.88-37.95 27.68-52 4.31-10.44 16.21-10.56 21.69-.21 6.7 12.66 24 27.65 32 46.63 27 63.46 13.46 166.91-61.28 168.91"/>
            <path class="cls-12" d="M542.11 678.31c60.65 32.17 140.61-60.63 157.3-135 5.57-24.79.8-48.52 3.13-65.45 1.74-12.6-8.8-17.93-19.22-9.72-12.75 10.06-41.5 35.35-58.85 51.3-58 53.29-147.92 124.06-82.36 158.83"/>
            <path class="cls-15" d="M635 652.9q-24.76 28.51-49.68 56.87-16.45 18.72-33 37.37L546 745.7l-10.33-1.55-10.6 3.53-5.43-1.8-1.36 4.81q-24.33-13.53-49.36-28.31-33.9-20.05-65.16-40.17l34.18 7.22 17.25-6.51 25 5.52 18.52-11.75 25 5.52 32.39-13.73 29.27 6.93z"/>

            <g class="florcerrada" style="transform: scale(1.15) scaleY(0.85) rotate(2deg) translate(-110px, 15px);">
                <path class="cls-21 hilera hilera1" d="M521.94,446.72c-86.64-3-109.86-204.39-77.71-326.75,10.71-40.79,29-87.18,46.93-109.22,22.48-27.64,22.91,10.61,28.55,31.2C526.6,67.14,522,96.57,514,149.35c-19.35,128.8,101.57,300.56,7.92,297.37"/>
                <path class="cls-21 hilera hilera1" d="M559,404.11c85.13-21.46,85.51-210.78,40.13-315.77-15.13-35-39.37-58.57-51.12-81-8.75-16.72-25.63,2.86-28.89,22.92-4,24.54-8.5,67.45-12,103.54C495.19,254.36,466.93,427.3,559,404.11"/>
                <path class="cls-21 hilera hilera1" d="M695.18,411.32c78.2-41.84,33.52-223.93-35.87-313.55C636.17,67.9,606.84,51.27,590,32.61c-12.53-13.9-24.4,9.13-22.81,29.23,1.94,24.57,7.73,66.95,12.85,102.53,17.1,118.88,30.6,292.17,115.14,247"/>
                <path class="cls-21 hilera hilera1" d="M402.57,448.49c-95-19.75-83.91-213.32-26.19-321.84,19.23-36.17,40.84-53.17,55.49-76.43,10.91-17.32,34.4-21.29,36.87-.87,3,25,7.17,84.57,9,121.39,6.08,123,27.53,299.11-75.15,277.75"/>
                <path class="cls-21 hilera hilera1" d="M387,502.39C290.28,492,283.45,298.85,331.07,185.6c15.87-37.75,35.88-56.71,48.36-81.21,9.3-18.23,32.39-24.45,36.75-4.43,5.32,24.5,15,83.22,20.2,119.57C453.81,341,491.51,513.64,387,502.39"/>
                <path class="cls-21 hilera hilera1" d="M744.53,472c73.21-50.15-6-261.87-93.94-365.26C621.28,72.27,588,53.37,567.17,31.88c-15.47-16-27.86-7-22.58,16.42C551.05,77,572.1,126,604.93,173.82,685,290.55,665.39,526.21,744.53,472"/>
                <path class="cls-21 hilera hilera1" d="M654.44,438.34c85.24-49.56,32.79-235.73-45.17-323.73-26-29.33-50-39.12-68.91-57.27-14-13.5-37-9.92-34.94,10.88C508,93.66,517,153.38,523.3,190c21,122.47,39,301.87,131.14,248.3"/>
                <path class="cls-21 hilera hilera1" d="M359.37,531.17c-82-27.15-38.34-252,32.44-375.85,23.59-41.27,53.83-68.8,71.05-95.25,12.82-19.68,26.78-14.6,25.45,9.28-1.63,29.22-14.46,82.08-39.3,137.14-60.62,134.33-1,354-89.64,324.68"/>
                <path class="cls-21 hilera hilera1" d="M466.1,603.35c-86.58.42-115.73-226.14-87.27-365.76,9.49-46.54,29.63-82.21,37.71-112.7,6-22.7,20.91-22.33,27.15.68,7.63,28.16,23.18,96.05,32.14,138.17C505.76,404.5,559.7,602.9,466.1,603.35"/>
                <path class="cls-21 hilera hilera1" d="M547.89,471.18c83.28-28.65,69.93-221,17.07-324-17.62-34.34-43.48-56.33-56.82-78.2-9.93-16.27-25.33,5-27.13,25.61-2.19,25.25-3.58,69.2-4.49,106.14-3,123.45-18.67,301.39,71.37,270.41"/>
                
                <path class="cls-21 hilera hilera2" d="M722.92,558.59c86.31-22,73.22-224.51,18.92-337.31-18.1-37.6-44.8-63.08-58.51-87.24-10.22-18-25-13.82-26.91,7.6-2.37,26.2,3.29,73.87,20.76,123.84,42.64,121.92-47.57,316.91,45.74,293.11"/>
                <path class="cls-21 hilera hilera2" d="M450.39,650.71C362,661.63,295.66,469,302.18,344.63c2.17-41.45,10.82-89.58,24.28-113.91,16.88-30.52,25.46,6.69,35.55,25.86,12.34,23.44,13.88,52.87,17.08,105.58,7.82,128.6,166.81,276.74,71.3,288.55"/>
                <path class="cls-21 hilera hilera2" d="M634.63,659.24c86-24.49,64.89-251.94,5.86-378.77-19.69-42.28-47.53-71-62.28-98.13-11-20.22-25.66-15.59-26.77,8.45-1.36,29.42-1.8,99.55-1.39,142.85,1.38,144.72-8.35,352.07,84.58,325.6"/>
                <path class="cls-21 hilera hilera2" d="M687.92,654.49c87.69-18,83.78-246.13,34.39-376.78-16.47-43.55-42.11-74.18-54.79-102.32-9.44-20.94-24.45-17.41-27.37,6.46-3.58,29.2-9.3,99-12.15,142.16-9.54,144.22-34.88,350,59.92,330.48"/>
                <path class="cls-21 hilera hilera2" d="M561.19,644.45c85-26.08-10-220.73-71.56-343.5-20.51-40.93-48.84-68.35-64.11-94.6-11.37-19.53-25.87-14.64-26.44,8.94-.7,28.85-12.87,67-11.5,109.44,4.59,141.7,81.76,347.92,173.61,319.72"/>
                <path class="cls-21 hilera hilera2" d="M486.1,623.56c16.61-18,28.46-46.91-33.3-293.31C447.09,307.47,435,261.37,399.34,215c-5.19-6.76-9.78-12.07-12.83-15.49a182,182,0,0,0-15.13,17.69S341.52,256.94,333,320c-7.22,53.32,17.92,180.58,94.14,333.2C460.11,646.91,477.1,633.28,486.1,623.56Z"/>
                <path class="cls-21 hilera hilera2" d="M608.5,662.35C676.89,608,604.43,435,550.66,306.55c0,0-11.31-27-76.47-102.3-3.46-4-11.16-12.67-17.22-10.92-6.73,1.94-8,15.74-8.45,22.12-5.17,65.8-7.76,98.7-5.71,111.1,28.32,171,56.7,342.44,125.6,349.57C588.55,678.2,604.58,665.47,608.5,662.35Z"/>
                
                <path class="cls-21 hilera hilera3" d="M610.86,637.9C704.94,663.23,779,541,774.14,452.15c-1.62-29.61-16.85-56-19.94-76-2.3-14.84-18.56-18.94-29.64-7.47-13.57,14-28.47,43.95-32.77,80.39C681.28,538,509.17,610.52,610.86,637.9"/>
                <path class="cls-21 hilera hilera3" d="M590.3,672C689.79,661.52,715,485.21,677.14,382.34c-12.61-34.29-37.06-59-47.47-81.19-7.75-16.55-24.84-14.42-31.16,3.9-7.73,22.41-23.11,76.09-31.85,109.31-29.22,111-83.91,268.95,23.64,257.63"/>
                <path class="cls-21 hilera hilera3" d="M572.05,678.62c92.71-36.34-2.89-154-64.95-227.9-20.69-24.62-50.3-38.05-65.86-53.4-11.57-11.42-27.42-4.9-28.88,11.89-1.79,20.56-16.3,50.12-16.34,79.83-.14,99.26,75.81,228.86,176,189.58"/>
                <path class="cls-21 hilera hilera3" d="M521.83,680.14C441.91,716.59,346.89,592,331.26,495.75c-5.21-32.08,2.69-62,1-83.82C331,395.7,344.88,389.7,357.56,401c15.52,13.81,50.29,48.31,71.23,70,70,72.5,179.43,169.76,93,209.15"/>
                <path class="cls-21 hilera hilera3" d="M437.33,666.66q9.14,6.17,18.78,12.18a607.26,607.26,0,0,0,143.48,65l10.8-7.19,16.05-1.27,12.22-10.61c35.37-25.65,56.46-50.86,69-68.92,10.06-14.43,27.94-43.35,27.9-43.37l-.27.4-26-3.62-26.53,1.05-30.1,21.35-31.15-5.17-30.1,21.35-50.64,0-34.93,25.61Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor1">
    <g class="hoja hoja1">
        <path class="cls-5" d="M498.59 1372.38s-121.35-8.28-137.28-156.73l-7.94-98.06s20.11 44.21 66.17 53.8c0 0 98 46.91 102.1 128.67 0 0 10.38 32 4.14 50s-19.61 27.8-27.19 22.32z"/>
        <path class="cls-4" d="M499.56 1303.31c-1.85 42.8 7.87 55 7.87 55-11.09-4-38.12-34-38.12-34 10.7-56.82-7.48-100.82-7.48-100.82 6.89 17.56 6.06 50.19 6.06 50.19-3.86 15.48-3.39 47.92-3.39 47.92q-3.67-4.23-6.8-8.21c-3-3.9-5.87-7.83-8.52-11.54-9.54-13.87-13.44-23.19-13.44-23.19 5.1-40.49-4.62-69.59-8.44-79.06 4.43 15.48 5.23 72.5 5.3 78.45l-.44-.64-1.27-2 .36.66c-1.22-1.87-2.61-4.15-4.15-6.75l3.79 6.09-28.75-53.41c8.47-27-7.73-48.65-7.73-48.65 11.2 22.58 7.53 41.55 6.15 46.82-4.95-9.57-9.89-19.27-14.46-28.31a24.73 24.73 0 01-.26-2.65c-.32-8.4-2.4-18.43-3.57-24.35.3 6.2.27 16.29.25 19.9-10.32-20.51-18-36.1-18-36.1l19.31 45.06-18.09-16.88c17.52 24.3 18.77 20.69 18.77 20.69a174.26 174.26 0 0023.61 42.72c-8.82-1.88-33.13-32.51-33.13-32.51-1.37 8.26 34.82 42 34.82 42a185 185 0 0019.67 31.07c-9.28.88-51.13-38.17-51.13-38.17 9.15 19.67 54.41 46 54.41 46l22 28.52c-18.9-.15-56-28.41-56-28.41 14.81 25 58.95 34.33 58.95 34.33 12 14.37 29 30.2 29 30.2-33.84-4.55-73.21-34.92-73.21-34.92 47.62 39.67 74.68 37.88 74.68 37.88 71.17 39.38 87.25 28.94 87.25 28.94s-22.73-8-42.63-15.15c-4-1.9-9-4.2-15.08-6.9-19.46-8.62-14.44-54.82-14.44-54.82-3.8-48.08-18.72-68.36-18.72-68.36 4.44 8.95 15 63.36 15 63.36zm-52.81-4.81l-1.84-2.63c-.61-1.28-.29-.94 1.84 2.63z"/>
    </g>

    <path class="cls-28" style="stroke-linecap: round; stroke-dasharray: 720; stroke-dashoffset:720;" d="M603.93 1769.05a879.09 879.09 0 004.73-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95">
        <animate
            attributeName = "stroke-dashoffset"
            from = "720"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id="tallo1"
        />
    </path>

    <g>
        <animateMotion
           dur="3s"
           begin="tallo1.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M200 630a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95"
        />
        <g class="flor flor1">
            <path class="cls-18" d="M277.26 1041.56c-39.6 23.86-108.53-59.47-129.72-123.54-7.07-21.35-12.37-47.42-10.76-62.48 2-18.89 13.33-1.91 21.84 5.65 10.4 9.26 16.87 23.78 28.67 49.69 28.78 63.22 132.78 104.88 90 130.68"/>
            <path class="cls-18" d="M281.44 1011.75c31.83-34.34-23-119.12-73.84-152.88-16.94-11.25-34.63-14.75-46.41-21.38-8.77-4.94-10.63 8.73-6.26 18.64 5.35 12.14 15.8 32.64 24.71 49.81 29.75 57.37 67.38 142.93 101.8 105.81"/>
            <path class="cls-18" d="M344.45 975.37c22.81-41.43-50.09-109.88-107.18-129.79-19-6.63-37-5.54-49.93-9-9.65-2.56-8.26 11.18-1.71 19.71 8 10.43 22.92 27.69 35.55 42.12 42.2 48.19 98.61 121.76 123.27 77M224.4 1077.05c-48.22 18.77-99.53-71-105.26-136.31-1.91-21.77 2.81-35.66 2.6-50.32-.16-10.91 9.19-19.52 16.23-11.1 8.62 10.29 27.79 35.74 39.31 51.67 38.46 53.24 99.24 125.76 47.12 146.06"/>
            <path class="cls-18" d="M233.09 1105.68c-46.27 23.45-105.46-60.93-117.08-125.41-3.87-21.5-.44-35.79-2-50.38-1.14-10.86 7.38-20.35 15.15-12.66 9.5 9.41 30.89 32.86 43.79 47.6 43.1 49.25 110.14 115.5 60.12 140.85"/>
            <path class="cls-9" d="M384.15 988.16c18.17-43.7-78.78-115.37-148.17-136-23.13-6.89-43.52-5.66-59.06-9.22-11.57-2.66-14.5 5-5.33 13.9 11.22 10.94 34.89 26.75 63.47 38.6 69.74 28.92 129.46 140 149.09 92.76"/>
            <path class="cls-9" d="M334.08 999.3c23.72-46.94-53.85-114.95-114.29-131.64-20.15-5.56-33.75-2.95-47.46-5.58-10.2-2-19.45 6.32-12.47 15 8.55 10.63 29.94 34.72 43.41 49.29 45 48.67 105.17 123.66 130.81 72.92M229.11 1126.58c-44.55 11.68-90.4-101.57-94.74-177.51-1.44-25.31 4.08-46.42 4.09-63.25 0-12.53 7.73-14.31 14.08-3.24 7.76 13.54 17.39 40.9 22.28 72.75 11.94 77.67 102.45 158.67 54.29 171.25"/>
            <path class="cls-9" d="M297.82 1127.84c-38.6 25.35-117.48-67.49-145.34-138.21-9.28-23.57-10.64-45.37-15.89-61.36-3.9-11.9 2.86-16.06 12.33-7.59 11.6 10.38 38.29 36.22 54.54 52.46 54.3 54.24 136.08 127.29 94.36 154.7"/>
            <path class="cls-13" d="M296 1045c28.92-37-33-119.15-86.53-149.84-17.86-10.24-35.82-12.55-48.14-18.45-9.17-4.4-9.88 9.58-4.69 19.33 6.36 11.93 18.52 32 28.85 48.77C220 1000.87 264.72 1085 296 1045"/>
            <path class="cls-19" d="M399.66 1033.17c32.2-34.93-32.51-121.68-89.58-156.34-19-11.56-38.37-15.19-51.52-22-9.8-5.07-15.19 1.08-9.83 11.22 6.56 12.41 23 32.08 45.28 49.35 54.51 42.13 70.84 155.55 105.65 117.78M304.56 1153.58c-36.34 30.57-122-36.28-155.25-93.8-11.08-19.17-21.19-43.21-22.24-58-1.33-18.55 13.32-4.41 23.4 1.23 12.34 6.9 21.58 19.61 38.34 42.25 40.87 55.24 155 75.28 115.75 108.32"/>
            <path class="cls-19" d="M389.43 1103.85c31.33-35.94-44.21-131.53-107.47-171.09-21.09-13.19-41.88-17.93-56.37-25.79-10.79-5.85-16 .49-9.52 11.57 7.94 13.55 28.13 45 40.9 64.28 42.68 64.32 98.6 159.88 132.46 121"/>
            <path d="M411.88 1086.23c34-33.56-34.07-134.42-94.13-178.49-20-14.69-40.4-20.93-54.24-29.83-10.31-6.62-16-.68-10.37 10.84 6.89 14.1 24.62 47 35.89 67.11 37.65 67.26 86.13 166.66 122.85 130.37" stroke="#fff" stroke-width="2" stroke-miterlimit="10" fill="#e85d04"/>
            <path class="cls-19" d="M352.29 1118.58c30.41-36.36-68.63-95.8-131.84-132.82-21.07-12.34-41.71-16.37-56.17-23.67-10.76-5.43-15.82 1-9.23 11.69 8.08 13.1 13.73 33.71 26.67 52.28 43.24 62 137.69 131.83 170.57 92.52"/>
            <path class="cls-19" d="M312.64 1131.06c2.21-12.86-.91-29.25-100.15-121.49-9.17-8.53-28-25.64-57.41-36-4.29-1.51-7.88-2.56-10.24-3.2a96.9 96.9 0 00-1.63 12.31s-1.79 26.47 12.71 57.14c12.27 26 60.5 75.55 139 121.65 12.88-12.41 16.52-23.47 17.72-30.41z"/>
            <path class="cls-19" d="M378.65 1112.84c14.8-44.18-67.91-100.51-129.28-142.31 0 0-12.91-8.79-63.93-23.52-2.71-.79-8.68-2.43-10.88.12-2.45 2.82 1 9.35 2.65 12.35 16.81 30.93 25.22 46.39 29.74 51.34 62.38 68.26 124.89 136.66 157.77 119.82 9.61-4.92 13.08-15.27 13.93-17.8z"/>
            <path class="cls-19" d="M372.6 1101.21c49.43-16 47-92.22 19-130.52-9.33-12.77-23.82-20.16-31-28.18-5.35-6-13.81-3.08-15.43 5.28-2 10.22 0 27.92 8.71 45.47 21.14 42.83-34.76 125.27 18.68 108"/>
            <path class="cls-19" d="M373.32 1122.43c41.44-33.6 1.45-119.76-45.36-154.77-15.61-11.67-33.71-15.59-44.83-22.51-8.28-5.15-15.3.77-12.8 10.8 3.06 12.27 11.78 40.75 17.53 58.14 19.2 58.14 40.65 144.67 85.46 108.34"/>
            <path class="cls-19" d="M367.08 1130.7c30.89-43.2-46.06-68-95.29-83-16.41-5-33.55-2.39-45-4.73-8.5-1.75-13.69 5.77-9.46 13.71 5.17 9.71 7.28 27.15 15.89 40.45 28.79 44.43 100.43 80.31 133.83 33.61"/>
            <path class="cls-10" d="M345.06 1146c-25.14 39.53-103.86 11.41-138.82-27.07-11.65-12.83-16.82-28.52-23.91-37.78-5.28-6.89-.82-13.6 8.13-12.24 10.95 1.67 36.53 7 52.21 10.6 52.35 12.09 129.58 23.76 102.39 66.49"/>
            <path d="M303.35 1164.51q5.88.1 11.94 0a323.77 323.77 0 0083.07-12.63l2.74-6.35 6.81-5.23c.79-2.77 1.58-5.53 2.38-8.3 8.36-21.75 10.46-39.15 10.84-50.88.3-9.38-.11-27.51-.13-27.51a1.37 1.37 0 000 .26l-12.7 6-11.56 8.13-7.26 18.29-15.43 6.71-7.26 18.3-22.65 14.7q-4.09 10.8-8.18 21.61z" fill="#bfa09d"/>
            <g class="florcerrada" style="transform: scale(0.56);transform-origin: 240px 1120px;">
                <path class="cls-27 hilera hilera1" d="M300.25,984.29C227.69,1028,101.4,875.33,62.57,758c-12.94-39.12-22.65-86.88-19.7-114.47,3.7-34.62,24.42-3.51,40,10.35,19.06,17,30.92,43.56,52.54,91C188.14,860.69,378.68,937,300.25,984.29"/>
                <path class="cls-27 hilera hilera1" d="M307.89,929.67c58.33-62.92-42.18-218.24-135.27-280.1-31-20.61-63.45-27-85-39.17-16.07-9-19.47,16-11.46,34.16,9.8,22.23,28.95,59.8,45.26,91.25C175.9,840.93,244.84,997.68,307.89,929.67"/>
                <path class="cls-27 hilera hilera1" d="M423.34,863c41.8-75.92-91.78-201.32-196.36-237.8-34.87-12.16-67.75-10.16-91.49-16.48-17.67-4.71-15.12,20.47-3.13,36.09C147,664,174.35,695.59,197.49,722c77.32,88.3,180.67,223.09,225.85,141"/>
                <path class="cls-27 hilera hilera1" d="M203.39,1049.31C115.05,1083.71,21,919.21,10.54,799.56c-3.5-39.88,5.15-65.31,4.76-92.18-.28-20,16.85-35.76,29.75-20.34,15.78,18.86,50.91,65.48,72,94.67,70.49,97.55,181.84,230.42,86.34,267.6"/>
                <path class="cls-27 hilera hilera1" d="M219.32,1101.77C134.54,1144.74,26.1,990.14,4.81,872c-7.1-39.38-.8-65.57-3.62-92.29-2.09-19.89,13.52-37.29,27.75-23.2,17.41,17.24,56.59,60.21,80.22,87.21,79,90.23,201.8,211.61,110.16,258.06"/>
                <path class="cls-27 hilera hilera1" d="M496.09,886.46c33.27-80.08-144.35-211.38-271.48-249.25-42.37-12.62-79.73-10.36-108.21-16.9-21.19-4.87-26.55,9.1-9.76,25.48,20.55,20,63.91,49,116.28,70.71,127.78,53,237.19,256.53,273.17,170"/>
                <path class="cls-27 hilera hilera1" d="M404.35,906.87c43.46-86-98.66-210.61-209.4-241.19-36.91-10.2-61.84-5.41-87-10.23C89.3,651.86,72.35,667,85.16,683c15.66,19.48,54.85,63.61,79.51,90.3,82.41,89.17,192.7,226.58,239.68,133.61"/>
                <path class="cls-27 hilera hilera1" d="M212,1140.06C130.4,1161.46,46.39,954,38.45,814.84,35.8,768.46,45.92,729.79,46,699c0-23,14.16-26.22,25.79-5.94C86,717.82,103.6,768,112.56,826.3c21.87,142.34,187.7,290.61,99.46,313.76"/>
                <path class="cls-27 hilera hilera1" d="M337.91,1142.36c-70.72,46.45-215.25-123.65-266.28-253.21C54.62,846,52.13,806,42.51,776.73c-7.15-21.81,5.24-29.43,22.6-13.9,21.25,19,70.15,66.35,99.92,96.1,99.48,99.39,249.33,233.22,172.88,283.43"/>
                <path class="cls-27 hilera hilera1" d="M334.54,990.52C387.52,922.69,274.15,772.21,176,716c-32.72-18.75-65.63-23-88.2-33.81-16.8-8-18.11,17.56-8.59,35.42,11.65,21.86,33.92,58.61,52.84,89.36,63.24,102.78,145.2,256.88,202.48,183.56"/>
                
                <path class="cls-27 hilera hilera2" d="M524.49,968.93c59-64-59.55-222.95-164.12-286.45-34.85-21.17-70.29-27.84-94.4-40.32-17.94-9.29-27.82,2-18,20.56,12,22.72,42,58.77,83,90.4,99.87,77.19,129.79,285,193.56,215.81"/>
                <path class="cls-27 hilera hilera2" d="M350.25,1189.53c-66.57,56-223.53-66.47-284.43-171.85C45.53,982.55,27,938.51,25.06,911.41c-2.42-34,24.42-8.07,42.89,2.26,22.6,12.64,39.54,35.93,70.23,77.41,74.89,101.2,284.05,137.91,212.07,198.45"/>
                <path class="cls-27 hilera hilera2" d="M505.76,1098.41c57.4-65.85-81-241-196.91-313.46-38.64-24.16-76.74-32.85-103.28-47.25-19.77-10.72-29.33.9-17.44,21.19,14.56,24.83,51.54,82.52,74.94,117.78,78.19,117.84,180.64,292.92,242.69,221.74"/>
                <path class="cls-27 hilera hilera2" d="M546.89,1066.14c62.24-61.49-62.42-246.28-172.47-327-36.69-26.91-74-38.35-99.38-54.65-18.88-12.13-29.3-1.25-19,19.86,12.62,25.83,45.1,86.07,65.75,122.95,69,123.24,157.82,305.35,225.09,238.87"/>
                <path class="cls-27 hilera hilera2" d="M437.71,1125.4C493.43,1058.79,312,949.88,196.15,882.06c-38.6-22.61-76.41-30-102.9-43.36-19.72-10-29,1.78-16.91,21.4,14.79,24,25.16,61.77,48.86,95.79,79.22,113.66,252.27,241.53,312.51,169.51"/>
                <path class="cls-27 hilera hilera2" d="M365.05,1148.27c4.05-23.56-1.65-53.59-183.47-222.58-16.82-15.63-51.24-47-105.19-66-7.86-2.77-14.45-4.69-18.77-5.87a177.45,177.45,0,0,0-3,22.56s-3.28,48.5,23.29,104.69c22.48,47.53,110.85,138.41,254.57,222.87C356.2,1181.24,362.86,1161,365.05,1148.27Z"/>
                <path class="cls-27 hilera hilera2" d="M486,1114.88C513.11,1034,361.59,930.74,249.14,854.15c0,0-23.65-16.11-117.13-43.1-5-1.43-15.9-4.44-19.93.23-4.48,5.17,1.87,17.13,4.85,22.62,30.81,56.67,46.21,85,54.49,94.07C285.71,1053,400.24,1178.36,460.49,1147.5,478.1,1138.49,484.45,1119.52,486,1114.88Z"/>
                
                <path class="cls-27 hilera hilera3" d="M474.92,1093.58c90.57-29.34,86.13-169,34.86-239.14C492.69,831,466.15,817.51,453,802.82c-9.79-10.94-25.3-5.64-28.27,9.66-3.64,18.73.08,51.17,16,83.33,38.74,78.45-63.68,229.49,34.23,197.77"/>
                <path class="cls-27 hilera hilera3" d="M476.23,1132.46c75.94-61.56,2.67-219.42-83.1-283.57-28.59-21.37-61.76-28.57-82.13-41.24-15.16-9.43-28,1.41-23.46,19.79,5.6,22.48,21.59,74.65,32.12,106.53,35.18,106.51,74.47,265,156.57,198.49"/>
                <path class="cls-27 hilera hilera3" d="M464.8,1147.61c56.61-79.14-84.38-124.65-174.57-152.14-30.07-9.16-61.49-4.39-82.4-8.68-15.57-3.19-25.08,10.58-17.34,25.13,9.49,17.79,13.34,49.74,29.12,74.1,52.75,81.41,184,147.15,245.19,61.59"/>
                <path class="cls-27 hilera hilera3" d="M424.46,1175.61c-46.07,72.42-190.29,20.9-254.34-49.6-21.35-23.51-30.82-52.26-43.81-69.22-9.67-12.62-1.5-24.93,14.91-22.43,20.06,3.05,66.93,12.8,95.64,19.43,95.92,22.14,237.41,43.53,187.6,121.82"/>
                <path class="cls-27 hilera hilera3" d="M348.05,1209.55q10.77.2,21.88,0a593.62,593.62,0,0,0,152.18-23.14l5-11.64,12.48-9.58q2.17-7.61,4.36-15.21c15.32-39.85,19.17-71.73,19.86-93.23.55-17.18-.2-50.4-.24-50.4a4.65,4.65,0,0,0,0,.48l-23.26,10.9-21.18,15-13.29,33.52-28.28,12.35-13.29,33.53-41.51,26.94q-7.49,19.8-15,39.59Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor3">
    <path class="cls-28" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M604.93 1813.05c7.78-176 2.15-311.79-4.78-405.11-1.86-24.92-8.73-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.66-48.14 48.38-134.08 151.74-219.87">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id = "tallo3"
        />
    </path>        

    <g>
        <animateMotion
           dur="3s"
           begin="tallo3.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M-160 1050c7.78-176 2.15-311.79-4.78-405.11-1.86-24.92-8.73-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.66-48.14 48.38-134.08 151.74-219.87"
        />
        <g class="flor flor3">
            <path class="cls-16" d="M937.15 611.59c-37.61-49.8 58.73-155.64 138.17-194.07 26.48-12.82 59.36-24 79.15-24.11 24.82-.17 4.73 17.7-3.64 30.34-10.24 15.47-28 26.43-59.54 46.33-77.06 48.56-113.49 195.34-154.14 141.51"/>
            <path class="cls-16" d="M953.45 595.11c40.08 48 157.72-14.14 208.62-78.08 17-21.31 24-44.75 34.23-59.75 7.63-11.16-9.83-15.63-23.31-11.13-16.48 5.5-44.54 16.72-68 26.32-78.58 32.06-194.81 70.77-151.49 122.64"/>
            <path class="cls-16" d="M965 637.88c40.08 48 157.71-14.14 208.62-78.08 17-21.31 24-44.76 34.23-59.75 7.63-11.17-9.83-15.63-23.31-11.13-16.48 5.5-44.54 16.72-68 26.32C1037.94 547.3 921.71 586 965 637.88M907.09 555.63c-43.17-55.33 47.73-156.45 126.8-189 26.35-10.86 45.6-10.08 63.79-16 13.55-4.41 28.11 4.41 20.5 16.78-9.31 15.14-33.16 49.81-48.31 70.88-50.62 70.4-116.12 177.16-162.78 117.36"/>
            <path class="cls-16" d="M863.47 551.37c-43.17-55.32 47.73-156.44 126.8-189 26.36-10.86 45.6-10.08 63.79-16 13.55-4.41 28.11 4.41 20.5 16.78-9.3 15.14-33.16 49.81-48.31 70.88-50.61 70.4-116.12 177.16-162.78 117.35"/>
            <path d="M1012.48 613.6c85.59 110.3 110.67-4.65 125.11-79.27 4.82-24.86-4.23-60.3-2.93-79 1-13.9-13.88-32.75-27.08-34.36-16.15-2-47-19.05-68.72-18.87-72.6.61-118.91 92.23-26.38 211.47" fill="#e6bdb8"/>
            <path class="cls-9" d="M891.83 687.17c29.92 54.73 183.14 5.67 261.38-53.86 26.08-19.83 41.58-43.15 58-57.33 12.23-10.55 6.81-19.83-9.89-16.92-20.44 3.57-56.12 16.89-91.77 38.75-87 53.34-250.08 30.2-217.74 89.36"/>
            <path class="cls-9" d="M902.31 673.22c45.31 53.77 164.4-11.2 213.39-80 16.33-22.93 19.67-41.6 29.4-57.79 7.23-12 1.65-28-12.17-23.42-16.91 5.59-56.18 20.84-80.18 30.73-80.2 33-199.42 72.35-150.44 130.47"/>
            <path class="cls-9" d="M873.3 646.35c-55.45-29-6.75-182.56 52.94-261.56 19.89-26.33 43.36-42.16 57.59-58.78 10.59-12.38 20-7.12 17.14 9.59-3.49 20.44-16.74 56.24-38.62 92.15-53.39 87.64-29.1 249.9-89.05 218.6"/>
            <path class="cls-9" d="M806.92 655.24C766.7 607.35 870.52 484 956 433.81c28.48-16.74 56.25-22.41 75.77-32.34 14.53-7.39 21.22 1 12.19 15.39-11.05 17.56-39 58.3-56.68 83.19-59 83.19-136.84 207-180.32 155.19"/>
            <path class="cls-9" d="M849.76 642.19c43.71 44.74 158.31-27.85 205.38-96.49 15.7-22.87 21.2-47 30.53-63 6.95-11.88-11-14.85-24.28-9.17-16.28 7-43.85 20.65-67 32.33-77.18 39-191.94 87.94-144.68 136.31"/>
            <path class="cls-14" d="M880.88 743.81c31.33 54.18 167.44 9.25 234.4-47.42C1137.6 677.5 1150 655 1164 641.44c10.38-10.08 4.75-19.27-10.27-16.75-18.37 3.07-49.93 15.39-80.83 36.06-75.4 50.45-225.83 24.5-192 83.06M782.42 613.33c-49.84-37.52 13.37-165.92 79-224.82 21.87-19.63 50.33-39.43 69.28-45 23.77-7 9.43 15.71 4.88 30.18-5.55 17.71-19.52 33.14-44.33 61-60.52 68-54.93 219.22-108.8 178.66"/>
            <path class="cls-14" d="M804 747.76c43.21 45.63 180.48-39 241.78-115.54 20.44-25.51 29.64-51.81 42.09-69.5 9.27-13.18 1.6-20.83-14-14-19.07 8.41-63.63 30.2-90.92 44.08-91.21 46.39-225.67 105.59-179 154.91"/>
            <path class="cls-14" d="M824.2 779.32c39.69 48.72 182.88-25.46 249.71-97.21 22.28-23.92 33.42-49.46 47.15-66.18 10.22-12.44 3.15-20.65-12.91-14.95-19.64 7-65.69 25.38-94 37.19-94.41 39.46-232.91 88.49-190 141.15"/>
            <path class="cls-14" d="M821.75 719.37c53.21 32.79 114.67-106 152.68-194.32 12.68-29.46 14.45-56.87 21.6-76.88 5.32-14.89-4-20.28-17-9.83-15.91 12.8-42.15 23.81-64.43 43.88-74.47 67-150.38 201.71-92.85 237.15"/>
            <path class="cls-14" d="M765.89 658.56c52.49 33.94 117-103.44 156.87-191 13.31-29.18 15.68-56.55 23.26-76.39 5.65-14.77-3.56-20.37-16.79-10.2-16.18 12.45-42.65 22.89-65.36 42.47-75.91 65.42-154.72 198.4-98 235.08"/>
            <path class="cls-14" d="M793.63 732.53c56.44 25.33 142.7-74.06 206.71-147.83 0 0 13.46-15.51 40.16-79.62 1.42-3.4 4.43-10.91 1.36-14.12-3.4-3.56-12.53 0-16.73 1.72-43.34 17.49-65 26.24-72.2 31.42C853.73 595.47 754.31 667 772 712c5.17 13.14 18.4 19.08 21.63 20.53z"/>
            <path class="cls-14" d="M800.49 733.35c12.41 59.1 100.77 65.7 148.49 38.09 15.9-9.21 26.22-25 36.38-32.35 7.55-5.43 5.26-15.57-4.19-18.48-11.57-3.55-32.28-3.39-53.63 4.46-52.1 19.16-140.47-55.61-127 8.28"/>
            <path class="cls-14" d="M775.88 731.55c33.71 52 138.22 16.46 184.45-33.32 15.41-16.59 22.18-37 31.54-49 7-8.93 1-17.78-10.9-16.13-14.56 2-48.54 8.59-69.35 13.09-69.55 15-172.19 29.12-135.74 85.38"/>
            <path class="cls-14" d="M767.09 723.33c46.11 41 84.31-44.83 107.71-99.87 7.81-18.35 6.91-38.48 11-51.39 3.06-9.6-5-16.53-14.68-12.62-11.86 4.78-32.27 5.06-48.7 13.38-54.9 27.79-105.2 106.14-55.36 150.5"/>
            <path class="cls-14" d="M767.47 701.64C711.94 675.74 735 568.89 779 517c14.66-17.29 34.14-26.65 44.94-37.42 8-8 17.5-3.37 17.25 8.47-.3 14.49-2.85 48.56-4.88 69.5-6.79 69.94-8.83 172.07-68.85 144.07"/>
            <path class="cls-15" d="M735 641.55c-1.77 21.23-3 43.68-3.31 67.25q-.32 20.85.21 40.47l5.94 6.66 7.94 4.88 5.2 8.52 7.42 2.95c.74 1.73 1.48 3.45 2.23 5.18a238.21 238.21 0 00116.09 17.17l-32.78-14.93-8-14.36-20.28-10.64q-2.94-9.35-5.89-18.67l-20.25-10.64-14.2-28-24-12.11z"/>
            <g class="florcerrada" style="transform: scale(0.75) rotate(3deg);transform-origin: 540px 900px;">
                <path class="cls-27 hilera hilera1" d="M1021.46,452.86C956.32,371.39,1122.19,192.44,1259.17,126c45.65-22.15,102.37-41.75,136.53-42.63,42.86-1.1,8.25,29.24-6.15,50.51-17.61,26-48.15,44.82-102.58,78.9C1154.14,296,1091.88,540.93,1021.46,452.86"/>
                <path class="cls-27 hilera hilera1" d="M1089.38,453.32c86.27,61,259.55-86.91,319.94-210.59,20.13-41.23,22.69-81.84,34-110.16,8.43-21.08-22.68-21.17-43.56-8.45-25.54,15.57-68.28,45-104,70.07C1176.27,277.8,996.13,387.4,1089.38,453.32"/>
                <path class="cls-27 hilera hilera1" d="M1189.46,583.43c99.46,38.7,230.85-144.71,258.4-278.3,9.18-44.53,1.41-84.34,5.27-114.35,2.88-22.33-27.45-15.14-44.57,2.05-20.94,21-55.12,59.49-83.62,92-95.23,108.72-243,256.75-135.48,298.58"/>
                <path class="cls-27 hilera hilera1" d="M926.37,345.18c-56.32-102.25,129.21-243.7,273.55-275.95,48.12-10.74,80.57-4.32,113.3-9.15,24.36-3.59,46.39,14.76,29.66,33-20.46,22.33-71.66,72.78-103.88,103.27C1131.37,298.22,987.26,455.72,926.37,345.18"/>
                <path class="cls-27 hilera hilera1" d="M864.92,373.14c-66.21-96.51,104.9-254,245.67-299.14,46.92-15.06,79.91-11.63,112.07-19.4,23.94-5.79,47.7,10.45,32.82,30.11-18.22,24-64.31,78.85-93.44,112.08-97.32,111-225.55,280.67-297.12,176.35"/>
                <path class="cls-27 hilera hilera1" d="M1172.67,676c103.15,27.62,234.59-210.51,260.18-371.84,8.53-53.77-.29-99,3.07-134.83,2.5-26.66-15.42-30.94-32.68-7.78-21.13,28.34-49.45,86-67.45,153.42-43.94,164.58-274.63,331.17-163.12,361"/>
                <path class="cls-27 hilera hilera1" d="M1132.87,567.36c112,39.09,241.06-154.62,260.42-294.75,6.45-46.72-3.44-76.36-1.63-107.81,1.34-23.4-19.94-41.63-37.29-23.41-21.23,22.28-68.74,77.28-97.31,111.72-95.48,115.07-245.3,272-124.19,314.25"/>
                <path class="cls-27 hilera hilera1" d="M817,370.45c-39.38-96.16,200.26-232.39,368.81-264.67,56.19-10.76,105-4.69,142.68-9.66,28-3.7,34.31,13,11.44,30.52-28,21.39-86.32,51.07-156.08,71.47C1013.65,247.91,859.58,474.4,817,370.45"/>
                <path class="cls-27 hilera hilera1" d="M834.62,524.49c-68.18-78.78,116-282.82,265.87-366.14,50-27.78,98.31-37.3,132.5-53.79,25.45-12.27,36.78,1.61,20.63,25.33-19.75,29-69.6,96.39-101.08,137.56-105.18,137.57-244.21,342.2-317.92,257"/>
                <path class="cls-27 hilera hilera1" d="M1019.43,495.72c91.4,53.67,256.67-109.14,309.38-238.07,17.57-43,17.41-83.84,27-113.15,7.09-21.82-24.38-19.25-44.64-4.73-24.78,17.76-66,50.91-100.5,79-115.19,93.87-290,218.93-191.19,276.94"/>
                
                <path class="cls-27 hilera hilera2" d="M1076.62,724.09c87.69,61.63,262.47-108.89,323-246.83,20.18-46,22.56-90.33,33.89-121.78,8.43-23.41-6.93-33.64-28-18.63-25.79,18.35-64.91,60.85-96.89,115.94-78,134.43-326.81,204.68-232,271.3"/>
                <path class="cls-27 hilera hilera2" d="M779.05,547.21C699.88,475,823.91,263.56,942.65,172.12c39.58-30.47,90.34-60.25,123.1-67,41.11-8.47,13.83,28.49,4.21,52.72-11.76,29.64-37.44,54.09-83.09,98.29C875.49,364,864.63,625.24,779.05,547.21"/>
                <path class="cls-27 hilera hilera2" d="M915.52,722.24c89.69,59.38,281-138,350.67-291.24,23.22-51.09,27.64-99,40.9-133.74,9.88-25.87-5.85-35.66-28.69-17.84-28,21.79-92.36,76.3-131.61,110.58-131.15,114.58-328.23,268-231.27,332.24"/>
                <path class="cls-27 hilera hilera2" d="M961.59,767.21c85.16,66,290.49-116.17,371.19-263.61,26.9-49.15,34.81-96.56,50.59-130.18,11.74-25-3.24-36-27.33-20-29.48,19.6-97.74,69-139.41,100.22-139.24,104.22-347.11,242.2-255,313.53"/>
                <path class="cls-27 hilera hilera2" d="M871.53,643.55c90.35,57.21,193.84-182,257.83-334.35,21.33-50.79,24.2-98.15,36.22-132.65,9-25.69-6.88-35.11-28.87-17.17-26.9,22-71.31,40.74-109,75.2-125.89,115.14-253.88,347.13-156.19,409"/>
                <path class="cls-27 hilera hilera2" d="M831.82,558.58c29.42,1.12,65.14-10.72,241.92-260.09,16.34-23.06,49-70.17,63.48-139.12,2.11-10,3.37-18.39,4.11-23.86a220,220,0,0,0-28,0s-59.73,3.86-124,45.42c-54.38,35.15-151,157.78-230.73,346.92C790.14,553.13,815.89,558,831.82,558.58Z"/>
                <path class="cls-27 hilera hilera2" d="M892.21,700.8C995.4,720.75,1096.78,519,1172,369.35c0,0,15.82-31.49,33.6-150,.94-6.29,2.84-20.13-3.51-24.29-7-4.63-20.61,5.07-26.83,9.6-64.17,46.8-96.26,70.2-106,81.78-134.1,159.81-268.5,320-221,388.49C862.11,695,886.3,699.66,892.21,700.8Z"/>
                
                <path class="cls-27 hilera hilera3" d="M916.41,683.82c50.51,105.79,220.23,77.71,297.57,3.73,25.79-24.66,38-59.26,53.79-77.69,11.76-13.73,2.78-31.8-16.38-32.94-23.45-1.41-62.45,8.41-99.12,33-89.48,60-290.48-40.48-235.86,73.89"/>
                <path class="cls-27 hilera hilera3" d="M869.16,691.72c87.47,82.71,268.28-32.35,332.65-147.46,21.46-38.37,24.85-80,37-106.95,9.05-20-6.28-34-28-25.42-26.53,10.48-87.62,38.47-124.82,56.5C961.73,528.62,774.6,602.31,869.16,691.72"/>
                <path class="cls-27 hilera hilera3" d="M848.81,680.23C954.61,736.48,987.28,557,1006.18,442.44c6.31-38.19-4.61-75.76-2.77-102,1.37-19.52-17-28.9-33.49-17.08-20.17,14.46-58.55,24.35-85.73,47.57-90.81,77.6-149.75,248.49-35.38,309.29"/>
                <path class="cls-27 hilera hilera3" d="M808.09,635.54C712.21,591.06,751.68,406.65,827.35,317c25.23-29.87,58.79-46.1,77.38-64.71,13.84-13.85,30.18-5.88,29.8,14.55-.47,25-4.76,83.78-8.19,119.9-11.46,120.68-14.6,296.87-118.25,248.78"/>
                <path class="cls-27 hilera hilera3" d="M754.25,547.77q1.51,13.18,3.57,26.71a730.62,730.62,0,0,0,52.95,182l15,4.24,13.71,13.68,19.27,2.85c51.13,12.24,90.68,11.76,117,9.11,21.06-2.12,61.49-8.42,61.48-8.47l-.59.06-17.07-26.62-21.74-23.42-43.08-10.78-19.66-32.52-43.08-10.78-39.63-46.29-50.75-11.87Q778,581.72,754.25,547.77Z"/>
            </g>
        </g>
    </g>

    <g class="hoja hoja3">
        <path class="cls-2" d="M744.69 1015.09S974.14 1093 1039 800.05l38-195.53s-48 75.22-136.68 58.91c0 0-194.78 19.85-221.78 184.85 0 0-27 57.61-19.56 99.59s30.2 72.57 45.71 67.22z"/>
        <path fill="#333e39" d="M802.21 753.76s-32.76 30.06-51.24 126c0 0-1.48 99-40 101.49-12 .78-22 1.61-29.9 2.38-39-.81-83.5-2.17-83.5-2.17s27.69 34 170.4 8.72c0 0 50.31 24.84 148.95-19.51 0 0-81 31.69-145.49 14.57 0 0 35.54-19.3 61.4-39.48 0 0 85 15.23 118.61-24.52 0 0-76.23 29.12-111.7 14.63l48.06-41.43s91.06-18.76 112.86-52.08c0 0-87.67 47.61-104.87 38.54A258.8 258.8 0 00940 832.35s75.82-41.17 75.21-59.25c0 0-52.81 44-69.8 41 0 0 31.68-26.41 54.36-69.4 0 0 1.49 8.39 40.08-27.9l-37.91 20.59 46.84-77.59s-18 26.07-42.21 60.19c.81-7.45 3.13-28.23 5.17-40.73-3.6 11.25-9.86 30.26-12.45 47.29a45.12 45.12 0 01-1.12 5.25c-10.7 15-22.25 31.12-33.78 46.94-1.35-11.92-3.75-53.83 22.58-91.52 0 0-35.49 31.9-26 94l-66.53 87.42 8.55-9.57c-3.49 4.16-6.64 7.75-9.37 10.66l.82-1.09-2.84 3.18-1 1c1.54-12.2 16.5-128.88 28.46-157.26-9.39 16.5-34.49 68.76-34.48 156 0 0-9.51 16.13-30.67 37.2-5.85 5.56-12.18 11.39-18.7 17.07q-6.82 5.73-14.68 11.57s8.53-66.38 4.94-101.24c0 0 6.16-67.77 23.22-98.51 0 0-44.48 76.3-37.84 201.55 0 0-57.74 40.56-79.48 40.09 0 0 21.13-17.61 27.75-107.11.04.06 32.74-103.6 43.09-118.42zm61.17 145.92c-1.32 1.3-2.67 2.63-4.07 4 4.84-5.68 5.51-6.14 4.07-4z"/>
    </g>
    <g class="hoja hoja2">
        <path class="cls-2" d="M727.77 1325.2s217.34-107.15 56.08-360.2L672.49 799.85a122.77 122.77 0 01.3 50c-7.71 36.85-30.81 55.44-55.35 88.35 0 0-30.93 41.51-49.65 92.86-10 27.44-25.1 91.35 23.54 194.67 0 0 21.64 59.84 56.59 84.26s72.67 30.01 79.85 15.21z"/>
        <path fill="#333e39" d="M583.66 1099.73s-1.91 44.43 52.86 125.33c0 0 68.94 71 43.48 100-8 9.07-14.39 16.67-19.46 22.83-28.15 27-60.58 57.51-60.58 57.51s43.66 4.5 126.66-114.33c0 0 53.14-18 91.53-119.12 0 0-34.85 79.67-92.58 113.18 0 0 11.48-38.78 15.5-71.33 0 0 70.85-49.32 66.54-101.21 0 0-33.31 74.49-68.64 89.34l4.68-63.29s51.13-77.66 43-116.62c0 0-28.33 95.65-46.9 101.39a258.44 258.44 0 00-3.07-65.58s24.5-82.73 11.29-95.08c0 0-6.22 68.46-20.39 78.32 0 0 3.73-41.07-10.63-87.51 0 0 7 4.88 8.61-48.06l-12.25 41.36-21.74-88s5.69 31.18 12.71 72.41c-4.69-5.83-17.75-22.17-25.15-32.45 5.41 10.5 14.43 28.37 24.64 42.24a48.29 48.29 0 012.93 4.5c3.05 18.2 6.26 37.74 9.3 57.08-9.39-7.48-40.71-35.41-48.75-80.68 0 0-2.54 47.66 48.14 84.86l14.77 108.86-.71-12.81c.46 5.41.77 10.18.9 14.16l-.19-1.35.24 4.27v1.39c-7.53-9.72-79.46-102.8-91.07-131.32 5 18.31 24.23 73 86 134.73 0 0 4.68 18.12 4.62 48-.2 8.06-.56 16.66-1.16 25.29a302.75 302.75 0 01-2.2 18.56s-40.9-53-68.09-75.08c0 0-43.57-52.28-53.24-86.08 0 0 22.5 85.41 115.77 169.28 0 0-12.16 69.51-27.86 84.54 0 0 2.49-27.38-56.11-95.36-.06.1-50.24-96.36-53.4-114.17zm146.43 59.93q0 2.77-.06 5.7c-.59-7.44-.44-8.23.06-5.7z"/>
    </g>    
</g>

<g mask="url(#mask)" style="transform: translateY(-10px); opacity: 0">
    <animate
        attributeName = "opacity"
        from = "0"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1.5s"
        fill = "freeze"
    />
    <g>
        <path class="cls-25" d="M611.31 1855.35a33.68 33.68 0 00-27-21c-13.83-1.62-27.55 6-34 19z"/>
        <path class="cls-25" d="M600.31 1856.35c6.45-13 20.17-20.62 34-19a33.68 33.68 0 0127 21q-14.46-.52-29-1-16.05-.52-32-1z"/>
    </g>
</g>`

const balanced = `
<defs>
    <linearGradient id="Degradado_sin_nombre_33" x1="673.73" y1="1833.41" x2="673.73" y2="1811.41" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset=".09" stop-color="#020202"/>
        <stop offset=".13" stop-color="#0a0a0a"/>
        <stop offset=".17" stop-color="#171717"/>
        <stop offset=".2" stop-color="#2a2a2a"/>
        <stop offset=".22" stop-color="#424242"/>
        <stop offset=".25" stop-color="#606060"/>
        <stop offset=".27" stop-color="#848484"/>
        <stop offset=".29" stop-color="#aeaeae"/>
        <stop offset=".31" stop-color="#dbdbdb"/>
        <stop offset=".32" stop-color="#fff"/>
    </linearGradient>
    <style>
        .cls-2{fill:#003e32}.cls-3{fill:#012b23}.cls-20{fill:none}.cls-16,.cls-17,.cls-20,.cls-21{stroke-miterlimit:10}.cls-6{fill:#5e2b27}.cls-7{fill:#498271}.cls-8{fill:#053d33}.cls-14{fill:#ff5c41}.cls-15{fill:#e6bdb8}.cls-16{fill:#f15c44}.cls-16,.cls-17,.cls-21{stroke:#fff;stroke-width:2px}.cls-17{fill:#e54029}.cls-18{fill:#fbb7b0}.cls-20{stroke:#203e31;stroke-width:34px}.cls-21{fill:#cc3627}
        .monte{
            transform-origin: 670px 1730px;
            animation: monte 5s ease-in-out forwards;
        }
        .monte1{
            transform: scaleX(0.2) scaleY(.2) rotate(5deg);
            animation-delay: 1.5s;
        }
        .monte2{
            transform: scaleX(0.2) scaleY(.2) rotate(-5deg);
            animation-delay: 2s;
        }
        @keyframes monte{
            100%{
                transform: none;
            }
        }
        .hoja{
            transform: scale(0);
            animation: hoja 2s ease-out forwards;
        }
        .hoja1{
            transform-origin: 602px 1350px;
            animation-delay: 3.5s;
        }
        .hoja2{
            transform-origin: 695px 1365px;
            animation-delay: 3.5s;
            animation-duration: 3s;
        }
        .hoja3{
            transform-origin: 690px 970px;
            animation-delay: 4s;
        }
        .hoja4{
            transform-origin: 630px 785px;
            animation-delay: 5s;
            animation-duration: 3s;
        }
        .hoja5{
            transform-origin: 630px 785px;
            animation-delay: 4.7s;
        }
        @keyframes hoja{
            to{
                transform: none;
            }
        }
        .flor{
            transform: scale(0);
            opacity: 0;
            animation: flor 3s forwards;
        }
        .flor1{
            transform-origin: 510px 1145px;
            animation-delay: 2s;
        }
        .flor3{
            transform: scale(0);
            transform-origin: 820px 730px;
            animation-delay: 3.5s;
            animation-duration: 2s;
        }
        .flor2{
            transform-origin: 610px 740px;
            animation-delay: 3s;
        }
        @keyframes flor{
            40%{
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            50%{
                opacity: 1;
                transform: scale(0.2);
                animation-timing-function: ease-in;
            }
            100%{
                opacity: 1;
                animation-timing-function: linear;
                transform: scale(1);                                
            }
        }
        .florcerrada{
            animation: florcerrada 3s ease-out forwards;
        }

        .flor1 .florcerrada{
            animation-delay: 3s;
        }
        @keyframes florcerrada{
            to{
                opacity: 0;
            }
        }
        .flor1 .florcerrada{
            animation-delay: 3s;
        }

        .flor1 .hilera{
            transform-origin: 470px 1100px;
            animation: hilera 3s ease forwards;
        }
        .flor1 .hilera1{
            animation-delay: 3s;
        }
        .flor1 .hilera2{
            animation-delay: 3s;
        }
        .flor1 .hilera3{
            animation-delay: 3.5s;
            animation-timing-function: ease-in;
        }
        .flor2 .florcerrada{
            animation-delay: 4s;
        }
        .flor2 .hilera{
            transform-origin: 600px 720px;
            animation: hilera 3s ease forwards;
        }
        .flor2 .hilera1{
            animation-delay: 4s;
        }
        .flor2 .hilera2{
            animation-delay: 5s;
        }
        .flor2 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }
        .flor3 .florcerrada{
            animation-delay: 4s;
        }
        .flor3 .hilera{
            transform-origin: 810px 720px;
            animation: hilera 2s ease-in-out forwards;
        }
        .flor3 .hilera1{
            animation-delay: 4s;
        }
        .flor3 .hilera2{
            animation-delay: 4s;
        }
        .flor3 .hilera3{
            animation-delay: 4.5s;
            animation-timing-function: ease-in;
        }
        @keyframes hilera{
            to{
                transform: scale(0.7);
            }
        }
    </style>
    <mask id="mask" x="617.73" y="1811.2" width="111" height="24.22" maskUnits="userSpaceOnUse">
        <path fill="url(#Degradado_sin_nombre_33)" d="M618.73 1811.41h110v22h-110z"/>
    </mask>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
</defs>
<g>
    <ellipse class="cls-2" cx="592.37" cy="1890.62" rx="72" ry="42.5" transform="rotate(-45 592.371 1890.622)"/>
    <path class="cls-3" d="M632.92 1833.28s-61.91 99-95.23 101.42c0 0 2.68 14.42 9.68 5.42 0 0 61.1-10.67 85.55-106.84zM765.37 1837.12a311.95 311.95 0 01-79 83 83 83 0 0033.54-5.25c39.17-15 64.81-61.26 55.46-73.75-1.37-1.83-4.1-3.73-10-4z"/>
    <path class="cls-2" d="M774.91 1822c-5.88-8.06-44.75 3.7-69.53 29.74-29.59 31.09-26.43 69.21-25 71.35a7.66 7.66 0 002 2 6.72 6.72 0 003 1 399.31 399.31 0 0055.46-52c17.92-20.32 39.43-44.73 34.07-52.09z"/>
    <path class="cls-2" d="M791 1833.18c-1.4-1.53-2.8-3.06-5.1-3.46-15.55-2.73-24.28 54.86-65.57 80a86.28 86.28 0 01-35.94 11.75c-.9.25-2.37.79-2.61 1.86a2.38 2.38 0 00.59 1.84c1.74 2.3 45.85 14.58 79.22-10.88 28.72-21.97 42.72-66.66 29.41-81.11z"/>
    <path class="cls-3" d="M775 1822v.07z"/>
    <path d="M735.37 1888.12s44-66 79-96" stroke-miterlimit="10" stroke="#012b23" stroke-width="4" fill="none"/>
    <circle class="cls-2" cx="813.87" cy="1793.62" r="4.5"/>
    <path class="cls-3" d="M664.68 1764.64a339.32 339.32 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.79c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.58-4-52.47-22.39-58.48a22.86 22.86 0 00-10.91-.68z"/>
    <path class="cls-2" d="M667.49 1747.73c-8.5-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.51a7.77 7.77 0 002.61 1.09 6.91 6.91 0 003.16-.22 400.36 400.36 0 0031.51-69.19c8.86-25.69 19.46-56.44 11.72-61.19z"/>
    <path class="cls-2"  d="M730.19 1791c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.83 53.65-69.26 76.78a86.42 86.42 0 01-36.45 10c-.91.21-2.4.68-2.7 1.74a2.42 2.42 0 00.51 1.87c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.54 45.8-64.49 33.19-79.54z">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-30 640 1860"
          to="0 640 1860"
          dur="2s"
          fill="freeze"
          begin = "0s"
          id = "semilla"
          />
    </path>
    <path class="cls-3" d="M690.24 1769v.08z"/>
</g>
<g style="opacity: 0.2">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <path d="M928.51 1924.45c-15.27 38-74.17 47.22-138.74 57.36a495 495 0 01-155-.38c-180 24.24-207.92-18.48-213.66-30.27-29.78-61.13 84.87-216.77 226.13-231.47 2.53-.26 5.74-.56 9.58-.8a248.64 248.64 0 0128.65.2c88.21 6.17 149.35 49.72 149.35 49.72 43.6 31.08 114.28 104.47 93.69 155.64z" fill="#562822"/>
    <path class="cls-6" d="M552.66 1894.6l-5.48 3.05-8.59-2.2-5.25-5.81 2.06-5.03 7.81-.48 7.68 4.45 1.77 6.02zM473.66 1913.6l-5.48 3.05-8.6-2.2-5.24-5.81 2.06-5.03 7.81-.48 7.68 4.45 1.77 6.02zM684.55 1893.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM532.55 1945.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM764.55 1867.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM835.55 1937.45l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.83.82 7.78-4.09 7.88-5.93 2.03zM541.89 1856.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM651.89 1941.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM659.89 1856.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM568.89 1793.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM786.89 1787.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6zM612.89 1827.26l-6.26-.48-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 6z"/>
</g>
<g class="monte monte1">
    <path d="M685.15 1703.41c28.8-266 .55-477.45-28.42-615-26-123.35-57.64-211.75-65-232-99.51-273.64-235.44-412.94-282.37-488-1.41-2.25-6-9.7-7.63-9-2.09.9 2.14 15 3 18 17.23 59.3 158.72 717.21 305 1029 3.54 7.55 12 25.47 22 51a806.35 806.35 0 0153.42 246z" fill="#05332a"/>
    <path d="M310.73 379.41a3604.55 3604.55 0 01233 574 3606.79 3606.79 0 01145.39 734.36" stroke-width="6" stroke="#04231d" stroke-miterlimit="10" fill="none"/>
</g>
<g class="monte monte2">
    <path d="M672.73 1715.41c3.1-260.1-6.48-469.89-16-615-11.52-175.66-19.2-199.11-12-281 26.3-298.9 179.33-563 193-558 1.58.58 1.41 4.76 1 10-4.86 62.8-72.08 647.01-166 1444z" fill="#052b24"/>
    <path d="M830.73 280.41a5365.42 5365.42 0 00-158 1435" stroke="#04261f" stroke-width="6" stroke-miterlimit="10" fill="none"/>
</g>

<g class="all-flor2">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M676.23 1774.56a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1.5s"
            fill = freeze
            id = "tallo2"
        />
    </path>

    <g class="hoja hoja4">
        <path class="cls-7" d="M698 783s155.2 12.49 149.58-180.19l-7-127.76s-18.16 54.42-75.92 58.19c0 0-118.2 43-109.09 150 0 0-7.76 40.13 3.48 65.1S689.22 788.79 698 783z"/>
        <path class="cls-8" d="M692.8 611.2s-15.69 23.88-12.12 86.54c0 0 14.64 61.88-9 69.5-7.38 2.38-13.43 4.46-18.25 6.18-24.42 5.63-52.35 11.77-52.35 11.77s22.6 16.86 107.51-21.35c0 0 35.24 7.57 89.7-35.56 0 0-45.45 32.47-88.33 31.94 0 0 19.11-17.6 32-34.24 0 0 55.32-3.87 70-33.91 0 0-42.91 30.12-67.28 26.67l23.43-33.36s53.76-26 62.11-50.18c0 0-47.13 43.43-59.27 40.49A165.77 165.77 0 00791 638.5s40.75-37.56 37.53-48.72c0 0-26 35.71-37 36.48a161.79 161.79 0 0022.95-51.77s2.25 5 20.58-23.67l-20.44 18.78 17-55.69S824.47 533 814.77 558c-.67-4.76-2.49-18.07-3.19-26.18-.47 7.57-1.38 20.4-.31 31.41a32.74 32.74 0 01.13 3.45c-4.31 11-9 22.88-13.67 34.55-2.71-7.22-10.79-32.94-.32-60.56 0 0-17.09 25.45-1.39 62.66l-27.7 64.91 3.82-7.3c-1.52 3.14-2.92 5.87-4.16 8.11l.34-.81-1.27 2.43-.46.77c-1-7.84-10-82.86-7-102.42-3.26 11.75-10.68 48.24 3 102.62 0 0-3.39 11.53-13.26 28-2.77 4.38-5.8 9-9 13.57a199.27 199.27 0 01-7.33 9.51s-5.12-42.68-12.83-63.84c0 0-6.82-43.18-1-65 0 0-15.71 54.51 8.12 131.48 0 0-29.6 34.34-43.21 37.46 0 0 10.39-14.28.45-71.07.07.02 4.14-69.68 8.27-80.55zm61 81.28c-.62 1-1.25 2.06-1.91 3.12 2.11-4.29 2.5-4.68 1.94-3.12z"/>
    </g>
    <g class="hoja hoja5">
        <path class="cls-7" d="M474.5 815.65s-236.16 45.86-342.06-229.81l-65-183.41s60.91 74.28 153.83 69.2c0 0 211.16 39.87 260.56 194.07 0 0 36.09 55.8 33.32 93.44s-23.37 63.14-40.65 56.51z"/>
        <path class="cls-8" d="M441.26 683.14c18.21 82.75 43 101.23 43 101.23-23.23-2-90.13-45.57-90.13-45.57-8.43-114-65.55-188.91-65.55-188.91 22.09 30.06 37.1 92.85 37.1 92.85.48 31.55 17.86 93.33 17.86 93.33q-9.15-6.21-17.17-12.24c-7.69-5.93-15.2-12-22.15-17.72-25.29-21.67-37.48-37.5-37.48-37.5-10.82-80-44.2-130.67-56.3-146.83 16.33 27.33 46.84 135.92 50 147.26-.39-.32-.77-.66-1.18-1l-3.44-3.23 1 1.08c-3.29-3-7.11-6.6-11.37-10.8l10.35 9.72-82.13-87.52c2.49-55.88-39.5-89.07-39.5-89.07 32.89 37.47 35.52 75.61 35.56 86.38a6468.137 6468.137 0 01-42-46.77 47.47 47.47 0 01-1.85-4.94C161 507 152 488.87 146.7 478.16c3.73 11.68 8.8 31 10.59 37.9-30.14-34-52.69-59.86-52.69-59.86l59.82 76.32-43.18-23.08c45.85 37.55 46.4 30 46.4 30 29.64 41.92 66.86 69.64 66.86 69.64-17.83.9-79.87-45.3-79.87-45.3 1.59 16.49 87.94 62.66 87.94 62.66A364.38 364.38 0 00296 675.86c-17.3 6.4-117.14-47-117.14-47 27.49 33 127.38 60.27 127.38 60.27l56.64 43.32c-36.22 9.33-121.51-25.84-121.51-25.84 41 40.17 130.13 35.67 130.13 35.67 30.21 21.37 70.69 43 70.69 43-67 8.51-157.69-29.54-157.69-29.54 111.19 51.62 162 34.45 162 34.45 156.05 39.09 181.5 11 181.5 11s-47.52-3.7-89.2-7.3c-8.61-1.59-19.33-3.45-32.33-5.51-41.63-6.58-55.47-97.45-55.47-97.45-31.7-90-70.54-121.16-70.54-121.16 12.91 14.74 60.8 113.37 60.8 113.37zm-103.39 17.65q-2.5-2.1-4.86-4.11c-1.81-2.12-1.01-1.63 4.86 4.11z"/>
    </g>
        
    <g>
        <animateMotion
           dur="3s"
           begin="tallo2.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M70 1050a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17"
        />
        <g class="flor flor2">
            <path class="cls-14" d="M537.79 455.53c69.12-10.53 74.56-170.83 40.87-263.79-11.23-31-28.9-65.66-44.67-81.24-19.79-19.5-17.64 10.5-20.81 27.2-3.87 20.42 1.77 43.07 11.56 83.73 23.87 99.23-61.67 245.52 13 234.1"/>
            <path class="cls-14" d="M546.86 429.27c-69 12.16-124.89-126-122.32-217.57.86-30.51 11.78-55.66 13.84-75.91 1.52-15.07 19.71-6.29 28 7.3 10.14 16.62 26.08 46.5 39.29 71.7 44.16 84.21 115.77 201.33 41.19 214.48"/>
            <path class="cls-14" d="M516 451.65C448.89 471.8 377.2 341.12 369 249.9c-2.71-30.4 5.19-56.65 4.86-77-.25-15.15 18.84-8.56 28.66 4 12 15.32 31.35 43.12 47.42 66.6C503.68 322 588.52 429.86 516 451.65"/>
            <path class="cls-14" d="M603.59 429.57c77.93-10.42 84.48-162.65 46.74-250.72-12.58-29.36-28.59-43.85-38.51-62.85-7.39-14.14-26-18.51-29.57-2.64-4.42 19.41-12.52 65.87-16.91 94.61-14.7 96-46 232.85 38.25 221.58"/>
            <path class="cls-14" d="M642.64 457.39C721 450.7 734.8 299 701.32 209.19c-11.16-29.93-26.47-45.14-35.47-64.6-6.7-14.48-25-19.72-29.41-4.05-5.34 19.18-15.65 65.2-21.41 93.7-19.28 95.22-57.03 230.38 27.61 223.15"/>
            <path class="cls-15" d="M480.94 402.47C328 435.14 389.5 318.56 431 244.21c13.84-24.78 47.19-48.6 59.56-65.54 9.21-12.61 35.54-18 48-9.87 15.26 10 54 17.62 72.5 33.47 61.75 53 35.25 164.88-130.14 200.2"/>
            <path class="cls-16" d="M550 541.21c-61.87 32.51-174.4-108.32-210.48-212.4-12-34.69-12-66.07-18.57-89.49-4.87-17.44 5.94-22.74 19.72-9.65 16.86 16 41.89 50.57 61.6 93.08C450.35 426.49 616.87 506.07 550 541.21"/>
            <path class="cls-16" d="M550.72 526.8c-75.46 22.65-147.31-111.3-151.09-205.86-1.26-31.52 7.06-51.08 7.86-72.21.6-15.73 15.61-27.28 25.77-14.52 12.43 15.61 39.91 54 56.36 78 55 80.16 142.67 190.11 61.1 214.6"/>
            <path class="cls-16" d="M563.67 525.69c67.11 20.23 148.4-141 162.45-251 4.68-36.68-1.72-67.75-.1-92.21 1.2-18.21-10.45-21.37-21.25-5.74-13.21 19.11-30.64 58.17-41.23 104.09-25.86 112-172.42 223-99.87 244.9"/>
            <path class="cls-16" d="M605 586.19c70-3.9 91-183.3 66.49-291.6-8.18-36.1-24.84-63.13-31.71-86.69-5.12-17.54-17.14-16.53-21.92 1.85-5.86 22.5-17.68 76.59-24.46 110.12-22.63 112-64 270.53 11.6 266.32"/>
            <path class="cls-16" d="M584 546.82c-70.08-.35-100.92-149.18-82.33-240.57 6.19-30.46 21.36-53.71 26.93-73.66 4.15-14.84 20.52-2.72 26.31 12.42 7.07 18.52 17.53 51.4 26.12 79.09 28.73 92.55 78.74 223.08 3 222.72"/>
            <path class="cls-17" d="M519.59 596.69C458.43 631 352.93 509.91 320.79 417c-10.72-31-9.81-59.75-15.51-80.77C301 320.6 311.72 315 324.75 326c15.95 13.47 39.33 43.37 57.3 80.95 43.84 91.72 203.65 152.69 137.54 189.77M664.27 585.66c69.2 9.8 121-142 115.7-240.62-1.75-32.88-8.59-71.13-19.16-90.58-13.25-24.4-19.92 5-27.8 20-9.64 18.42-10.81 41.72-13.26 83.44-6 101.81-130.3 217.14-55.48 227.73"/>
            <path class="cls-17" d="M562.61 668c-70 7.88-126.42-163.77-123.67-273.6.93-36.62 12-65.79 14.15-89.94 1.58-18 13.67-19 22.05-1.85 10.27 21 32.7 71.83 46.05 103.43 44.63 105.61 117.06 253.45 41.42 262"/>
            <path class="cls-17" d="M538.32 674.83C470.55 693.93 387 533.69 372 424.86c-5-36.28 1.21-66.87-.61-91-1.36-18 10.41-21 21.46-5.4 13.5 19 43.86 65.54 62.15 94.54 61.15 97 156.57 231.14 83.31 251.8"/>
            <path class="cls-17" d="M561.62 629.3c-68.85-12.82-15.47-174.3 19.47-276.23C592.73 319.08 611.88 295 621 273c6.78-16.36 18.58-13.83 21.51 4.64 3.59 22.59 17.08 51.48 20.48 84.91 11.37 111.7-26.93 280.62-101.37 266.76"/>
            <path class="cls-17" d="M659.71 619.09c-69.48-8.84-25.48-173.07 3.54-276.89 9.67-34.6 27.41-59.76 35.25-82.23 5.83-16.73 17.75-14.88 21.74 3.38 4.88 22.35 20 50.42 25.33 83.6 17.77 110.86-10.76 281.7-85.86 272.14"/>
            <path class="cls-17" d="M582.52 662.42c-66.65-19.06-68.75-166.51-70.31-275.93 0 0-.33-23 23.11-97.21 1.24-3.95 4.08-12.55 9-13.09 5.49-.6 10.73 9.07 13.1 13.56 24.49 46.29 36.74 69.44 39.16 79.06 33.43 132.8 66.92 265.88 19.28 291.64-13.86 7.55-29.52 3.06-33.34 1.97z"/>
            <path class="cls-17" d="M576.05 658.17c-53.31 41.66-133.78-16.5-154.71-74.62-7-19.38-4.39-40.39-7.81-54-2.54-10.12 6.75-17.14 16.94-12.81 12.48 5.31 30.1 20.41 42.72 42.56 30.8 54 160.5 53.81 102.86 98.85"/>
            <path class="cls-17" d="M598.43 674.41C532 694.64 468.14 588.68 464.49 512.64c-1.22-25.34 7.75-47.74 8.38-64.78.48-12.68 12-15.94 21-5.94 11 12.24 35.38 42.42 50 61.3 48.74 63.1 126.47 149.32 54.61 171.19"/>
            <path class="cls-17" d="M611.9 673.7c-69.14 1.85-39.84-99.29-20.14-163.34 6.56-21.35 21.87-38 27.67-52 4.31-10.44 16.21-10.56 21.69-.21 6.71 12.66 24 27.64 32.06 46.63 27 63.45 13.45 166.91-61.28 168.9"/>
            <path class="cls-17" d="M627.24 654.86c66.27 17.92 123.66-90.31 123.45-166.49-.07-25.4-10-47.49-11.46-64.51-1.1-12.67-12.56-15.54-20.9-5.21-10.21 12.62-32.63 43.66-46 63.06-44.7 64.82-116.73 153.78-45.08 173.15"/>
            <path class="cls-18" d="M697 629a1124.744 1124.744 0 01-44.25 57.85q-14.79 18.07-29.41 34.51l-9.9 1.41-10.32-1.55-10.61 3.54-8.51-2.84-5.65 2.83c-10.26-5.62-25-14.07-42-25.31-35.27-23.24-69.12-50.85-67.6-53 .62-.88 7.4 2 36.62 20.09l17.24-6.53 25 5.51 18.52-11.74 25 5.51 32.39-13.72 29.27 6.92z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M521.94,446.72c-86.64-3-109.86-204.39-77.71-326.75,10.71-40.79,29-87.18,46.93-109.22,22.48-27.64,22.91,10.61,28.55,31.2C526.6,67.14,522,96.57,514,149.35c-19.35,128.8,101.57,300.56,7.92,297.37"/>
                <path class="cls-21 hilera hilera1" d="M559,404.11c85.13-21.46,85.51-210.78,40.13-315.77-15.13-35-39.37-58.57-51.12-81-8.75-16.72-25.63,2.86-28.89,22.92-4,24.54-8.5,67.45-12,103.54C495.19,254.36,466.93,427.3,559,404.11"/>
                <path class="cls-21 hilera hilera1" d="M695.18,411.32c78.2-41.84,33.52-223.93-35.87-313.55C636.17,67.9,606.84,51.27,590,32.61c-12.53-13.9-24.4,9.13-22.81,29.23,1.94,24.57,7.73,66.95,12.85,102.53,17.1,118.88,30.6,292.17,115.14,247"/>
                <path class="cls-21 hilera hilera1" d="M402.57,448.49c-95-19.75-83.91-213.32-26.19-321.84,19.23-36.17,40.84-53.17,55.49-76.43,10.91-17.32,34.4-21.29,36.87-.87,3,25,7.17,84.57,9,121.39,6.08,123,27.53,299.11-75.15,277.75"/>
                <path class="cls-21 hilera hilera1" d="M387,502.39C290.28,492,283.45,298.85,331.07,185.6c15.87-37.75,35.88-56.71,48.36-81.21,9.3-18.23,32.39-24.45,36.75-4.43,5.32,24.5,15,83.22,20.2,119.57C453.81,341,491.51,513.64,387,502.39"/>
                <path class="cls-21 hilera hilera1" d="M744.53,472c73.21-50.15-6-261.87-93.94-365.26C621.28,72.27,588,53.37,567.17,31.88c-15.47-16-27.86-7-22.58,16.42C551.05,77,572.1,126,604.93,173.82,685,290.55,665.39,526.21,744.53,472"/>
                <path class="cls-21 hilera hilera1" d="M654.44,438.34c85.24-49.56,32.79-235.73-45.17-323.73-26-29.33-50-39.12-68.91-57.27-14-13.5-37-9.92-34.94,10.88C508,93.66,517,153.38,523.3,190c21,122.47,39,301.87,131.14,248.3"/>
                <path class="cls-21 hilera hilera1" d="M359.37,531.17c-82-27.15-38.34-252,32.44-375.85,23.59-41.27,53.83-68.8,71.05-95.25,12.82-19.68,26.78-14.6,25.45,9.28-1.63,29.22-14.46,82.08-39.3,137.14-60.62,134.33-1,354-89.64,324.68"/>
                <path class="cls-21 hilera hilera1" d="M466.1,603.35c-86.58.42-115.73-226.14-87.27-365.76,9.49-46.54,29.63-82.21,37.71-112.7,6-22.7,20.91-22.33,27.15.68,7.63,28.16,23.18,96.05,32.14,138.17C505.76,404.5,559.7,602.9,466.1,603.35"/>
                <path class="cls-21 hilera hilera1" d="M547.89,471.18c83.28-28.65,69.93-221,17.07-324-17.62-34.34-43.48-56.33-56.82-78.2-9.93-16.27-25.33,5-27.13,25.61-2.19,25.25-3.58,69.2-4.49,106.14-3,123.45-18.67,301.39,71.37,270.41"/>
                
                <path class="cls-21 hilera hilera2" d="M722.92,558.59c86.31-22,73.22-224.51,18.92-337.31-18.1-37.6-44.8-63.08-58.51-87.24-10.22-18-25-13.82-26.91,7.6-2.37,26.2,3.29,73.87,20.76,123.84,42.64,121.92-47.57,316.91,45.74,293.11"/>
                <path class="cls-21 hilera hilera2" d="M450.39,650.71C362,661.63,295.66,469,302.18,344.63c2.17-41.45,10.82-89.58,24.28-113.91,16.88-30.52,25.46,6.69,35.55,25.86,12.34,23.44,13.88,52.87,17.08,105.58,7.82,128.6,166.81,276.74,71.3,288.55"/>
                <path class="cls-21 hilera hilera2" d="M634.63,659.24c86-24.49,64.89-251.94,5.86-378.77-19.69-42.28-47.53-71-62.28-98.13-11-20.22-25.66-15.59-26.77,8.45-1.36,29.42-1.8,99.55-1.39,142.85,1.38,144.72-8.35,352.07,84.58,325.6"/>
                <path class="cls-21 hilera hilera2" d="M687.92,654.49c87.69-18,83.78-246.13,34.39-376.78-16.47-43.55-42.11-74.18-54.79-102.32-9.44-20.94-24.45-17.41-27.37,6.46-3.58,29.2-9.3,99-12.15,142.16-9.54,144.22-34.88,350,59.92,330.48"/>
                <path class="cls-21 hilera hilera2" d="M561.19,644.45c85-26.08-10-220.73-71.56-343.5-20.51-40.93-48.84-68.35-64.11-94.6-11.37-19.53-25.87-14.64-26.44,8.94-.7,28.85-12.87,67-11.5,109.44,4.59,141.7,81.76,347.92,173.61,319.72"/>
                <path class="cls-21 hilera hilera2" d="M486.1,623.56c16.61-18,28.46-46.91-33.3-293.31C447.09,307.47,435,261.37,399.34,215c-5.19-6.76-9.78-12.07-12.83-15.49a182,182,0,0,0-15.13,17.69S341.52,256.94,333,320c-7.22,53.32,17.92,180.58,94.14,333.2C460.11,646.91,477.1,633.28,486.1,623.56Z"/>
                <path class="cls-21 hilera hilera2" d="M608.5,662.35C676.89,608,604.43,435,550.66,306.55c0,0-11.31-27-76.47-102.3-3.46-4-11.16-12.67-17.22-10.92-6.73,1.94-8,15.74-8.45,22.12-5.17,65.8-7.76,98.7-5.71,111.1,28.32,171,56.7,342.44,125.6,349.57C588.55,678.2,604.58,665.47,608.5,662.35Z"/>
                
                <path class="cls-21 hilera hilera3" d="M610.86,637.9C704.94,663.23,779,541,774.14,452.15c-1.62-29.61-16.85-56-19.94-76-2.3-14.84-18.56-18.94-29.64-7.47-13.57,14-28.47,43.95-32.77,80.39C681.28,538,509.17,610.52,610.86,637.9"/>
                <path class="cls-21 hilera hilera3" d="M590.3,672C689.79,661.52,715,485.21,677.14,382.34c-12.61-34.29-37.06-59-47.47-81.19-7.75-16.55-24.84-14.42-31.16,3.9-7.73,22.41-23.11,76.09-31.85,109.31-29.22,111-83.91,268.95,23.64,257.63"/>
                <path class="cls-21 hilera hilera3" d="M572.05,678.62c92.71-36.34-2.89-154-64.95-227.9-20.69-24.62-50.3-38.05-65.86-53.4-11.57-11.42-27.42-4.9-28.88,11.89-1.79,20.56-16.3,50.12-16.34,79.83-.14,99.26,75.81,228.86,176,189.58"/>
                <path class="cls-21 hilera hilera3" d="M521.83,680.14C441.91,716.59,346.89,592,331.26,495.75c-5.21-32.08,2.69-62,1-83.82C331,395.7,344.88,389.7,357.56,401c15.52,13.81,50.29,48.31,71.23,70,70,72.5,179.43,169.76,93,209.15"/>
                <path class="cls-21 hilera hilera3" d="M437.33,666.66q9.14,6.17,18.78,12.18a607.26,607.26,0,0,0,143.48,65l10.8-7.19,16.05-1.27,12.22-10.61c35.37-25.65,56.46-50.86,69-68.92,10.06-14.43,27.94-43.35,27.9-43.37l-.27.4-26-3.62-26.53,1.05-30.1,21.35-31.15-5.17-30.1,21.35-50.64,0-34.93,25.61Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor1">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 720; stroke-dashoffset:720;" d="M676.23 1752.56a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95">
        <animate
            attributeName = "stroke-dashoffset"
            from = "720"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id="tallo1"
        />
    </path>

    <g class="hoja hoja1">
        <path class="cls-7" d="M566 1349.44s-121.35-8.27-137.27-156.72l-7.94-98.06s20.1 44.2 66.17 53.79c0 0 98 46.91 102.09 128.67 0 0 10.39 32 4.14 50s-19.6 27.8-27.19 22.32z"/>
        <path class="cls-8" d="M567 1280.37c-1.85 42.8 7.87 55.06 7.87 55.06-11.09-4-38.11-34-38.11-34 10.7-56.81-7.49-100.81-7.49-100.81 6.89 17.56 6.07 50.18 6.07 50.18-3.87 15.48-3.4 47.92-3.4 47.92q-3.66-4.21-6.8-8.21c-3-3.89-5.87-7.82-8.52-11.53-9.54-13.88-13.44-23.19-13.44-23.19 5.1-40.5-4.62-69.59-8.44-79.06 4.43 15.48 5.23 72.49 5.3 78.45l-.44-.65-1.26-2 .35.67c-1.22-1.88-2.61-4.15-4.15-6.76l3.8 6.09-28.76-53.42c8.48-27-7.73-48.66-7.73-48.66C473 1173 469.36 1192 468 1197.27c-5-9.57-9.9-19.27-14.47-28.27a24.8 24.8 0 01-.27-2.65c-.32-8.4-2.39-18.43-3.57-24.34.31 6.19.28 16.28.25 19.89-10.32-20.51-18-36.09-18-36.09l19.31 45.06-18.09-16.89c17.52 24.3 18.77 20.7 18.77 20.7a174.15 174.15 0 0023.62 42.71c-8.83-1.87-33.14-32.51-33.14-32.51-1.37 8.27 34.83 42 34.83 42a184.13 184.13 0 0019.66 31.07c-9.28.88-51.13-38.17-51.13-38.17 9.15 19.67 54.41 46 54.41 46l22 28.53c-18.9-.15-56-28.41-56-28.41 14.8 24.95 58.94 34.33 58.94 34.33 12 14.36 28.95 30.19 28.95 30.19-33.84-4.54-73.21-34.91-73.21-34.91 47.62 39.66 74.68 37.88 74.68 37.88 71.17 39.37 87.25 28.93 87.25 28.93s-22.73-8-42.63-15.15c-4-1.9-9-4.2-15.08-6.89-19.46-8.62-14.43-54.82-14.43-54.82-3.81-48.08-18.73-68.37-18.73-68.37 4.48 8.91 15.08 63.28 15.08 63.28zm-52.81-4.8l-1.84-2.64c-.62-1.27-.35-.93 1.82 2.64z"/>
    </g>
        
    <g>
        <animateMotion
           dur="3s"
           begin="tallo1.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M160 600a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95"
        />
        <g class="flor flor1">
            <path class="cls-14" d="M352.06 971.2c-48.72 39-157.24-54.31-197.91-132.63-13.56-26.1-25.64-58.65-26.34-78.43-.87-24.81 17.56-5.23 30.43 2.78 15.75 9.8 27.22 27.2 48 58.2C257 896.78 404.72 929 352.06 971.2"/>
            <path class="cls-14" d="M335.12 955.37c46.83-41.43-18.6-157.26-84-206.33-21.79-16.35-45.42-22.7-60.7-32.52-11.38-7.31-15.35 10.27-10.47 23.61 6 16.32 18 44 28.24 67.28 34.28 77.65 76.25 192.73 126.88 148"/>
            <path class="cls-14" d="M377.54 942.57c46.84-41.42-18.59-157.25-84-206.32-21.79-16.36-45.42-22.71-60.7-32.53-11.37-7.31-15.34 10.27-10.46 23.62 6 16.32 18 44 28.23 67.28 34.28 77.64 76.26 192.73 126.88 148M297 1002.83c-54.08 44.72-157.74-43.29-192.54-121.4-11.6-26-11.37-45.29-17.8-63.31-4.78-13.42 3.62-28.22 16.2-21 15.4 8.88 50.73 31.74 72.22 46.29 71.8 48.6 180.37 111 121.92 159.39"/>
            <path class="cls-14" d="M294 1046.55c-54.08 44.72-157.73-43.29-192.54-121.4-11.6-26-11.36-45.29-17.79-63.31-4.78-13.42 3.62-28.22 16.2-21 15.39 8.88 50.73 31.74 72.21 46.29 71.81 48.6 180.38 111.05 121.92 159.39"/>
            <path class="cls-15" d="M351.93 895.84c107.84-88.69-7.78-110.49-82.77-122.82-25-4.11-60.16 5.94-78.87 5.17-13.92-.58-32.34 14.8-33.57 28-1.52 16.2-17.72 47.52-16.92 69.23 2.67 72.55 95.56 116.24 212.13 20.38"/>
            <path class="cls-16" d="M428.89 1014.35c53.86-31.45.48-183.22-61.24-259.74-20.56-25.51-44.31-40.35-58.95-56.37-10.89-11.93-20-6.26-16.63 10.36 4.15 20.33 18.47 55.62 41.33 90.64 55.78 85.46 37.27 249.11 95.49 215.11"/>
            <path class="cls-16" d="M414.65 1004.28c52.46-46.82-15.85-164-86-211-23.39-15.67-42.15-18.48-58.6-27.74-12.24-6.89-28-.86-23.07 12.82 6.07 16.74 22.42 55.57 33 79.28 35.31 79.23 78 197.29 134.68 146.69"/>
            <path class="cls-16" d="M388.61 1034c-27.37 56.25-182.29 11.92-263-45.5-26.88-19.14-43.38-42.15-60.4-55.91-12.66-10.23-7.68-19.78 9.11-17.41 20.53 2.91 56.69 15.15 93.21 36 89.11 50.89 250.62 22 221 82.82"/>
            <path class="cls-16" d="M399.38 1100.14c-46.73 41.56-172.95-58.74-225.56-142.72-17.54-28-24-55.59-34.48-74.82-7.8-14.32.45-21.24 15-12.62 17.87 10.55 59.38 37.35 84.77 54.31C324 981 449.9 1055.21 399.38 1100.14"/>
            <path class="cls-16" d="M385.12 1057.69c43.48-45-32.32-157.46-102.26-202.58-23.32-15-47.62-19.85-63.83-28.73-12.07-6.61-14.53 11.4-8.48 24.54 7.42 16.07 21.89 43.24 34.22 66C286 993 338.11 1106.29 385.12 1057.69"/>
            <path class="cls-17" d="M485.82 1023.7c53.26-32.85 4.51-167.64-54-233-19.52-21.78-42.37-33.55-56.3-47.1-10.38-10.09-19.41-4.2-16.46 10.74 3.59 18.28 16.8 49.47 38.33 79.78 52.57 73.94 30.89 225.05 88.47 189.54M358.17 1125.82c-36.09 50.87-166.23-8.67-227-72.58-20.24-21.3-40.84-49.19-47-68-7.68-23.56 15.45-9.87 30-5.74 17.86 5.05 33.68 18.58 62.23 42.58 69.66 58.57 220.69 48.71 181.66 103.71"/>
            <path class="cls-17" d="M491.94 1100.41c44.39-44.48-44.11-179.29-122.34-238.41-26.08-19.7-52.63-28.16-70.67-40.1-13.43-8.89-20.86-1-13.54 14.37 8.95 18.83 32 62.75 46.64 89.64C381 1015.77 444 1148.5 491.94 1100.41"/>
            <path class="cls-17" d="M522.92 1079.35c47.57-41-30.63-182.08-104.24-246.86-24.55-21.59-50.39-32-67.49-45.25-12.73-9.87-20.73-2.57-14.58 13.32 7.52 19.44 27.23 65 39.83 92.86 42.12 93.26 95.05 230.31 146.48 185.93"/>
            <path class="cls-17" d="M463.06 1083.5c31.27-54.12-109.15-111.63-198.57-147.12-29.8-11.84-57.26-12.83-77.49-19.38-15-4.9-20.17 4.57-9.35 17.27 13.24 15.54 25 41.45 45.69 63.16 69.13 72.54 205.88 144.6 239.68 86.1"/>
            <path class="cls-17" d="M403.86 1141.06c32.43-53.43-106.71-114-195.33-151.4-29.54-12.48-57-14.07-77-21.09-14.92-5.23-20.25 4.13-9.71 17.07 12.89 15.82 24.08 42 44.3 64.14 67.54 74 202.69 149 237.76 91.28"/>
            <path class="cls-17" d="M477 1111.23c23.73-57.13-78.07-140.54-153.62-202.44 0 0-15.89-13-80.72-37.88-3.45-1.33-11-4.12-14.16-1-3.47 3.5.38 12.53 2.19 16.68 18.72 42.83 28.08 64.24 33.45 71.28 74.16 97.14 148.48 194.49 192.94 175.54 13.01-5.51 18.57-18.9 19.92-22.18z"/>
            <path class="cls-17" d="M477.63 1104.35c58.73-14.07 62.82-102.59 33.87-149.5-9.65-15.64-25.77-25.51-33.36-35.45-5.65-7.4-15.71-4.82-18.35 4.71-3.23 11.66-2.48 32.36 6 53.48 20.63 51.53-51.61 142 11.87 126.76"/>
            <path class="cls-17" d="M476.54 1129c51.06-35.17 12.54-138.62-38.53-183.43-17-14.93-37.65-21.12-49.9-30.14-9.12-6.71-17.8-.49-15.81 11.36 2.43 14.49 10 48.27 15 69 17 69.1 34 171.29 89.2 133.26"/>
            <path class="cls-17" d="M468.56 1138c39.71-47.25-47.19-83-102.87-104.84-18.56-7.28-38.67-5.82-51.68-9.56-9.69-2.79-16.38 5.45-12.2 15 5.11 11.72 6 32.11 14.75 48.3 29.33 54.09 109.08 102.15 152 51.07"/>
            <path class="cls-17" d="M446.88 1138.26c-24.32 56.24-131.79 36.17-184.87-6.32-17.7-14.16-27.62-33.36-38.68-43.85-8.24-7.81-3.87-17.4 8-17.49 14.49-.11 48.63 1.48 69.61 2.92 70.11 4.8 172.26 4 146 64.74"/>
            <path class="cls-18" d="M387.73 1172.41c21.27 1.17 43.75 1.72 67.32 1.41q20.85-.27 40.44-1.36l6.49-6.12 4.65-8.07 8.37-5.44 2.74-7.5 5.12-2.38a238.35 238.35 0 0013.87-116.54l-14 33.2-14.12 8.39-10.07 20.55-18.49 6.45q-5 10.26-10.06 20.54l-27.58 15q-5.71 12.15-11.44 24.29z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M300.25,984.29C227.69,1028,101.4,875.33,62.57,758c-12.94-39.12-22.65-86.88-19.7-114.47,3.7-34.62,24.42-3.51,40,10.35,19.06,17,30.92,43.56,52.54,91C188.14,860.69,378.68,937,300.25,984.29"/>
                <path class="cls-21 hilera hilera1" d="M307.89,929.67c58.33-62.92-42.18-218.24-135.27-280.1-31-20.61-63.45-27-85-39.17-16.07-9-19.47,16-11.46,34.16,9.8,22.23,28.95,59.8,45.26,91.25C175.9,840.93,244.84,997.68,307.89,929.67"/>
                <path class="cls-21 hilera hilera1" d="M423.34,863c41.8-75.92-91.78-201.32-196.36-237.8-34.87-12.16-67.75-10.16-91.49-16.48-17.67-4.71-15.12,20.47-3.13,36.09C147,664,174.35,695.59,197.49,722c77.32,88.3,180.67,223.09,225.85,141"/>
                <path class="cls-21 hilera hilera1" d="M203.39,1049.31C115.05,1083.71,21,919.21,10.54,799.56c-3.5-39.88,5.15-65.31,4.76-92.18-.28-20,16.85-35.76,29.75-20.34,15.78,18.86,50.91,65.48,72,94.67,70.49,97.55,181.84,230.42,86.34,267.6"/>
                <path class="cls-21 hilera hilera1" d="M219.32,1101.77C134.54,1144.74,26.1,990.14,4.81,872c-7.1-39.38-.8-65.57-3.62-92.29-2.09-19.89,13.52-37.29,27.75-23.2,17.41,17.24,56.59,60.21,80.22,87.21,79,90.23,201.8,211.61,110.16,258.06"/>
                <path class="cls-21 hilera hilera1" d="M496.09,886.46c33.27-80.08-144.35-211.38-271.48-249.25-42.37-12.62-79.73-10.36-108.21-16.9-21.19-4.87-26.55,9.1-9.76,25.48,20.55,20,63.91,49,116.28,70.71,127.78,53,237.19,256.53,273.17,170"/>
                <path class="cls-21 hilera hilera1" d="M404.35,906.87c43.46-86-98.66-210.61-209.4-241.19-36.91-10.2-61.84-5.41-87-10.23C89.3,651.86,72.35,667,85.16,683c15.66,19.48,54.85,63.61,79.51,90.3,82.41,89.17,192.7,226.58,239.68,133.61"/>
                <path class="cls-21 hilera hilera1" d="M212,1140.06C130.4,1161.46,46.39,954,38.45,814.84,35.8,768.46,45.92,729.79,46,699c0-23,14.16-26.22,25.79-5.94C86,717.82,103.6,768,112.56,826.3c21.87,142.34,187.7,290.61,99.46,313.76"/>
                <path class="cls-21 hilera hilera1" d="M337.91,1142.36c-70.72,46.45-215.25-123.65-266.28-253.21C54.62,846,52.13,806,42.51,776.73c-7.15-21.81,5.24-29.43,22.6-13.9,21.25,19,70.15,66.35,99.92,96.1,99.48,99.39,249.33,233.22,172.88,283.43"/>
                <path class="cls-21 hilera hilera1" d="M334.54,990.52C387.52,922.69,274.15,772.21,176,716c-32.72-18.75-65.63-23-88.2-33.81-16.8-8-18.11,17.56-8.59,35.42,11.65,21.86,33.92,58.61,52.84,89.36,63.24,102.78,145.2,256.88,202.48,183.56"/>
                
                <path class="cls-21 hilera hilera2" d="M524.49,968.93c59-64-59.55-222.95-164.12-286.45-34.85-21.17-70.29-27.84-94.4-40.32-17.94-9.29-27.82,2-18,20.56,12,22.72,42,58.77,83,90.4,99.87,77.19,129.79,285,193.56,215.81"/>
                <path class="cls-21 hilera hilera2" d="M350.25,1189.53c-66.57,56-223.53-66.47-284.43-171.85C45.53,982.55,27,938.51,25.06,911.41c-2.42-34,24.42-8.07,42.89,2.26,22.6,12.64,39.54,35.93,70.23,77.41,74.89,101.2,284.05,137.91,212.07,198.45"/>
                <path class="cls-21 hilera hilera2" d="M505.76,1098.41c57.4-65.85-81-241-196.91-313.46-38.64-24.16-76.74-32.85-103.28-47.25-19.77-10.72-29.33.9-17.44,21.19,14.56,24.83,51.54,82.52,74.94,117.78,78.19,117.84,180.64,292.92,242.69,221.74"/>
                <path class="cls-21 hilera hilera2" d="M546.89,1066.14c62.24-61.49-62.42-246.28-172.47-327-36.69-26.91-74-38.35-99.38-54.65-18.88-12.13-29.3-1.25-19,19.86,12.62,25.83,45.1,86.07,65.75,122.95,69,123.24,157.82,305.35,225.09,238.87"/>
                <path class="cls-21 hilera hilera2" d="M437.71,1125.4C493.43,1058.79,312,949.88,196.15,882.06c-38.6-22.61-76.41-30-102.9-43.36-19.72-10-29,1.78-16.91,21.4,14.79,24,25.16,61.77,48.86,95.79,79.22,113.66,252.27,241.53,312.51,169.51"/>
                <path class="cls-21 hilera hilera2" d="M365.05,1148.27c4.05-23.56-1.65-53.59-183.47-222.58-16.82-15.63-51.24-47-105.19-66-7.86-2.77-14.45-4.69-18.77-5.87a177.45,177.45,0,0,0-3,22.56s-3.28,48.5,23.29,104.69c22.48,47.53,110.85,138.41,254.57,222.87C356.2,1181.24,362.86,1161,365.05,1148.27Z"/>
                <path class="cls-21 hilera hilera2" d="M486,1114.88C513.11,1034,361.59,930.74,249.14,854.15c0,0-23.65-16.11-117.13-43.1-5-1.43-15.9-4.44-19.93.23-4.48,5.17,1.87,17.13,4.85,22.62,30.81,56.67,46.21,85,54.49,94.07C285.71,1053,400.24,1178.36,460.49,1147.5,478.1,1138.49,484.45,1119.52,486,1114.88Z"/>
                
                <path class="cls-21 hilera hilera3" d="M474.92,1093.58c90.57-29.34,86.13-169,34.86-239.14C492.69,831,466.15,817.51,453,802.82c-9.79-10.94-25.3-5.64-28.27,9.66-3.64,18.73.08,51.17,16,83.33,38.74,78.45-63.68,229.49,34.23,197.77"/>
                <path class="cls-21 hilera hilera3" d="M476.23,1132.46c75.94-61.56,2.67-219.42-83.1-283.57-28.59-21.37-61.76-28.57-82.13-41.24-15.16-9.43-28,1.41-23.46,19.79,5.6,22.48,21.59,74.65,32.12,106.53,35.18,106.51,74.47,265,156.57,198.49"/>
                <path class="cls-21 hilera hilera3" d="M464.8,1147.61c56.61-79.14-84.38-124.65-174.57-152.14-30.07-9.16-61.49-4.39-82.4-8.68-15.57-3.19-25.08,10.58-17.34,25.13,9.49,17.79,13.34,49.74,29.12,74.1,52.75,81.41,184,147.15,245.19,61.59"/>
                <path class="cls-21 hilera hilera3" d="M424.46,1175.61c-46.07,72.42-190.29,20.9-254.34-49.6-21.35-23.51-30.82-52.26-43.81-69.22-9.67-12.62-1.5-24.93,14.91-22.43,20.06,3.05,66.93,12.8,95.64,19.43,95.92,22.14,237.41,43.53,187.6,121.82"/>
                <path class="cls-21 hilera hilera3" d="M348.05,1209.55q10.77.2,21.88,0a593.62,593.62,0,0,0,152.18-23.14l5-11.64,12.48-9.58q2.17-7.61,4.36-15.21c15.32-39.85,19.17-71.73,19.86-93.23.55-17.18-.2-50.4-.24-50.4a4.65,4.65,0,0,0,0,.48l-23.26,10.9-21.18,15-13.29,33.52-28.28,12.35-13.29,33.53-41.51,26.94q-7.49,19.8-15,39.59Z"/>
            </g>
        </g>
    </g>        
</g>

<g class="all-flor3">
    <path class="cls-20" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M677.23 1796.56c7.78-176 2.15-311.79-4.78-405.11-1.85-24.92-8.72-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.61-48.14 48.36-134.08 151.74-219.87">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "3s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id = "tallo3"
        />
    </path>
        
    <g>
        <animateMotion
           dur="3s"
           begin="tallo3.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M-150 1070c7.78-176 2.15-311.79-4.78-405.11-1.85-24.92-8.72-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.61-48.14 48.36-134.08 151.74-219.87"
        />
        <g class="flor flor3">
            <path class="cls-14" d="M1012.16 501.48c63.24 50.63 204.14-70.48 256.94-172.19 17.6-33.89 33.29-76.15 34.19-101.82 1.14-32.22-22.79-6.8-39.51 3.6-20.44 12.72-35.33 35.31-62.31 75.56-65.85 98.22-257.68 140.11-189.31 194.85"/>
            <path class="cls-14" d="M1034.15 480.92c-60.8-53.78 24.14-204.16 109-267.87 28.29-21.23 59-29.47 78.81-42.22 14.76-9.49 19.92 13.33 13.58 30.65-7.75 21.19-23.33 57.19-36.65 87.35-44.51 100.81-99 250.22-164.73 192.09"/>
            <path class="cls-14" d="M979.07 464.31c-60.8-53.78 24.15-204.16 109-267.87 28.29-21.23 59-29.47 78.81-42.22 14.76-9.49 19.92 13.33 13.59 30.65-7.76 21.19-23.34 57.19-36.66 87.35-44.51 100.81-99 250.22-164.73 192.09M1083.68 542.54c70.21 58.06 204.79-56.2 250-157.61 15.06-33.8 14.76-58.8 23.1-82.2 6.21-17.41-4.69-36.63-21-27.22-20 11.52-65.86 41.21-93.75 60.1-93.22 63.09-234.18 144.17-158.29 206.93"/>
            <path class="cls-14" d="M1087.6 599.3c70.21 58.06 204.78-56.19 250-157.61 15.06-33.8 14.76-58.8 23.11-82.2 6.21-17.41-4.7-36.63-21-27.22-20 11.52-65.85 41.21-93.75 60.1-93.22 63.09-234.18 144.17-158.28 206.93"/>
            <path class="cls-15" d="M1012.32 403.63c-140-115.13 10.11-143.45 107.47-159.45 32.45-5.33 78.1 7.72 102.38 6.72 18.08-.75 42 19.21 43.6 36.4 2 21 23 61.69 22 89.88-3.46 94.19-124.06 150.92-275.41 26.45"/>
            <path class="cls-16" d="M912.41 557.5c-69.93-40.83-.62-237.87 79.5-337.22 26.7-33.12 57.54-52.38 76.54-73.19 14.14-15.49 26-8.12 21.59 13.46-5.38 26.39-24 72.2-53.66 117.67C964 389.17 988 601.64 912.41 557.5"/>
            <path class="cls-16" d="M930.9 544.42c-68.12-60.78 20.58-212.94 111.65-274 30.36-20.35 54.72-24 76.07-36 15.9-8.94 36.4-1.11 30 16.65-7.88 21.74-29.11 72.15-42.83 102.93-45.84 102.86-101.22 256.13-174.85 190.44"/>
            <path class="cls-16" d="M964.7 583.05c35.54 73 236.67 15.47 341.38-59.08 34.91-24.85 56.32-54.72 78.42-72.58 16.44-13.29 10-25.69-11.82-22.6-26.66 3.78-73.61 19.66-121 46.74-115.69 66.06-325.38 28.58-287 107.52"/>
            <path class="cls-16" d="M950.72 668.87c60.68 54 224.54-76.25 292.84-185.28 22.77-36.34 31.16-72.17 44.76-97.14 10.13-18.59-.58-27.58-19.53-16.39-23.19 13.7-77.09 48.49-110 70.51-110.13 73.57-273.62 170-208 228.3"/>
            <path class="cls-16" d="M969.24 613.76c-56.45-58.38 42-204.42 132.76-263 30.27-19.53 61.82-25.78 82.87-37.31 15.66-8.58 18.86 14.8 11 31.85-9.63 20.87-28.41 56.15-44.42 85.69-53.45 98.75-121.18 245.87-182.21 182.77"/>
            <path class="cls-17" d="M838.5 569.63C769.35 527 832.65 352 908.66 267.18c25.34-28.27 55-43.54 73.09-61.14 13.47-13.1 25.2-5.46 21.37 13.94-4.66 23.73-21.81 64.24-49.77 103.58-68.24 96-40.09 292.17-114.85 246.07M1004.22 702.21c46.86 66 215.82-11.25 294.66-94.22 26.27-27.66 53-63.87 61-88.25 10-30.59-20.06-12.82-39-7.46-23.18 6.56-43.73 24.13-80.79 55.29-90.44 76-286.52 63.24-235.85 134.64"/>
            <path class="cls-17" d="M830.55 669.23c-57.62-57.75 57.26-232.78 158.83-309.52 33.86-25.58 68.33-36.56 91.75-52.07 17.43-11.54 27.08-1.31 17.58 18.66-11.61 24.44-41.53 81.46-60.55 116.37-63.54 116.67-145.32 289-207.61 226.56"/>
            <path class="cls-17" d="M790.33 641.88c-61.76-53.29 39.77-236.39 135.34-320.49 31.86-28 65.42-41.54 87.62-58.75 16.52-12.81 26.91-3.33 18.92 17.3-9.76 25.24-35.35 84.33-51.71 120.56-54.69 121.07-123.4 299-190.17 241.38"/>
            <path class="cls-17" d="M868 647.27c-40.59-70.26 141.72-144.92 257.8-191 38.7-15.37 74.34-16.66 100.56-25.21 19.52-6.36 26.18 5.94 12.13 22.43-17.18 20.18-32.45 53.82-59.31 82-89.71 94.18-267.26 187.74-311.18 111.78"/>
            <path class="cls-17" d="M944.91 722c-42.11-69.37 138.53-148 253.59-196.56 38.35-16.2 74-18.27 100-27.38 19.37-6.78 26.3 5.36 12.61 22.16-16.74 20.54-31.27 54.51-57.51 83.27C1165.9 699.59 990.43 797 944.91 722"/>
            <path class="cls-17" d="M849.94 683.28c-30.81-74.18 101.36-182.47 199.43-262.83 0 0 20.64-16.9 104.81-49.18 4.47-1.72 14.33-5.35 18.38-1.26 4.5 4.54-.49 16.27-2.85 21.65-24.3 55.61-36.45 83.41-43.42 92.55-96.28 126.11-192.77 252.5-250.5 227.9-16.87-7.2-24.09-24.58-25.85-28.83z"/>
            <path class="cls-17" d="M849.13 674.35c-76.24-18.28-81.56-133.2-44-194.11 12.53-20.3 33.46-33.11 43.31-46 7.34-9.61 20.41-6.25 23.83 6.12 4.19 15.14 3.22 42-7.75 69.43-26.78 66.9 67 184.33-15.41 164.58"/>
            <path class="cls-17" d="M850.55 706.35c-66.3-45.67-16.28-180 50-238.14 22.1-19.39 48.87-27.43 64.78-39.14 11.85-8.72 23.11-.64 20.53 14.74-3.15 18.82-12.93 62.68-19.53 89.53-22.05 89.7-44.13 222.38-115.8 173"/>
            <path class="cls-17" d="M860.9 718.05c-51.55-61.34 61.28-107.75 133.56-136.11 24.1-9.45 50.2-7.55 67.1-12.41 12.57-3.63 21.27 7.07 15.84 19.51-6.64 15.22-7.76 41.69-19.15 62.71-38.08 70.25-141.62 132.62-197.35 66.3"/>
            <path class="cls-17" d="M889.06 718.36c31.57 73 171.09 47 240-8.19 23-18.39 35.85-43.32 50.22-56.94 10.69-10.13 5-22.59-10.36-22.71-18.81-.14-63.13 1.93-90.37 3.79-91 6.24-223.64 5.13-189.5 84.05"/>
            <path class="cls-18" d="M960.73 761.41q-40 .65-80 1-27.4.26-54.79.36l-8.43-7.95-6-10.48q-5.41-3.54-10.85-7.06-1.79-4.87-3.56-9.74l-6.65-3.08a454 454 0 01-19.68-116.05 448.12 448.12 0 010-33q9.91 20.43 19.84 40.85l18.34 10.94q6.54 13.34 13.07 26.68l24 8.32 13.06 26.67 35.81 19.46q7.42 15.76 14.84 31.54z"/>

            <g class="florcerrada">
                <path class="cls-21 hilera hilera1" d="M1021.46,452.86C956.32,371.39,1122.19,192.44,1259.17,126c45.65-22.15,102.37-41.75,136.53-42.63,42.86-1.1,8.25,29.24-6.15,50.51-17.61,26-48.15,44.82-102.58,78.9C1154.14,296,1091.88,540.93,1021.46,452.86"/>
                <path class="cls-21 hilera hilera1" d="M1089.38,453.32c86.27,61,259.55-86.91,319.94-210.59,20.13-41.23,22.69-81.84,34-110.16,8.43-21.08-22.68-21.17-43.56-8.45-25.54,15.57-68.28,45-104,70.07C1176.27,277.8,996.13,387.4,1089.38,453.32"/>
                <path class="cls-21 hilera hilera1" d="M1189.46,583.43c99.46,38.7,230.85-144.71,258.4-278.3,9.18-44.53,1.41-84.34,5.27-114.35,2.88-22.33-27.45-15.14-44.57,2.05-20.94,21-55.12,59.49-83.62,92-95.23,108.72-243,256.75-135.48,298.58"/>
                <path class="cls-21 hilera hilera1" d="M926.37,345.18c-56.32-102.25,129.21-243.7,273.55-275.95,48.12-10.74,80.57-4.32,113.3-9.15,24.36-3.59,46.39,14.76,29.66,33-20.46,22.33-71.66,72.78-103.88,103.27C1131.37,298.22,987.26,455.72,926.37,345.18"/>
                <path class="cls-21 hilera hilera1" d="M864.92,373.14c-66.21-96.51,104.9-254,245.67-299.14,46.92-15.06,79.91-11.63,112.07-19.4,23.94-5.79,47.7,10.45,32.82,30.11-18.22,24-64.31,78.85-93.44,112.08-97.32,111-225.55,280.67-297.12,176.35"/>
                <path class="cls-21 hilera hilera1" d="M1172.67,676c103.15,27.62,234.59-210.51,260.18-371.84,8.53-53.77-.29-99,3.07-134.83,2.5-26.66-15.42-30.94-32.68-7.78-21.13,28.34-49.45,86-67.45,153.42-43.94,164.58-274.63,331.17-163.12,361"/>
                <path class="cls-21 hilera hilera1" d="M1132.87,567.36c112,39.09,241.06-154.62,260.42-294.75,6.45-46.72-3.44-76.36-1.63-107.81,1.34-23.4-19.94-41.63-37.29-23.41-21.23,22.28-68.74,77.28-97.31,111.72-95.48,115.07-245.3,272-124.19,314.25"/>
                <path class="cls-21 hilera hilera1" d="M817,370.45c-39.38-96.16,200.26-232.39,368.81-264.67,56.19-10.76,105-4.69,142.68-9.66,28-3.7,34.31,13,11.44,30.52-28,21.39-86.32,51.07-156.08,71.47C1013.65,247.91,859.58,474.4,817,370.45"/>
                <path class="cls-21 hilera hilera1" d="M834.62,524.49c-68.18-78.78,116-282.82,265.87-366.14,50-27.78,98.31-37.3,132.5-53.79,25.45-12.27,36.78,1.61,20.63,25.33-19.75,29-69.6,96.39-101.08,137.56-105.18,137.57-244.21,342.2-317.92,257"/>
                <path class="cls-21 hilera hilera1" d="M1019.43,495.72c91.4,53.67,256.67-109.14,309.38-238.07,17.57-43,17.41-83.84,27-113.15,7.09-21.82-24.38-19.25-44.64-4.73-24.78,17.76-66,50.91-100.5,79-115.19,93.87-290,218.93-191.19,276.94"/>
                
                <path class="cls-21 hilera hilera2" d="M1076.62,724.09c87.69,61.63,262.47-108.89,323-246.83,20.18-46,22.56-90.33,33.89-121.78,8.43-23.41-6.93-33.64-28-18.63-25.79,18.35-64.91,60.85-96.89,115.94-78,134.43-326.81,204.68-232,271.3"/>
                <path class="cls-21 hilera hilera2" d="M779.05,547.21C699.88,475,823.91,263.56,942.65,172.12c39.58-30.47,90.34-60.25,123.1-67,41.11-8.47,13.83,28.49,4.21,52.72-11.76,29.64-37.44,54.09-83.09,98.29C875.49,364,864.63,625.24,779.05,547.21"/>
                <path class="cls-21 hilera hilera2" d="M915.52,722.24c89.69,59.38,281-138,350.67-291.24,23.22-51.09,27.64-99,40.9-133.74,9.88-25.87-5.85-35.66-28.69-17.84-28,21.79-92.36,76.3-131.61,110.58-131.15,114.58-328.23,268-231.27,332.24"/>
                <path class="cls-21 hilera hilera2" d="M961.59,767.21c85.16,66,290.49-116.17,371.19-263.61,26.9-49.15,34.81-96.56,50.59-130.18,11.74-25-3.24-36-27.33-20-29.48,19.6-97.74,69-139.41,100.22-139.24,104.22-347.11,242.2-255,313.53"/>
                <path class="cls-21 hilera hilera2" d="M871.53,643.55c90.35,57.21,193.84-182,257.83-334.35,21.33-50.79,24.2-98.15,36.22-132.65,9-25.69-6.88-35.11-28.87-17.17-26.9,22-71.31,40.74-109,75.2-125.89,115.14-253.88,347.13-156.19,409"/>
                <path class="cls-21 hilera hilera2" d="M831.82,558.58c29.42,1.12,65.14-10.72,241.92-260.09,16.34-23.06,49-70.17,63.48-139.12,2.11-10,3.37-18.39,4.11-23.86a220,220,0,0,0-28,0s-59.73,3.86-124,45.42c-54.38,35.15-151,157.78-230.73,346.92C790.14,553.13,815.89,558,831.82,558.58Z"/>
                <path class="cls-21 hilera hilera2" d="M892.21,700.8C995.4,720.75,1096.78,519,1172,369.35c0,0,15.82-31.49,33.6-150,.94-6.29,2.84-20.13-3.51-24.29-7-4.63-20.61,5.07-26.83,9.6-64.17,46.8-96.26,70.2-106,81.78-134.1,159.81-268.5,320-221,388.49C862.11,695,886.3,699.66,892.21,700.8Z"/>
                
                <path class="cls-21 hilera hilera3" d="M916.41,683.82c50.51,105.79,220.23,77.71,297.57,3.73,25.79-24.66,38-59.26,53.79-77.69,11.76-13.73,2.78-31.8-16.38-32.94-23.45-1.41-62.45,8.41-99.12,33-89.48,60-290.48-40.48-235.86,73.89"/>
                <path class="cls-21 hilera hilera3" d="M869.16,691.72c87.47,82.71,268.28-32.35,332.65-147.46,21.46-38.37,24.85-80,37-106.95,9.05-20-6.28-34-28-25.42-26.53,10.48-87.62,38.47-124.82,56.5C961.73,528.62,774.6,602.31,869.16,691.72"/>
                <path class="cls-21 hilera hilera3" d="M848.81,680.23C954.61,736.48,987.28,557,1006.18,442.44c6.31-38.19-4.61-75.76-2.77-102,1.37-19.52-17-28.9-33.49-17.08-20.17,14.46-58.55,24.35-85.73,47.57-90.81,77.6-149.75,248.49-35.38,309.29"/>
                <path class="cls-21 hilera hilera3" d="M808.09,635.54C712.21,591.06,751.68,406.65,827.35,317c25.23-29.87,58.79-46.1,77.38-64.71,13.84-13.85,30.18-5.88,29.8,14.55-.47,25-4.76,83.78-8.19,119.9-11.46,120.68-14.6,296.87-118.25,248.78"/>
                <path class="cls-21 hilera hilera3" d="M754.25,547.77q1.51,13.18,3.57,26.71a730.62,730.62,0,0,0,52.95,182l15,4.24,13.71,13.68,19.27,2.85c51.13,12.24,90.68,11.76,117,9.11,21.06-2.12,61.49-8.42,61.48-8.47l-.59.06-17.07-26.62-21.74-23.42-43.08-10.78-19.66-32.52-43.08-10.78-39.63-46.29-50.75-11.87Q778,581.72,754.25,547.77Z"/>
            </g>
        </g>
    </g>

    <g class="hoja hoja3">
        <path class="cls-7" d="M812.11 992.16s229.45 77.91 294.36-215l38-195.53s-48.13 75.22-136.76 58.91c0 0-194.78 19.86-221.78 184.85 0 0-27 57.62-19.56 99.59s30.24 72.53 45.74 67.18z"/>
        <path class="cls-8" d="M869.64 730.82s-32.77 30.06-51.24 126c0 0-1.49 99-40 101.49-12 .78-22 1.61-29.9 2.38-39-.8-83.5-2.17-83.5-2.17s27.69 34.05 170.41 8.72c0 0 50.3 24.85 148.94-19.51 0 0-81 31.69-145.49 14.57 0 0 35.54-19.3 61.4-39.48 0 0 85 15.23 118.62-24.51 0 0-76.23 29.12-111.71 14.63l48.06-41.44s91.06-18.76 112.86-52.07c0 0-87.67 47.6-104.87 38.53a258.4 258.4 0 0044.21-48.55s75.82-41.17 75.21-59.24c0 0-52.8 44-69.8 41 0 0 31.69-26.4 54.36-69.4 0 0 1.49 8.4 40.08-27.89l-37.91 20.58 46.85-77.59s-18 26.07-42.22 60.19c.81-7.44 3.13-28.22 5.17-40.73-3.6 11.25-9.86 30.27-12.44 47.3a49.5 49.5 0 01-1.12 5.24c-10.71 15-22.26 31.12-33.79 46.94-1.35-11.92-3.74-53.82 22.58-91.52 0 0-35.49 31.91-26 94l-66.5 87.44 8.55-9.57c-3.5 4.15-6.65 7.74-9.38 10.65l.83-1.08-2.85 3.18-1 1c1.54-12.19 16.5-128.87 28.45-157.25-9.37 16.47-34.5 68.73-34.5 156.03 0 0-9.5 16.12-30.67 37.2a577.684 577.684 0 01-18.7 17.06q-6.82 5.73-14.68 11.57s8.53-66.37 4.94-101.24c0 0 6.16-67.77 23.22-98.51 0 0-44.48 76.31-37.83 201.56 0 0-57.75 40.56-79.48 40.08 0 0 21.12-17.6 27.75-107.11.04 0 32.73-103.65 43.09-118.48zm61.16 145.92q-2 1.95-4.07 4c4.85-5.69 5.51-6.14 4.07-4z"/>
    </g>
    <g class="hoja hoja2">
        <path class="cls-7" d="M795.2 1302.27s217.33-107.16 56.08-360.2L739.91 776.91s19.16 87.22-55 138.36c0 0-123.7 151.77-26.12 287.53 0 0 21.64 59.84 56.59 84.25S788 1317 795.2 1302.27z"/>
        <path class="cls-8" d="M651.08 1076.8s-1.91 44.42 52.86 125.32c0 0 68.94 71 43.48 100.06-8 9.06-14.39 16.66-19.46 22.83-28.14 27-60.58 57.5-60.58 57.5S711 1387 794 1268.18c0 0 53.14-18 91.53-119.11 0 0-34.85 79.66-92.58 113.18 0 0 11.49-38.78 15.51-71.34 0 0 70.85-49.31 66.53-101.21 0 0-33.31 74.5-68.64 89.34l4.69-63.29s51.12-77.65 43-116.62c0 0-28.34 95.65-46.91 101.4a258.52 258.52 0 00-3.07-65.59s24.51-82.72 11.29-95.07c0 0-6.22 68.45-20.39 78.32 0 0 3.73-41.08-10.63-87.51 0 0 7 4.88 8.61-48.07L780.71 924 759 836s5.69 31.19 12.71 72.42c-4.69-5.84-17.74-22.18-25.14-32.46 5.4 10.5 14.42 28.37 24.64 42.24a50.33 50.33 0 012.92 4.5c3.06 18.2 6.27 37.75 9.3 57.09-9.38-7.48-40.71-35.42-48.75-80.69 0 0-2.54 47.66 48.14 84.87l14.78 108.86-.72-12.81c.47 5.41.78 10.17.9 14.16l-.18-1.35.24 4.26v1.39c-7.53-9.71-79.46-102.79-91.07-131.31 5 18.3 24.23 73 86 134.72 0 0 4.68 18.12 4.62 48-.2 8.07-.56 16.67-1.15 25.29a320.57 320.57 0 01-2.2 18.57s-40.9-53-68.1-75.09c0 0-43.57-52.27-53.24-86.07 0 0 22.51 85.4 115.77 169.27 0 0-12.15 69.51-27.86 84.55 0 0 2.49-27.39-56.11-95.36-.08-.05-50.26-96.45-53.42-114.25zm146.43 59.93c0 1.85 0 3.75-.06 5.69-.58-7.42-.45-8.23.06-5.69z"/>
    </g>
</g>

<g mask="url(#mask)" style="transform: translateY(-10px); opacity: 0">
    <animate
        attributeName = "opacity"
        from = "0"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1.5s"
        fill = "freeze"
    />
    <path class="cls-6" d="M678.73 1832.41a33.68 33.68 0 00-27-21c-13.83-1.62-27.55 6-34 19z"/>
    <path class="cls-6" d="M667.73 1833.41c6.45-13 20.17-20.62 34-19a33.68 33.68 0 0127 21q-14.46-.51-29-1-16.03-.53-32-1z"/>
</g>`

const sensitive = `
<defs>
    <radialGradient id="Degradado_sin_nombre_178" cx="230.59" cy="590.76" r="374.26" gradientTransform="matrix(.92 .39 -.2 .51 124.3 219.77)" gradientUnits="userSpaceOnUse">
        <stop offset=".17" stop-color="#008059"/>
        <stop offset=".17" stop-color="#117859"/>
        <stop offset=".18" stop-color="#276f59"/>
        <stop offset=".18" stop-color="#386759"/>
        <stop offset=".19" stop-color="#436259"/>
        <stop offset=".19" stop-color="#4a5f59"/>
        <stop offset=".22" stop-color="#4c5e59"/>
    </radialGradient>
    <radialGradient id="Degradado_sin_nombre_166" cx="474.64" cy="151.75" r="128.68" gradientTransform="matrix(-.13 -.99 .3 -.04 492.55 628.23)" gradientUnits="userSpaceOnUse">
        <stop offset=".34" stop-color="#fbb7b0"/>
        <stop offset=".34" stop-color="#f8aca4"/>
        <stop offset=".34" stop-color="#f29589"/>
        <stop offset=".34" stop-color="#ed8173"/>
        <stop offset=".35" stop-color="#ea7262"/>
        <stop offset=".35" stop-color="#e76857"/>
        <stop offset=".36" stop-color="#e56250"/>
        <stop offset=".37" stop-color="#e5604e"/>
    </radialGradient>
    <radialGradient id="Degradado_sin_nombre_166-2" cx="407.53" cy="155.13" r="120.06" gradientTransform="rotate(-104.47 449.597 100.838) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-3" cx="361.13" cy="209.27" r="120.06" gradientTransform="matrix(-.16 -.99 .3 -.05 355.61 575.78)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-4" cx="536.66" cy="152.31" r="123.79" gradientTransform="rotate(-96.33 571.054 113.9) scale(1 .5)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-5" cx="603.97" cy="184.53" r="124.13" gradientTransform="matrix(-.19 -.98 .29 -.06 661.42 788.3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-6" cx="314.47" cy="252.69" fx="327.049" fy="280.946" r="125.89" gradientTransform="rotate(-95.3 376.358 184.782) scale(1 .46)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-7" cx="364.31" cy="279.86" r="124.56" gradientTransform="rotate(-97.61 450.031 181.92) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-8" cx="582.62" cy="192.93" r="126.96" gradientTransform="rotate(-60 595.478 185.502) scale(1 .92)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-9" cx="527.7" cy="218.56" r="143.43" gradientTransform="rotate(-97.67 594.61 142.051) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_167" cx="491.52" cy="253.3" r="122.12" gradientTransform="rotate(-60 645.071 164.644) scale(1 .3)" gradientUnits="userSpaceOnUse">
        <stop offset=".34" stop-color="#fbb7b0"/>
        <stop offset=".34" stop-color="#f8aca4"/>
        <stop offset=".35" stop-color="#f29589"/>
        <stop offset=".35" stop-color="#ed8173"/>
        <stop offset=".36" stop-color="#ea7262"/>
        <stop offset=".36" stop-color="#e76857"/>
        <stop offset=".37" stop-color="#e56250"/>
        <stop offset=".4" stop-color="#e5604e"/>
        <stop offset=".69" stop-color="#e5604e"/>
    </radialGradient>
    <radialGradient id="Degradado_sin_nombre_166-10" cx="311.01" cy="411.51" r="128.41" gradientTransform="matrix(-.3 -.95 .29 -.09 286.67 745.24)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-11" cx="685.9" cy="304.32" r="208.03" gradientTransform="rotate(-96.19 781.455 197.83) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-12" cx="422.17" cy="394.23" r="144.64" gradientTransform="matrix(-.26 -.97 .29 -.08 418.13 832.64)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-13" cx="350.61" cy="506.63" r="144.6" gradientTransform="matrix(-.37881 -.92547 .27764 -.11364 342.77 888.69)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-14" cx="534.05" cy="328.96" r="138.42" gradientTransform="matrix(0 -1 .3 0 433.24 862.61)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-15" cx="619.03" cy="260.82" r="138" gradientTransform="matrix(-.14 -.99 .3 -.04 626.82 884.73)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-16" cx="465.4" cy="434.97" r="144.57" gradientTransform="matrix(-.26 -.97 .29 -.08 459.45 918.28)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-17" cx="375.69" cy="506.11" r="83.68" gradientTransform="matrix(-.24412 -.96974 .29092 -.07324 320.19 907.5)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-18" cx="412.25" cy="491.58" r="149.81" gradientTransform="matrix(-.43 -.9 .27 -.13 455.04 927.32)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-19" cx="561.61" cy="518.88" r="89.2" gradientTransform="rotate(-60 876.156 337.274) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-20" cx="616.83" cy="493.74" r="101.79" gradientTransform="rotate(-60 916.146 320.93) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-21" cx="1187.03" cy="186.39" r="151.62" gradientTransform="rotate(-60 1300.032 121.158) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-22" cx="1123.61" cy="231.75" r="139.77" gradientTransform="rotate(-60 1264.097 150.64) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-23" cx="1019.6" cy="221.58" r="139.74" gradientTransform="rotate(-60 1153.931 144.032) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-24" cx="1236.23" cy="261.43" r="144.71" gradientTransform="rotate(-60 1394.71 169.931) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-25" cx="1255.29" cy="356.15" r="145.29" gradientTransform="rotate(-60 1471.192 231.501) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-26" cx="987.93" cy="235.97" r="167.46" gradientTransform="rotate(-60 1130.983 153.38) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-27" cx="945.67" cy="310.45" r="144.77" gradientTransform="rotate(-60 1133.866 201.787) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-28" cx="1191.91" cy="462.24" r="167.87" gradientTransform="rotate(-60 1472.129 300.458) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-29" cx="1173.77" cy="415.05" r="168.51" gradientTransform="rotate(-60 1425.39 269.79) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-30" cx="1080.41" cy="331.08" r="142.26" gradientTransform="rotate(-60 1281.117 215.2) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-31" cx="882.69" cy="277.14" r="150.37" gradientTransform="matrix(.59 -.81 .24 .18 295.73 941.61)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-32" cx="1131.63" cy="626.45" r="198.42" gradientTransform="rotate(-44.46 1668.114 407.197) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-33" cx="1010.86" cy="283.73" r="168.34" gradientTransform="rotate(-60 1182.859 184.428) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-34" cx="851.55" cy="294.04" r="168.24" gradientTransform="rotate(-60 1029.803 191.128) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-35" cx="1038.1" cy="510.56" r="161.12" gradientTransform="matrix(.5 -.87 .72 .41 153.64 1198.61)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-36" cx="1085.39" cy="566.5" r="68.82" gradientTransform="matrix(.56165 .82737 -2.35802 1.6007 1811.62 -1238.48)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-37" cx="945.84" cy="400.9" r="132.97" gradientTransform="rotate(-157.24 898.303 637.21) scale(1 2.18)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-38" cx="742.43" cy="461.86" r="115.75" gradientTransform="rotate(-60 1022.423 300.212) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-39" cx="849.58" cy="534.23" r="118.78" gradientTransform="rotate(-60 976.865 460.74) scale(1 .72)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-40" cx="891.88" cy="609.17" r="102.8" gradientTransform="matrix(.90527 -.42483 .12745 .27158 6.85 822.64)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-41" cx="962.03" cy="611.99" r="99" gradientTransform="rotate(-60 1333.037 397.792) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_170" cx="96.3" cy="775.66" r="116.96" gradientTransform="matrix(-.71 -.7 .21 -.21 1.4 1008.94)" gradientUnits="userSpaceOnUse">
        <stop offset=".34" stop-color="#fbb7b0"/>
        <stop offset=".34" stop-color="#f8aca4"/>
        <stop offset=".35" stop-color="#f29589"/>
        <stop offset=".35" stop-color="#ed8173"/>
        <stop offset=".35" stop-color="#ea7262"/>
        <stop offset=".35" stop-color="#e76857"/>
        <stop offset=".36" stop-color="#e56250"/>
        <stop offset=".37" stop-color="#e5604e"/>
    </radialGradient>
    <radialGradient id="Degradado_sin_nombre_166-42" cx="156.31" cy="738.75" r="107.61" gradientTransform="matrix(-.75551 -.65514 .28826 -.33242 62.8 1085.2)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-43" cx="187.89" cy="732.99" r="107.67" gradientTransform="matrix(-.55 -.84 .25 -.16 107.17 1010.73)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-44" cx="135.02" cy="860.62" r="253.83" gradientTransform="matrix(-.72 -.69 .48 -.5 -179.43 1380.77)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-45" cx="59.42" cy="816.69" r="111.99" gradientTransform="rotate(-130.04 192.584 530.85) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-46" cx="279.47" cy="770.93" r="128.97" gradientTransform="rotate(-122.84 426.465 501.097) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-47" cx="247.33" cy="813.81" r="111.51" gradientTransform="rotate(-123.42 400.619 528.983) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-48" cx="58.88" cy="890.09" r="129.32" gradientTransform="matrix(-.58807 -.80881 .24264 -.17642 -122.48 1094.73)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-49" cx="148.51" cy="912.7" r="129.76" gradientTransform="rotate(-134.18 232.458 714.032) scale(1 .56)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-50" cx="222.05" cy="864.07" r="109.58" gradientTransform="matrix(-.49758 -.86742 .26023 -.14927 107.67 1185.66)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-51" cx="345.34" cy="782.76" r="115.77" gradientTransform="matrix(-.52 -.85 .26 -.16 324.05 1199.83)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-52" cx="94.64" cy="956.29" r="117.04" gradientTransform="rotate(-128.14 257.38 621.593) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-53" cx="325.99" cy="921.68" r="129.67" gradientTransform="rotate(-60 884.737 599.091) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_168" cx="326.26" cy="820.13" fx="364.3" fy="770.002" r="129.59" gradientTransform="rotate(-125.52 474.025 533.088) scale(1 .3)" gradientUnits="userSpaceOnUse">
        <stop offset=".34" stop-color="#fbb7b0"/>
        <stop offset=".34" stop-color="#f8aca4"/>
        <stop offset=".34" stop-color="#f29589"/>
        <stop offset=".34" stop-color="#ed8173"/>
        <stop offset=".35" stop-color="#ea7262"/>
        <stop offset=".35" stop-color="#e76857"/>
        <stop offset=".36" stop-color="#e56250"/>
        <stop offset=".37" stop-color="#e5604e"/>
        <stop offset=".53" stop-color="#e5604e"/>
    </radialGradient>
    <radialGradient id="Degradado_sin_nombre_166-54" cx="194.97" cy="929.12" r="124.3" gradientTransform="matrix(-.81 -.59 .18 -.24 189.67 1269.23)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-55" cx="103.27" cy="945.39" r="124.31" gradientTransform="rotate(-118.64 299.578 614.502) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-56" cx="235.96" cy="867.19" r="130.23" gradientTransform="rotate(-130.14 377.031 563.68) scale(1 .3)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-57" cx="454.15" cy="965.78" r="148.74" gradientTransform="matrix(-.33 -.95 .28 -.1 328.71 1489.67)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-58" cx="383.49" cy="932.96" r="91.49" gradientTransform="matrix(-.35 -.94 .28 -.11 255.68 1390.19)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-59" cx="251.99" cy="1020.31" r="101.85" gradientTransform="rotate(-148.82 292.972 873.495) scale(1 .71)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_166-60" cx="181.66" cy="1037.78" r="125.3" gradientTransform="matrix(-.84498 -.5348 .16044 -.2535 168.69 1398)" xlink:href="#Degradado_sin_nombre_166"/>
    <radialGradient id="Degradado_sin_nombre_178-2" cx="883.12" cy="663.77" r="450.55" gradientTransform="matrix(.52 -.46 .63 .2 8.73 1070.12)" xlink:href="#Degradado_sin_nombre_178"/>
    <radialGradient id="Degradado_sin_nombre_178-3" cx="1213.84" cy="939.11" r="528.79" gradientTransform="matrix(.31 .39 -.78 .62 1263.2 71.36)" xlink:href="#Degradado_sin_nombre_178"/>
    <radialGradient id="Degradado_sin_nombre_178-4" cx="403.7" cy="1159.46" r="211.93" gradientTransform="matrix(.41707 -.90887 1.75412 .80495 -1794.37 594.81)" xlink:href="#Degradado_sin_nombre_178"/>
    <radialGradient id="Degradado_sin_nombre_178-5" cx="603.49" cy="524.24" r="281.11" gradientTransform="matrix(.65 .28 -.46 1.32 487.89 -287.59)" xlink:href="#Degradado_sin_nombre_178"/>
    <linearGradient id="Degradado_sin_nombre_33" x1="608.14" y1="1790.19" x2="608.14" y2="1768.19" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop offset=".09" stop-color="#020202"/>
        <stop offset=".13" stop-color="#0a0a0a"/>
        <stop offset=".17" stop-color="#171717"/>
        <stop offset=".2" stop-color="#2a2a2a"/>
        <stop offset=".22" stop-color="#424242"/>
        <stop offset=".25" stop-color="#606060"/>
        <stop offset=".27" stop-color="#848484"/>
        <stop offset=".29" stop-color="#aeaeae"/>
        <stop offset=".31" stop-color="#dbdbdb"/>
        <stop offset=".32" stop-color="#fff"/>
    </linearGradient>
    <style>
        .cls-2{fill:#012b23}.cls-3{fill:#003e32}.cls-5{fill:#5e2b27}.cls-81{stroke:#fff;stroke-width:2px}.cls-81,.cls-82,.cls-9{stroke-miterlimit:10}.cls-7{fill:#333e39}.cls-82,.cls-9{fill:none;stroke:#333e39}.cls-9{stroke-width:6px}.cls-16{fill:#cfaca7}.cls-33{fill:#fbb7b0}.cls-81{fill:#9d0208}.cls-82{stroke-width:34px}
        
        .monte{
            transform-origin: 600px 1730px;
            animation: monte 6s ease-in-out forwards;
        }
        .monte1{
            transform: scaleX(0.1) scaleY(.2);
            animation-delay: 3.5s;
        }
        .monte2{
            transform: scaleX(0.1) scaleY(.2);
            animation-delay: 3s;
        }
        @keyframes monte{
            30%{
                transform: scaleX(0.5) scaleY(0.6);
            }
            50%{
                transform: scaleX(0.4) scaleY(0.6);
            }
            100%{
                transform: none;
            }
        }
        .hoja{
            transform: scale(0);
            animation: hoja 2s ease-out forwards;
        }
        .hoja .cuerpo{
            fill: #4c5e59;
        }
        .hoja1{
            transform-origin: 602px 1350px;
            animation-delay: 8s;
        }
        .hoja2{
            transform-origin: 540px 830px;
            animation-delay: 9s;
            animation-duration: 3s;
        }
        .hoja3{
            transform-origin: 560px 735px;
            animation-delay: 10s;
        }
        .hoja4{
            transform-origin: 610px 930px;
            animation-delay: 8s;
            animation-duration: 3s;
        }
        .hoja5{
            transform-origin: 620px 1300px;
            animation-delay: 8s;
        }
        @keyframes hoja{
            to{
                transform: none;
            }
        }
        .flor2{
            transform: scale(0.2);
            transform-origin: 600px 1730px;
            animation: flor2 10s ease-in forwards;
        }

        @keyframes flor2{
            0%{
                transform: scale(0);
            }
            30%{
                transform: scale(0.3);
            }
            50%{
                transform: scale(0.7);
            }
            70%{
                transform: scale(0.5);
            }
            100%{
                transform: scale(1);
            }
        }
        .flor2-capullo{
            transform-origin: 510px 700px;
            animation: flor2-capullo 10s ease forwards;
        }
        @keyframes flor2-capullo{
            0%{
                transform: scale(0);
            }
            30%{
                transform: scale(0);
            }
            50%{
                transform: scale(0.6);
            }
            70%{
                transform: scale(0.4);
            }
            100%{
                transform: scale(1);
            }
        }
        .flor1{
            transform: scale(0.2);
            transform-origin: 600px 1730px;
            animation: flor1 10s ease-out forwards;
        }
        @keyframes flor1{
            0%{
                transform: scale(0);
            }
            40%{
                transform: scale(0.3);
            }
            50%{
                transform: scale(0.2);
            }
            70%{
                transform: scale(0.5);
            }
            100%{
                transform: scale(1);
            }
        }
        .flor1-capullo{
            transform-origin: 450px 1120px;
            animation: flor1-capullo 10s ease forwards;
        }
        @keyframes flor1-capullo{
            0%{
                transform: scale(0);
            }
            40%{
                transform: scale(0);
            }
            50%{
                transform: scale(0);
            }
            70%{
                transform: scale(0.4);
            }
            100%{
                transform: scale(1);
            }
        }
        .flor3{
            transform: scale(0.2);
            transform-origin: 600px 1730px;
            animation: flor3 10s ease forwards;
        }
        @keyframes flor3{
            0%{
                transform: scale(0);
            }
            40%{
                transform: scale(0.3) rotate(-10deg);
            }
            50%{
                transform: scale(0.7);
            }
            70%{
                transform: scale(0.5);
            }
            100%{
                transform: scale(1);
            }
        }
        .flor3-capullo{
            transform-origin: 740px 680px;
            animation: flor3-capullo 10s ease forwards;
        }
        @keyframes flor3-capullo{
            0%{
                transform: scale(0);
            }
            40%{
                transform: scale(0);
            }
            50%{
                transform: scale(0.6);
            }
            70%{
                transform: scale(0.4);
            }
            100%{
                transform: scale(1);
            }
        }
        .florcerrada{
            animation: florcerrada 5s ease forwards;
            animation-delay: 6s;
        }
        @keyframes florcerrada{
            0%{
                opacity: 1;
            }
            40%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .flor1 .hilera{
            transform-origin: 200px 900px;
            animation: hilera 3s ease forwards;
        }
        .flor1 .hilera1{
            animation-delay: 8s;
        }
        .flor1 .hilera2{
            animation-delay: 8.2s;
        }
        .flor1 .hilera3{
            animation-delay: 8.4s;
            animation-timing-function: ease-in;
        }
        .flor2 .hilera{
            transform-origin: 600px 720px;
            animation: hilera 3s ease forwards;
        }
        .flor2 .hilera1{
            animation-delay: 8.4s;
        }
        .flor2 .hilera2{
            animation-delay: 9s;
        }
        .flor2 .hilera3{
            animation-delay: 8.5s;
            animation-timing-function: ease-in;
        }
        .flor3 .hilera{
            transform-origin: 860px 720px;
            animation: hilera 8s ease forwards;
        }
        .flor3 .hilera1{
            animation-delay: 8s;
        }
        .flor3 .hilera2{
            animation-delay: 9s;
        }
        .flor3 .hilera3{
            animation-delay: 7s;
            animation-timing-function: ease-in;
        }
        @keyframes hilera{
            to{
                transform: scale(0.7);
            }
        }
        .petalo{
            fill: #e5604e;
        }
    </style>
    <mask id="mask" x="552.14" y="1767.97" width="111" height="24.22" maskUnits="userSpaceOnUse">
        <path fill="url(#Degradado_sin_nombre_33)" d="M553.14 1768.19h110v22h-110z"/>
    </mask>
</defs>
<g style="transform: translate(-70px, -50px);">
    <ellipse class="cls-2" cx="592.37" cy="1890.62" rx="72" ry="42.5" transform="rotate(-45 592.371 1890.622)"/>
    <path class="cls-3" d="M632.92 1833.28s-61.91 99-95.23 101.42c0 0 2.68 14.42 9.68 5.42 0 0 61.1-10.67 85.55-106.84zM765.37 1837.12a311.95 311.95 0 01-79 83 83 83 0 0033.54-5.25c39.17-15 64.81-61.26 55.46-73.75-1.37-1.83-4.1-3.73-10-4z"/>
    <path class="cls-2" d="M774.91 1822c-5.88-8.06-44.75 3.7-69.53 29.74-29.59 31.09-26.43 69.21-25 71.35a7.66 7.66 0 002 2 6.72 6.72 0 003 1 399.31 399.31 0 0055.46-52c17.92-20.32 39.43-44.73 34.07-52.09z"/>
    <path class="cls-2" d="M791 1833.18c-1.4-1.53-2.8-3.06-5.1-3.46-15.55-2.73-24.28 54.86-65.57 80a86.28 86.28 0 01-35.94 11.75c-.9.25-2.37.79-2.61 1.86a2.38 2.38 0 00.59 1.84c1.74 2.3 45.85 14.58 79.22-10.88 28.72-21.97 42.72-66.66 29.41-81.11z"/>
    <path class="cls-3" d="M775 1822v.07z"/>
    <path d="M735.37 1888.12s44-66 79-96" stroke-miterlimit="10" stroke="#012b23" stroke-width="4" fill="none"/>
    <circle class="cls-2" cx="813.87" cy="1793.62" r="4.5"/>
    <path class="cls-3" d="M664.68 1764.64a339.32 339.32 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.79c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.58-4-52.47-22.39-58.48a22.86 22.86 0 00-10.91-.68z"/>
    <path class="cls-2" d="M667.49 1747.73c-8.5-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.51a7.77 7.77 0 002.61 1.09 6.91 6.91 0 003.16-.22 400.36 400.36 0 0031.51-69.19c8.86-25.69 19.46-56.44 11.72-61.19z"/>
    <path class="cls-2"  d="M730.19 1791c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.83 53.65-69.26 76.78a86.42 86.42 0 01-36.45 10c-.91.21-2.4.68-2.7 1.74a2.42 2.42 0 00.51 1.87c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.54 45.8-64.49 33.19-79.54z">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-30 640 1860"
          to="0 640 1860"
          dur="2s"
          fill="freeze"
          begin = "0s"
          id="semilla"
          />
    </path>
    <path class="cls-3" d="M690.24 1769v.08z"/>
</g>
<g style="opacity: 0.2">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <path class="cls-2" d="M599.09 1721.42a340.06 340.06 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.84c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.59-4-52.47-22.39-58.49a22.84 22.84 0 00-10.91-.72z"/>
    <path class="cls-3" d="M601.9 1704.51c-8.51-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.5a7.53 7.53 0 002.61 1.09 6.88 6.88 0 003.15-.21 399.86 399.86 0 0031.52-69.19c8.82-25.7 19.46-56.45 11.72-61.19z"/>
    <path class="cls-3" d="M664.6 1747.76c-1.33-1.59-2.66-3.19-4.93-3.7-15.41-3.45-26.83 53.66-69.26 76.79A86.42 86.42 0 01554 1830.9c-.92.21-2.4.68-2.7 1.74a2.4 2.4 0 00.51 1.86c1.63 2.38 45.11 16.71 79.64-7.16 29.68-20.54 45.76-64.52 33.15-79.58z"/>
    <path class="cls-2" d="M624.65 1725.73v.08z"/>
    <path d="M862.92 1881.23c-15.27 38-74.17 47.21-138.74 57.35a495.05 495.05 0 01-155-.37c-180 24.24-207.92-18.48-213.66-30.27-29.78-61.14 84.87-216.77 226.13-231.47 2.53-.27 5.74-.57 9.58-.8a249.93 249.93 0 0128.65.19c88.2 6.18 149.35 49.72 149.35 49.72 43.59 31.09 114.28 104.48 93.69 155.65z" fill="#472523"/>
    <path class="cls-5" d="M487.07 1851.37l-5.48 3.06-8.59-2.2-5.25-5.81 2.06-5.04 7.81-.47 7.68 4.44 1.77 6.02zM408.07 1870.37l-5.48 3.06-8.59-2.2-5.25-5.81 2.06-5.04 7.81-.47 7.68 4.44 1.77 6.02zM618.96 1850.23l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.82.82 7.79-4.09 7.87-5.93 2.04zM466.95 1902.23l-3.3-5.33 1.82-8.69 5.56-5.5 5.13 1.82.82 7.79-4.09 7.87-5.94 2.04zM698.96 1824.23l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.82.82 7.79-4.09 7.87-5.93 2.04zM769.96 1894.23l-3.31-5.33 1.82-8.69 5.56-5.5 5.13 1.82.82 7.79-4.09 7.87-5.93 2.04zM476.3 1813.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99zM586.3 1898.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99zM594.3 1813.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99zM503.3 1750.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99zM721.3 1744.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99zM547.3 1784.03l-6.26-.47-5.95-6.59-1.16-7.74 4.5-3.06 6.77 3.92 3.95 7.95-1.85 5.99z"/>
</g>
<g class="monte monte1">
    <path d="M597.08 1668.05c-7.31-263.75-12.61-470.44-9.94-621.76.86-48.18 3.42-141.53-54.94-225.24-13.55-19.45-46.39-65.56-106.09-93.73-118-55.68-307.32-26.63-320-54.27-.49-1-4-9.39-5.3-9-1.56.47 1.19 13.68 2.08 18 4.72 22.74 27 71.89 50.74 97.92 52.42 57.55 144.46 38 218.32 88.26 76.41 52 52.85 124 162.16 465.31 7 22 15.93 49.13 25.9 88.51a1260.82 1260.82 0 0137.07 246z" fill="#0f2622"/>
    <path class="cls-9" d="M107 684.05c55.79 157.51 343.69 9.55 391.83 234 59.6 277.85 87.89 529.21 101 734.35"/>
</g>
<g class="monte monte2">
    <path d="M607.14 1672.19c-2.08-28.82-28.77-413.25 7.17-612.46a531.78 531.78 0 0146.38-141.18c22.44-45.44 50.13-99.83 109.16-137 32.65-20.58 62.1-27.84 99.87-37.16 51.16-12.62 78-10.75 144.39-17 32.43-3.07 80.6-8.68 139.74-19.74-7.73 72.55-33.34 104-55.35 119.23-35.56 24.66-68.87 12.15-142.84 40.64s-38.93 13.63-73.16 37.16c-112.94 77.65-184 319-184 319-33.24 112.61-69.65 264.05-91.36 448.51z" fill="#132421"/>
    <path class="cls-9" d="M1143.79 718a97.77 97.77 0 01-18.06 34.28c-61.28 74.08-202.89 2-290.84 71-9.6 7.53-25 37-55.75 95.23-32.19 60.93-80.35 155.84-99.09 200.52-77.86 185.63-73.52 519.3-72.91 553.12"/>
</g>
<g class="all-flor2 flor2">
    <g class="hoja hoja3">
        <path class="cuerpo" d="M614.43 732.1c31.73 12.55 64.77-21.57 70.31-27.29 38.72-40 34.59-102.09 33.72-112.86l-4.9-99.37a63.38 63.38 0 01-11.34 21.53c-11.4 13.83-24.52 15.89-41.47 23.73A179.63 179.63 0 00620.43 565c-10.12 9.22-30.56 32.76-35.56 89.54-1.25 3.65-8.87 27 2.41 50.64 1.37 2.82 9.92 20.11 27.15 26.92z" fill="url(#Degradado_sin_nombre_178-5)"/>
        <path class="cls-7" d="M610.79 598.48s-10.91 18.56-8.43 67.3c0 0 10.18 48.13-6.24 54.05-5.13 1.85-9.33 3.46-12.69 4.81-17 4.37-36.42 9.15-36.42 9.15s15.73 13.11 74.79-16.6c0 0 24.51 5.88 62.4-27.66 0 0-31.62 25.25-61.44 24.84 0 0 13.29-13.69 22.28-26.63 0 0 38.48-3 48.72-26.37 0 0-29.85 23.42-46.8 20.74l16.29-26s37.4-20.22 43.2-39c0 0-32.78 33.78-41.22 31.49a134.58 134.58 0 0013.85-28.92s28.35-29.22 26.11-37.9c0 0-18.07 27.78-25.77 28.38a133.08 133.08 0 0016-40.27s1.56 3.89 14.31-18.41l-14.17 14.61 11.81-43.32s-5 14.84-11.71 34.32c-.46-3.7-1.73-14-2.21-20.36-.33 5.89-1 15.87-.22 24.43.07.88.1 1.77.09 2.68-3 8.59-6.24 17.8-9.51 26.87-1.89-5.61-7.51-25.62-.22-47.09 0 0-11.89 19.79-1 48.73l-19.27 50.48 2.66-5.68c-1.06 2.44-2 4.56-2.9 6.31l.24-.63-.88 1.89c-.11.21-.22.4-.32.6-.67-6.1-6.94-64.45-4.87-79.66-2.26 9.14-7.42 37.52 2.13 79.81 0 0-2.36 9-9.23 21.77-1.92 3.41-4 7-6.23 10.55-1.56 2.41-3.25 4.88-5.1 7.4 0 0-3.56-33.2-8.92-49.65 0 0-4.75-33.58-.72-50.55 0 0-10.92 42.4 5.65 102.26 0 0-20.59 26.7-30.05 29.13 0 0 7.22-11.11.31-55.28 0 .03 2.83-54.18 5.7-62.62zm42.45 63.21c-.43.79-.87 1.6-1.33 2.42 1.48-3.34 1.72-3.64 1.33-2.42z"/>
    </g>
    <g class="hoja hoja2">
        <path class="cuerpo" d="M446.41 822.5c-18.63 10-55.29 8.61-166.4-62.92-81-52.16-121.54-78.24-163-130A462.21 462.21 0 0149 512.94a289.28 289.28 0 0040 28.36c35 20.6 62.09 26.46 95.68 37.72h0c42.19 17.14 81.23 34.27 96.75 41.53 45.8 21.45 79.38 49 146.54 104a153.2 153.2 0 0132.75 40.16c10.38 18.27 10 26.65 9.05 31.43-3.09 15.41-18.85 23.92-23.36 26.36z" fill="url(#Degradado_sin_nombre_178)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-7" d="M397.53 739.4c28.47 51.47 51.58 66.42 51.58 66.42-19.09-5-80.36-41.67-80.36-41.67C343 696 284.42 642.68 284.42 642.68c22.83 21.27 45.39 60.52 45.39 60.52 5.63 18.55 29.94 57.59 29.94 57.59q-8.43-5.14-15.9-10c-7.19-4.75-14.26-9.54-20.83-14.06-24-16.89-36.49-28.18-36.49-28.18-22-48.62-57.42-83.84-69.89-95.31 17.74 18.72 60.42 87.35 64.87 94.52l-1.12-.79-3.32-2.47 1 .81c-3.14-2.29-6.84-5-11-8.22l10 7.41-80.87-64.89c-7.28-32.29-46.7-58.7-46.7-58.7 32.79 27.4 41.25 50.16 43.07 56.47A9122.26 9122.26 0 01150.86 603c-.86-1.09-1.64-2.16-2.31-3.19-6.59-10.12-16.92-22.23-22.94-29.37 5 7.46 12.26 19.6 14.85 23.94C110.47 569.5 88 550.6 88 550.6l61 54.61-38.7-20.69c43.26 29.6 42.46 25.29 42.46 25.29 30.9 29.47 65.56 51.88 65.56 51.88-14.24-2.44-72-39.8-72-39.8 4 9.92 81.42 51.3 81.42 51.3A555.07 555.07 0 00279 711c-12.91.87-102.4-47-102.4-47 27.68 23.86 112.88 56.46 112.88 56.46l52.93 34.78c-27.69-.56-102.4-35.33-102.4-35.33 39.77 30.32 111 42.51 111 42.51 27.99 17.58 64.23 36.94 64.23 36.94C362.55 793.2 283 755.85 283 755.85c98.36 48.7 136.54 47.1 136.54 47.1 132.5 48.83 148.37 36.6 148.37 36.6s-39-10.06-73.23-19.1c-7.22-2.36-16.19-5.24-27-8.6-34.67-10.77-61-66.27-61-66.27-40.56-57.93-77.1-82.65-77.1-82.65 12.88 10.78 67.95 76.47 67.95 76.47zM317 732.54q-2.37-1.63-4.6-3.21c-1.83-1.54-1.13-1.12 4.6 3.21z"/>
    </g>
    <path class="cls-82" style="display: ; stroke-linecap: round;" d="M604.91 1723.33a4442.46 4442.46 0 00-20.7-706.72C569.31 880.53 549 752.9 525.39 634.44"></path>
    <g class="flor2-capullo">
        <path class="petalo" d="M472.2 412.31c69.12-10.56 74.56-170.84 40.87-263.8-11.23-31-28.9-65.65-44.67-81.23-19.79-19.55-17.64 10.5-20.81 27.19-3.87 20.42 1.77 43.08 11.56 83.74 23.87 99.23-61.67 245.51 13.05 234.1" fill="url(#Degradado_sin_nombre_166)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M460.23 390.43c-70 2.36-106-142.29-90.62-232.56 5.13-30.09 19.47-53.46 24.34-73.23 3.62-14.7 20.4-3.46 26.7 11.16 7.72 17.88 19.31 49.69 28.86 76.49 31.91 89.59 86.41 215.57 10.72 218.14" fill="url(#Degradado_sin_nombre_166-2)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M427.28 415.92c-69.44 9.27-119.53-131.12-113.14-222.48 2.13-30.45 14.09-55.12 17-75.26 2.15-15 19.95-5.46 27.67 8.46 9.45 17 24.12 47.54 36.27 73.27 40.6 86 107.27 206 32.21 216" fill="url(#Degradado_sin_nombre_166-3)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M538 386.35c77.93-10.43 84.48-162.65 46.74-250.72-12.58-29.36-28.59-43.83-38.51-62.83-7.39-14.15-26-18.51-29.57-2.64-4.42 19.41-12.52 65.87-16.91 94.61-14.7 96-46 232.84 38.25 221.58" fill="url(#Degradado_sin_nombre_166-4)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M577.05 414.17c78.35-6.69 92.16-158.43 58.68-248.21-11.16-29.92-26.47-45.14-35.47-64.59-6.7-14.48-25-19.73-29.41-4.05-5.34 19.18-15.65 65.19-21.41 93.69-19.28 95.22-57.08 230.38 27.61 223.16" fill="url(#Degradado_sin_nombre_166-5)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-16" d="M415.35 359.25c-153 32.67-91.45-83.92-49.93-158.27 13.84-24.78 47.19-48.6 59.56-65.53 9.21-12.61 35.54-18 48-9.88 15.26 10 54 17.62 72.5 33.47 61.75 53 35.25 164.89-130.14 200.21"/>
        <path class="petalo" d="M421.33 526.37C352 535.08 296.08 363.7 298.84 253.58c.92-36.7 11.94-66.08 14-90.31 1.56-18 13.55-19.2 21.85-2.11 10.17 20.91 21.46 62.06 25 108.79 8.6 114 136.57 247 61.61 256.42" fill="url(#Degradado_sin_nombre_166-6)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M453.6 492.92C375.11 499.74 332 354 347.56 260.62c5.19-31.11 17.31-48.57 22.4-69.1 3.79-15.28 20.84-23.53 28.19-9 9 17.81 28.08 61 39.3 87.82 37.49 89.67 101 215.18 16.15 222.55" fill="url(#Degradado_sin_nombre_166-7)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M575.81 499.89c69.49-9.17 77.25-189.57 44.78-295.65-10.82-35.36-29.43-61-38-84-6.4-17.09-18.32-15.17-21.73 3.51-4.19 22.86-4 65.63 5.24 111.84 22.52 112.76-65.39 274.22 9.73 264.31" fill="url(#Degradado_sin_nombre_166-8)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M571.28 542.75c68.32-15.59 59-196 16.57-298.62-14.13-34.21-35.1-58.07-45.85-80.13-8-16.44-19.68-13.42-21.31 5.51-2 23.15-4.56 78.46-5.61 112.65-3.49 114.25-17.69 277.44 56.17 260.59" fill="url(#Degradado_sin_nombre_166-9)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M518.45 503.59c-70.08-.34-100.92-149.17-82.33-240.56 6.19-30.46 21.36-53.72 26.93-73.66 4.15-14.85 20.52-2.73 26.3 12.41 7.08 18.53 17.54 51.4 26.13 79.1 28.73 92.55 78.74 223.08 3 222.71" fill="url(#Degradado_sin_nombre_167)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M415.58 574.14c-67.89 17.55-138.95-126.48-146.29-224.5-2.45-32.67 5.78-60.27 5.64-82.05-.1-16.22 11.67-18.94 21.46-5 12 17.1 26.94 52 34.7 92.91C350 455.4 489 555.18 415.58 574.14" fill="url(#Degradado_sin_nombre_166-10)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M634.77 549.6c69.69-5.42 87.34-164.8 60.86-260-8.83-31.72-23.79-67.58-38.32-84.28-18.23-21-18.38 9.17-22.81 25.57-5.42 20.11-1.5 43.11 5.13 84.38 16.22 100.68-80.19 240.2-4.86 234.33" fill="url(#Degradado_sin_nombre_166-11)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M497 624.74c-70 7.88-126.42-163.77-123.67-273.61.93-36.61 12-65.79 14.15-89.94 1.57-18 13.67-19 22.05-1.84 10.27 21 32.69 71.82 46.05 103.43 44.63 105.61 117.06 253.44 41.42 262" fill="url(#Degradado_sin_nombre_166-12)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M448.25 639.64c-69.72 9.77-130.81-160.29-131-270.16-.07-36.62 10.25-66.09 11.71-90.29 1.09-18 13.15-19.36 22-2.44 10.83 20.69 34.63 70.91 48.83 102.14 47.48 104.37 123.88 250.19 48.5 260.75" fill="url(#Degradado_sin_nombre_166-13)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M532.29 591.8c-70 1.31-50.25-167.56-36.56-274.49 4.56-35.64 18.47-63.1 23-86.47 3.35-17.4 15.42-17.29 22 .21 8 21.4 27.09 47 37.15 79C611.49 417.22 608 590.39 532.29 591.8" fill="url(#Degradado_sin_nombre_166-14)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M642.89 579.06c-69.31 10-70.77-160-70.53-267.78.08-35.93 10.45-64.91 12-88.66 1.15-17.68 13.14-19.08 21.86-2.54 10.67 20.23 32.78 43.23 46.78 73.79 46.69 102.13 64.82 274.34-10.11 285.19" fill="url(#Degradado_sin_nombre_166-15)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M516.93 619.2c-66.65-19.07-68.75-166.51-70.31-275.94 0 0-.33-23 23.1-97.21 1.25-3.94 4.09-12.55 9-13.08 5.49-.6 10.73 9.07 13.1 13.56 24.52 46.29 36.77 69.47 39.18 79.06 33.42 132.79 66.92 265.88 19.28 291.64-13.91 7.53-29.53 3.06-33.35 1.97z" fill="url(#Degradado_sin_nombre_166-16)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M491.78 635.18c-62.72 25.38-124.07-52.69-128.2-114.32-1.38-20.55 6.9-40 7.35-54.05.34-10.42 11.2-14.62 19.81-7.64 10.53 8.53 23.32 27.9 29.36 52.66 14.73 60.43 139.49 95.91 71.68 123.35" fill="url(#Degradado_sin_nombre_166-17)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M532.84 631.18c-66.47 20.23-130.29-85.73-133.94-161.76-1.22-25.35 7.74-47.74 8.38-64.78.48-12.69 12-15.95 21-5.94 11 12.24 35.38 42.42 50 61.3C527 523.1 604.7 609.31 532.84 631.18" fill="url(#Degradado_sin_nombre_166-18)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M546.31 630.48c-69.14 1.85-39.84-99.29-20.14-163.35 6.56-21.35 21.87-37.95 27.67-52 4.31-10.44 16.21-10.56 21.69-.21 6.71 12.66 24 27.65 32.06 46.64C634.54 525 621 628.48 546.31 630.48" fill="url(#Degradado_sin_nombre_166-19)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M600.12 625c68.58-3.26 90-123.86 66.47-196.32-7.85-24.15-24.06-42.14-30.68-57.89-4.93-11.72-16.72-10.93-21.5 1.45-5.84 15.15-17.66 51.56-24.45 74.13C567.27 521.74 526 628.5 600.12 625" fill="url(#Degradado_sin_nombre_166-20)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-33" d="M635.92 608.87c-2.76 2-6.88 5.08-11.91 8.71-20.81 15.07-29.24 20.32-36.88 26a177 177 0 00-34.12 34l-5.19 2-10.33-1.58-10.6 3.53-3.89-2.95-3 4a243.8 243.8 0 00-49.27-26.36c-16.07-6.3-35.09-11.65-57.73-27.64-3.42-2.42-6.17-4.54-8-6l34.75.69 17.25-6.51 25 5.52 18.52-11.75 25 5.52L558 602.32l29.27 6.93z"/>
        <g class="florcerrada" style="transform: scale(0.93); transform-origin: -300px 120px;">
            <path class="cls-81 hilera hilera1" d="M521.94,446.72c-86.64-3-109.86-204.39-77.71-326.75,10.71-40.79,29-87.18,46.93-109.22,22.48-27.64,22.91,10.61,28.55,31.2C526.6,67.14,522,96.57,514,149.35c-19.35,128.8,101.57,300.56,7.92,297.37"/>
            <path class="cls-81 hilera hilera1" d="M559,404.11c85.13-21.46,85.51-210.78,40.13-315.77-15.13-35-39.37-58.57-51.12-81-8.75-16.72-25.63,2.86-28.89,22.92-4,24.54-8.5,67.45-12,103.54C495.19,254.36,466.93,427.3,559,404.11"/>
            <path class="cls-81 hilera hilera1" d="M695.18,411.32c78.2-41.84,33.52-223.93-35.87-313.55C636.17,67.9,606.84,51.27,590,32.61c-12.53-13.9-24.4,9.13-22.81,29.23,1.94,24.57,7.73,66.95,12.85,102.53,17.1,118.88,30.6,292.17,115.14,247"/>
            <path class="cls-81 hilera hilera1" d="M402.57,448.49c-95-19.75-83.91-213.32-26.19-321.84,19.23-36.17,40.84-53.17,55.49-76.43,10.91-17.32,34.4-21.29,36.87-.87,3,25,7.17,84.57,9,121.39,6.08,123,27.53,299.11-75.15,277.75"/>
            <path class="cls-81 hilera hilera1" d="M387,502.39C290.28,492,283.45,298.85,331.07,185.6c15.87-37.75,35.88-56.71,48.36-81.21,9.3-18.23,32.39-24.45,36.75-4.43,5.32,24.5,15,83.22,20.2,119.57C453.81,341,491.51,513.64,387,502.39"/>
            <path class="cls-81 hilera hilera1" d="M744.53,472c73.21-50.15-6-261.87-93.94-365.26C621.28,72.27,588,53.37,567.17,31.88c-15.47-16-27.86-7-22.58,16.42C551.05,77,572.1,126,604.93,173.82,685,290.55,665.39,526.21,744.53,472"/>
            <path class="cls-81 hilera hilera1" d="M654.44,438.34c85.24-49.56,32.79-235.73-45.17-323.73-26-29.33-50-39.12-68.91-57.27-14-13.5-37-9.92-34.94,10.88C508,93.66,517,153.38,523.3,190c21,122.47,39,301.87,131.14,248.3"/>
            <path class="cls-81 hilera hilera1" d="M359.37,531.17c-82-27.15-38.34-252,32.44-375.85,23.59-41.27,53.83-68.8,71.05-95.25,12.82-19.68,26.78-14.6,25.45,9.28-1.63,29.22-14.46,82.08-39.3,137.14-60.62,134.33-1,354-89.64,324.68"/>
            <path class="cls-81 hilera hilera1" d="M466.1,603.35c-86.58.42-115.73-226.14-87.27-365.76,9.49-46.54,29.63-82.21,37.71-112.7,6-22.7,20.91-22.33,27.15.68,7.63,28.16,23.18,96.05,32.14,138.17C505.76,404.5,559.7,602.9,466.1,603.35"/>
            <path class="cls-81 hilera hilera1" d="M547.89,471.18c83.28-28.65,69.93-221,17.07-324-17.62-34.34-43.48-56.33-56.82-78.2-9.93-16.27-25.33,5-27.13,25.61-2.19,25.25-3.58,69.2-4.49,106.14-3,123.45-18.67,301.39,71.37,270.41"/>
            <path class="cls-81 hilera hilera2" d="M722.92,558.59c86.31-22,73.22-224.51,18.92-337.31-18.1-37.6-44.8-63.08-58.51-87.24-10.22-18-25-13.82-26.91,7.6-2.37,26.2,3.29,73.87,20.76,123.84,42.64,121.92-47.57,316.91,45.74,293.11"/>
            <path class="cls-81 hilera hilera2" d="M450.39,650.71C362,661.63,295.66,469,302.18,344.63c2.17-41.45,10.82-89.58,24.28-113.91,16.88-30.52,25.46,6.69,35.55,25.86,12.34,23.44,13.88,52.87,17.08,105.58,7.82,128.6,166.81,276.74,71.3,288.55"/>
            <path class="cls-81 hilera hilera2" d="M634.63,659.24c86-24.49,64.89-251.94,5.86-378.77-19.69-42.28-47.53-71-62.28-98.13-11-20.22-25.66-15.59-26.77,8.45-1.36,29.42-1.8,99.55-1.39,142.85,1.38,144.72-8.35,352.07,84.58,325.6"/>
            <path class="cls-81 hilera hilera2" d="M687.92,654.49c87.69-18,83.78-246.13,34.39-376.78-16.47-43.55-42.11-74.18-54.79-102.32-9.44-20.94-24.45-17.41-27.37,6.46-3.58,29.2-9.3,99-12.15,142.16-9.54,144.22-34.88,350,59.92,330.48"/>
            <path class="cls-81 hilera hilera2" d="M561.19,644.45c85-26.08-10-220.73-71.56-343.5-20.51-40.93-48.84-68.35-64.11-94.6-11.37-19.53-25.87-14.64-26.44,8.94-.7,28.85-12.87,67-11.5,109.44,4.59,141.7,81.76,347.92,173.61,319.72"/>
            <path class="cls-81 hilera hilera2" d="M486.1,623.56c16.61-18,28.46-46.91-33.3-293.31C447.09,307.47,435,261.37,399.34,215c-5.19-6.76-9.78-12.07-12.83-15.49a182,182,0,0,0-15.13,17.69S341.52,256.94,333,320c-7.22,53.32,17.92,180.58,94.14,333.2C460.11,646.91,477.1,633.28,486.1,623.56Z"/>
            <path class="cls-81 hilera hilera2" d="M608.5,662.35C676.89,608,604.43,435,550.66,306.55c0,0-11.31-27-76.47-102.3-3.46-4-11.16-12.67-17.22-10.92-6.73,1.94-8,15.74-8.45,22.12-5.17,65.8-7.76,98.7-5.71,111.1,28.32,171,56.7,342.44,125.6,349.57C588.55,678.2,604.58,665.47,608.5,662.35Z"/>
            <path class="cls-81 hilera hilera3" d="M610.86,637.9C704.94,663.23,779,541,774.14,452.15c-1.62-29.61-16.85-56-19.94-76-2.3-14.84-18.56-18.94-29.64-7.47-13.57,14-28.47,43.95-32.77,80.39C681.28,538,509.17,610.52,610.86,637.9"/>
            <path class="cls-81 hilera hilera3" d="M590.3,672C689.79,661.52,715,485.21,677.14,382.34c-12.61-34.29-37.06-59-47.47-81.19-7.75-16.55-24.84-14.42-31.16,3.9-7.73,22.41-23.11,76.09-31.85,109.31-29.22,111-83.91,268.95,23.64,257.63"/>
            <path class="cls-81 hilera hilera3" d="M572.05,678.62c92.71-36.34-2.89-154-64.95-227.9-20.69-24.62-50.3-38.05-65.86-53.4-11.57-11.42-27.42-4.9-28.88,11.89-1.79,20.56-16.3,50.12-16.34,79.83-.14,99.26,75.81,228.86,176,189.58"/>
            <path class="cls-81 hilera hilera3" d="M521.83,680.14C441.91,716.59,346.89,592,331.26,495.75c-5.21-32.08,2.69-62,1-83.82C331,395.7,344.88,389.7,357.56,401c15.52,13.81,50.29,48.31,71.23,70,70,72.5,179.43,169.76,93,209.15"/>
            <path class="cls-81 hilera hilera3" d="M437.33,666.66q9.14,6.17,18.78,12.18a607.26,607.26,0,0,0,143.48,65l10.8-7.19,16.05-1.27,12.22-10.61c35.37-25.65,56.46-50.86,69-68.92,10.06-14.43,27.94-43.35,27.9-43.37l-.27.4-26-3.62-26.53,1.05-30.1,21.35-31.15-5.17-30.1,21.35-50.64,0-34.93,25.61Z"/>
        </g>
    </g>
</g>
<g class="all-flor1 flor1">
    <g class="hoja hoja1">
        <path class="cuerpo" d="M500.42 1306.22s-121.35-8.28-137.28-156.73l-7.94-98.06s20.11 44.21 66.18 53.8c0 0 98 46.91 102.09 128.67 0 0 10.38 31.95 4.14 50s-19.61 27.8-27.19 22.32z" fill="url(#Degradado_sin_nombre_178-4)"/>
        <path class="cls-7" d="M501.39 1237.15c-1.85 42.8 7.87 55.06 7.87 55.06-11.09-4-38.11-34-38.11-34 10.69-56.82-7.49-100.82-7.49-100.82 6.89 17.56 6.07 50.19 6.07 50.19-3.87 15.48-3.4 47.92-3.4 47.92-2.45-2.82-4.7-5.56-6.8-8.21-3-3.9-5.87-7.83-8.52-11.54-9.54-13.87-13.44-23.19-13.44-23.19 5.1-40.49-4.62-69.59-8.44-79.06 4.43 15.48 5.23 72.5 5.3 78.45l-.44-.64-1.26-2 .35.66c-1.22-1.87-2.61-4.15-4.15-6.75l3.8 6.09-28.73-53.44c8.48-27-7.73-48.65-7.73-48.65 11.2 22.58 7.53 41.55 6.15 46.82-4.94-9.57-9.88-19.27-14.45-28.31a24.8 24.8 0 01-.27-2.65c-.32-8.4-2.39-18.43-3.57-24.35.31 6.2.28 16.29.25 19.9-10.32-20.51-18-36.09-18-36.09l19.31 45-18.09-16.88c17.52 24.3 18.77 20.69 18.77 20.69a174.1 174.1 0 0023.63 42.77c-8.83-1.88-33.14-32.51-33.14-32.51-1.37 8.26 34.83 42 34.83 42a184.63 184.63 0 0019.66 31.07c-9.28.88-51.13-38.17-51.13-38.17 9.15 19.67 54.41 46 54.41 46l22 28.52c-18.9-.14-56-28.41-56-28.41 14.8 24.95 58.94 34.33 58.94 34.33 12 14.37 28.95 30.2 28.95 30.2-33.84-4.54-73.21-34.92-73.21-34.92 47.69 39.71 74.69 37.92 74.69 37.92 71.17 39.38 87.25 28.94 87.25 28.94s-22.73-8-42.63-15.15c-4-1.9-9-4.2-15.08-6.9-19.46-8.62-14.44-54.82-14.44-54.82-3.8-48.07-18.72-68.36-18.72-68.36 4.43 8.88 15.01 63.29 15.01 63.29zm-52.81-4.81l-1.84-2.63c-.61-1.28-.29-.94 1.84 2.63z"/>
    </g>
    <path class="cls-82" style="display: ; stroke-linecap: round;" d="M604.91 1701.33a879.21 879.21 0 004.72-138.16c-3-67.62-10.26-198.55-85.93-337.52-23.55-43.26-63.19-104.67-128.21-167"></path>
    <g class="flor1-capullo">
        <path class="petalo" d="M286.47 928c-48.72 39-157.24-54.31-197.91-132.63-13.56-26.13-25.64-58.68-26.34-78.45-.88-24.81 17.56-5.23 30.43 2.78 15.75 9.8 27.21 27.2 48 58.2 50.72 75.65 198.48 107.91 145.82 150.1" fill="url(#Degradado_sin_nombre_170)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M284.56 899.62c40.43-47.7-40.89-153-112.59-192.2-23.9-13.08-48.2-16-64.73-23.51-12.3-5.61-13.72 12.36-7 24.86 8.24 15.3 24.09 41 37.57 62.56 45 71.94 103 179.84 146.73 128.29" fill="url(#Degradado_sin_nombre_166-42)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M312 899.35c46.78-41.42-18.65-157.25-84-206.35-21.79-16.35-45.42-22.7-60.7-32.52-11.37-7.31-15.34 10.27-10.46 23.61 6 16.32 18 44 28.23 67.28C219.35 829 261.33 944.12 312 899.35" fill="url(#Degradado_sin_nombre_166-43)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M224.26 966.51C167.1 1007.22 70 912 41 831.57c-9.7-26.8-8.08-46-13.2-64.43-3.8-13.72 5.64-27.88 17.67-19.74 14.71 10 48.31 35.31 68.7 51.36C182.24 852.4 286 922.5 224.26 966.51" fill="url(#Degradado_sin_nombre_166-44)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M224.91 1006.8c-55.63 42.77-156.1-48.86-188.1-128.16-10.67-26.44-9.75-45.64-15.54-63.91-4.3-13.58 4.62-28.07 16.93-20.38 15.07 9.42 49.57 33.53 70.53 48.83 70 51.11 176.32 117.38 116.18 163.62" fill="url(#Degradado_sin_nombre_166-45)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-16" d="M286.34 852.61c107.83-88.68-7.78-110.49-82.77-122.81-25-4.11-60.16 5.94-78.87 5.17-13.92-.58-32.34 14.8-33.57 28-1.52 16.2-17.72 47.51-16.92 69.23 2.67 72.55 95.55 116.24 212.13 20.37"/>
        <path class="petalo" d="M384.53 960.1c49-38.59-24.81-181.54-96.5-248.82-23.89-22.42-49.46-33.84-66.17-47.69-12.43-10.32-20.68-3.43-15 12.56 6.91 19.56 26 52.53 53.44 84.07 67 76.94 71.28 241.59 124.26 199.88" fill="url(#Degradado_sin_nombre_166-46)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M349.06 961.05c52.46-46.81-15.85-164-86-211-23.39-15.67-42.15-18.49-58.6-27.75-12.24-6.89-28-.86-23.07 12.83 6.07 16.74 22.42 55.57 33 79.28 35.31 79.23 78 197.28 134.68 146.68" fill="url(#Degradado_sin_nombre_166-47)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M306.93 1026.07c-39.48 48.53-180.22-29.95-245.66-104.24-21.82-24.77-32.63-50.93-46.07-68.2-10-12.85-3-21 12.83-14.88 19.33 7.52 51.75 27.67 82.56 56.3 75.17 69.86 239 78.56 196.34 131" fill="url(#Degradado_sin_nombre_166-48)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M327.7 1063.62c-48.9 39-169.54-67.94-217.57-154.63-16-28.9-21-56.8-30.41-76.57-7-14.71 1.59-21.19 15.7-11.79 17.27 11.49 57.29 40.48 81.73 58.78 81.65 61.14 203.41 142.06 150.55 184.21" fill="url(#Degradado_sin_nombre_166-49)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M313.21 1019.48c46-42.37-23.15-159.06-90.36-208.15-22.4-16.37-46.39-22.58-62-32.38-11.67-7.3-15.17 10.54-9.89 24 6.48 16.47 19.35 44.44 30.34 67.87 36.7 78.31 82.21 194.46 132 148.66" fill="url(#Degradado_sin_nombre_166-50)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M429.28 975.82c50.93-36.35-6.79-167.55-69.6-228.79-20.93-20.42-44.53-30.62-59.34-43.21-11-9.36-19.64-2.88-15.7 11.83 4.82 18 20.09 48.23 43.62 77 57.42 70.24 45.95 222.46 101 183.15" fill="url(#Degradado_sin_nombre_166-51)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M286.33 1104.79c-44.26 44-162.31-36.94-211.23-110.28-16.3-24.45-31.84-55.45-34.66-75C36.89 895 57.34 912.42 71 919c16.73 8 30 24.06 54 52.59 58.63 69.62 209.12 85.7 161.28 133.22" fill="url(#Degradado_sin_nombre_166-52)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M436.2 1048.64c40.84-47.76-57.75-175.38-140.29-228.31-27.52-17.64-54.64-24-73.54-34.55-14.07-7.84-20.88.59-12.4 15.37 10.37 18.08 36.71 60.1 53.38 85.79 55.71 85.83 128.71 213.33 172.85 161.7" fill="url(#Degradado_sin_nombre_166-53)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M457.33 1036.13C504.9 995.07 426.7 854 353.08 789.27c-24.54-21.59-50.38-32-67.48-45.26-12.73-9.86-20.73-2.56-14.58 13.33 7.52 19.44 27.23 64.95 39.83 92.86 42.12 93.25 95 230.31 146.48 185.93" fill="url(#Degradado_sin_nombre_168)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M387.33 1058.25c37.9-49.69-94.06-124.61-178.23-171.2-28.06-15.53-55.16-20-74.35-29.11-14.29-6.78-20.58 2-11.47 15.94 11.15 17.1 19.51 44.3 37.27 68.47 59.33 80.74 185.8 169.63 226.78 115.9" fill="url(#Degradado_sin_nombre_166-54)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M327 1123.52c41.86-46.42-83.49-131.93-163.55-185.28-26.68-17.79-53.32-24.49-71.7-35.13C78 895.18 71 903.37 79 918.05c9.7 18 15.8 45.76 31.51 71.3C163 1074.7 281.7 1173.69 327 1123.52" fill="url(#Degradado_sin_nombre_166-55)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M411.42 1068c23.72-57.14-78.07-140.54-153.62-202.44 0 0-15.89-13-80.72-37.89-3.45-1.32-11-4.12-14.16-1-3.47 3.5.38 12.53 2.19 16.68 18.72 42.83 28.07 64.24 33.45 71.28 74.16 97.15 148.48 194.5 192.94 175.54 13-5.5 18.56-18.89 19.92-22.17z" fill="url(#Degradado_sin_nombre_166-56)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M422.22 1061.22c56.72-20.73 50.62-109.13 16.47-152.41-11.39-14.43-28.53-22.38-37.21-31.39-6.46-6.7-16.17-3-17.69 6.8-1.87 11.95 1.25 32.43 12.08 52.44 26.4 48.82-35 147 26.35 124.56" fill="url(#Degradado_sin_nombre_166-57)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M411 1085.78c51.06-35.17 12.54-138.63-38.53-183.43-17-14.93-37.65-21.12-49.9-30.14-9.12-6.72-17.8-.5-15.81 11.35 2.43 14.49 10 48.28 15 69 17 69.09 34 171.29 89.2 133.26" fill="url(#Degradado_sin_nombre_166-58)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M403 1094.79c39.71-47.25-47.2-83-102.87-104.83-18.56-7.28-38.67-5.82-51.68-9.57-9.69-2.79-16.38 5.45-12.2 15 5.11 11.72 6 32.12 14.75 48.3 29.33 54.09 109.08 102.15 152 51.07" fill="url(#Degradado_sin_nombre_166-59)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo" d="M376.55 1112.76c-32.8 51.75-135.82 15.15-181.62-35.11-15.27-16.76-22.06-37.27-31.35-49.36-6.92-9-1.1-17.79 10.61-16 14.33 2.16 47.79 9.06 68.3 13.76 68.49 15.69 169.52 30.8 134.06 86.74" fill="url(#Degradado_sin_nombre_166-60)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-33" d="M319 1137.58q35-3.27 70.45-7 22.77-2.38 45.29-4.89l6.46-4.71c-.06-2-.11-4-.17-6l5.78-3.33 5.33-9.61 5.12-2.37a238.35 238.35 0 0013.87-116.54l-14 33.2-14.13 8.49-10 20.54-18.49 6.41-10.06 20.55-27.58 15-11.44 24.3z"/>
        <g class="florcerrada" style="transform: scale(0.85);transform-origin: 100px 800px">
            <path class="cls-81 hilera hilera1" d="M300.25,984.29C227.69,1028,101.4,875.33,62.57,758c-12.94-39.12-22.65-86.88-19.7-114.47,3.7-34.62,24.42-3.51,40,10.35,19.06,17,30.92,43.56,52.54,91C188.14,860.69,378.68,937,300.25,984.29"/>
            <path class="cls-81 hilera hilera1" d="M307.89,929.67c58.33-62.92-42.18-218.24-135.27-280.1-31-20.61-63.45-27-85-39.17-16.07-9-19.47,16-11.46,34.16,9.8,22.23,28.95,59.8,45.26,91.25C175.9,840.93,244.84,997.68,307.89,929.67"/>
            <path class="cls-81 hilera hilera1" d="M423.34,863c41.8-75.92-91.78-201.32-196.36-237.8-34.87-12.16-67.75-10.16-91.49-16.48-17.67-4.71-15.12,20.47-3.13,36.09C147,664,174.35,695.59,197.49,722c77.32,88.3,180.67,223.09,225.85,141"/>
            <path class="cls-81 hilera hilera1" d="M203.39,1049.31C115.05,1083.71,21,919.21,10.54,799.56c-3.5-39.88,5.15-65.31,4.76-92.18-.28-20,16.85-35.76,29.75-20.34,15.78,18.86,50.91,65.48,72,94.67,70.49,97.55,181.84,230.42,86.34,267.6"/>
            <path class="cls-81 hilera hilera1" d="M219.32,1101.77C134.54,1144.74,26.1,990.14,4.81,872c-7.1-39.38-.8-65.57-3.62-92.29-2.09-19.89,13.52-37.29,27.75-23.2,17.41,17.24,56.59,60.21,80.22,87.21,79,90.23,201.8,211.61,110.16,258.06"/>
            <path class="cls-81 hilera hilera1" d="M496.09,886.46c33.27-80.08-144.35-211.38-271.48-249.25-42.37-12.62-79.73-10.36-108.21-16.9-21.19-4.87-26.55,9.1-9.76,25.48,20.55,20,63.91,49,116.28,70.71,127.78,53,237.19,256.53,273.17,170"/>
            <path class="cls-81 hilera hilera1" d="M404.35,906.87c43.46-86-98.66-210.61-209.4-241.19-36.91-10.2-61.84-5.41-87-10.23C89.3,651.86,72.35,667,85.16,683c15.66,19.48,54.85,63.61,79.51,90.3,82.41,89.17,192.7,226.58,239.68,133.61"/>
            <path class="cls-81 hilera hilera1" d="M212,1140.06C130.4,1161.46,46.39,954,38.45,814.84,35.8,768.46,45.92,729.79,46,699c0-23,14.16-26.22,25.79-5.94C86,717.82,103.6,768,112.56,826.3c21.87,142.34,187.7,290.61,99.46,313.76"/>
            <path class="cls-81 hilera hilera1" d="M337.91,1142.36c-70.72,46.45-215.25-123.65-266.28-253.21C54.62,846,52.13,806,42.51,776.73c-7.15-21.81,5.24-29.43,22.6-13.9,21.25,19,70.15,66.35,99.92,96.1,99.48,99.39,249.33,233.22,172.88,283.43"/>
            <path class="cls-81 hilera hilera1" d="M334.54,990.52C387.52,922.69,274.15,772.21,176,716c-32.72-18.75-65.63-23-88.2-33.81-16.8-8-18.11,17.56-8.59,35.42,11.65,21.86,33.92,58.61,52.84,89.36,63.24,102.78,145.2,256.88,202.48,183.56"/>
            <path class="cls-81 hilera hilera2" d="M524.49,968.93c59-64-59.55-222.95-164.12-286.45-34.85-21.17-70.29-27.84-94.4-40.32-17.94-9.29-27.82,2-18,20.56,12,22.72,42,58.77,83,90.4,99.87,77.19,129.79,285,193.56,215.81"/>
            <path class="cls-81 hilera hilera2" d="M350.25,1189.53c-66.57,56-223.53-66.47-284.43-171.85C45.53,982.55,27,938.51,25.06,911.41c-2.42-34,24.42-8.07,42.89,2.26,22.6,12.64,39.54,35.93,70.23,77.41,74.89,101.2,284.05,137.91,212.07,198.45"/>
            <path class="cls-81 hilera hilera2" d="M505.76,1098.41c57.4-65.85-81-241-196.91-313.46-38.64-24.16-76.74-32.85-103.28-47.25-19.77-10.72-29.33.9-17.44,21.19,14.56,24.83,51.54,82.52,74.94,117.78,78.19,117.84,180.64,292.92,242.69,221.74"/>
            <path class="cls-81 hilera hilera2" d="M546.89,1066.14c62.24-61.49-62.42-246.28-172.47-327-36.69-26.91-74-38.35-99.38-54.65-18.88-12.13-29.3-1.25-19,19.86,12.62,25.83,45.1,86.07,65.75,122.95,69,123.24,157.82,305.35,225.09,238.87"/>
            <path class="cls-81 hilera hilera2" d="M437.71,1125.4C493.43,1058.79,312,949.88,196.15,882.06c-38.6-22.61-76.41-30-102.9-43.36-19.72-10-29,1.78-16.91,21.4,14.79,24,25.16,61.77,48.86,95.79,79.22,113.66,252.27,241.53,312.51,169.51"/>
            <path class="cls-81 hilera hilera2" d="M365.05,1148.27c4.05-23.56-1.65-53.59-183.47-222.58-16.82-15.63-51.24-47-105.19-66-7.86-2.77-14.45-4.69-18.77-5.87a177.45,177.45,0,0,0-3,22.56s-3.28,48.5,23.29,104.69c22.48,47.53,110.85,138.41,254.57,222.87C356.2,1181.24,362.86,1161,365.05,1148.27Z"/>
            <path class="cls-81 hilera hilera2" d="M486,1114.88C513.11,1034,361.59,930.74,249.14,854.15c0,0-23.65-16.11-117.13-43.1-5-1.43-15.9-4.44-19.93.23-4.48,5.17,1.87,17.13,4.85,22.62,30.81,56.67,46.21,85,54.49,94.07C285.71,1053,400.24,1178.36,460.49,1147.5,478.1,1138.49,484.45,1119.52,486,1114.88Z"/>
            <path class="cls-81 hilera hilera3" d="M474.92,1093.58c90.57-29.34,86.13-169,34.86-239.14C492.69,831,466.15,817.51,453,802.82c-9.79-10.94-25.3-5.64-28.27,9.66-3.64,18.73.08,51.17,16,83.33,38.74,78.45-63.68,229.49,34.23,197.77"/>
            <path class="cls-81 hilera hilera3" d="M476.23,1132.46c75.94-61.56,2.67-219.42-83.1-283.57-28.59-21.37-61.76-28.57-82.13-41.24-15.16-9.43-28,1.41-23.46,19.79,5.6,22.48,21.59,74.65,32.12,106.53,35.18,106.51,74.47,265,156.57,198.49"/>
            <path class="cls-81 hilera hilera3" d="M464.8,1147.61c56.61-79.14-84.38-124.65-174.57-152.14-30.07-9.16-61.49-4.39-82.4-8.68-15.57-3.19-25.08,10.58-17.34,25.13,9.49,17.79,13.34,49.74,29.12,74.1,52.75,81.41,184,147.15,245.19,61.59"/>
            <path class="cls-81 hilera hilera3" d="M424.46,1175.61c-46.07,72.42-190.29,20.9-254.34-49.6-21.35-23.51-30.82-52.26-43.81-69.22-9.67-12.62-1.5-24.93,14.91-22.43,20.06,3.05,66.93,12.8,95.64,19.43,95.92,22.14,237.41,43.53,187.6,121.82"/>
            <path class="cls-81 hilera hilera3" d="M348.05,1209.55q10.77.2,21.88,0a593.62,593.62,0,0,0,152.18-23.14l5-11.64,12.48-9.58q2.17-7.61,4.36-15.21c15.32-39.85,19.17-71.73,19.86-93.23.55-17.18-.2-50.4-.24-50.4a4.65,4.65,0,0,0,0,.48l-23.26,10.9-21.18,15-13.29,33.52-28.28,12.35-13.29,33.53-41.51,26.94q-7.49,19.8-15,39.59Z"/>
        </g>
    </g>
</g>
<g class="all-flor3 flor3">
    <g class="hoja hoja4">
        <path class="cuerpo" d="M743.52 948.3S973 990 1037.88 833.22l38-104.64c-6.44 5.25-17.54 12.88-35.14 19-31.51 11-61 9.32-101.62 12.49 0 0-51.22 4-100.76 16.35-26.48 6.6-82.35 25.07-121 82.57 0 0-27 30.83-19.56 53.3s30.2 38.87 45.72 36.01z" fill="url(#Degradado_sin_nombre_178-2)"/>
        <path class="cls-7" d="M801.05 808.45s-32.77 16.08-51.25 67.42c0 0-1.48 53-40 54.32-12 .42-22 .86-29.9 1.27-39-.43-83.5-1.16-83.5-1.16s27.69 18.22 170.41 4.67c0 0 50.3 13.29 148.94-10.44 0 0-81 17-145.49 7.79 0 0 35.54-10.33 61.4-21.12 0 0 85 8.15 118.62-13.12 0 0-76.23 15.58-111.71 7.83l48.06-22.18s91.06-10 112.86-27.86c0 0-87.67 25.47-104.87 20.62 0 0 23.49-10.11 44.21-26 0 0 75.82-22 75.21-31.71 0 0-52.8 23.55-69.8 21.92 0 0 31.69-14.13 54.36-37.14 0 0 1.49 4.5 40.08-14.92l-37.91 11 46.84-41.52s-18 14-42.21 32.21c.81-4 3.13-15.11 5.17-21.8-3.6 6-9.86 16.2-12.44 25.31a16.45 16.45 0 01-1.12 2.81c-10.71 8-22.26 16.65-33.79 25.12-1.35-6.38-3.75-28.8 22.58-49 0 0-35.49 17.08-26 50.33l-66.53 46.79 8.55-5.12c-3.5 2.22-6.65 4.14-9.38 5.7l.83-.58-2.85 1.7-1 .53c1.55-6.53 16.5-69 28.46-84.16-9.39 8.83-34.49 36.8-34.48 83.51 0 0-9.51 8.63-30.67 19.91-5.84 3-12.18 6.09-18.7 9.13-4.55 2.05-9.43 4.12-14.68 6.19 0 0 8.53-35.52 4.94-54.17 0 0 6.16-36.27 23.22-52.72 0 0-44.48 40.83-37.83 107.86 0 0-57.75 21.7-79.48 21.45 0 0 21.12-9.42 27.75-57.32.05.05 32.74-55.42 43.1-63.35zm61.16 78.09l-4.07 2.13c4.86-3.04 5.51-3.28 4.07-2.13z"/>
    </g>
    <g class="hoja hoja5">
        <path class="cuerpo" d="M710 1303.31s151.8 19.31 300.14-201.13l94.86-146.3a242.12 242.12 0 01-39.14 31.12c-31.32 19.79-53.1 22.2-86.58 32.93a606.89 606.89 0 00-88.33 38c-24.66 13.06-79.51 46.72-145.44 129.94 0 0-40.22 45.63-48.49 74.55s-.87 47.2 12.98 40.89z" fill="url(#Degradado_sin_nombre_178-3)"/>
        <path class="cls-7" d="M842 1106.72s-35.46 26.78-81.88 98.53c0 0-34.27 71.22-65 79.16-9.6 2.48-17.56 4.66-24 6.48-30 5.63-64 11.75-64 11.75s10.07 20 129.18-20.91c0 0 30.68 9.8 122-37.72 0 0-73.37 35.63-117.66 33.63 0 0 34-19.51 60.81-38.1 0 0 60.77-2.62 100.15-36.48 0 0-68.84 33-91.49 28.29l51.16-37.35s76.87-28 104.91-55.33c0 0-83.89 48.11-94.18 44.35a511.63 511.63 0 0050.51-41.86s72.55-41.61 78.13-54.48c0 0-55.66 40-67.82 40.5a492.47 492.47 0 0065.37-58.43s-1.66 5.78 40.4-26.4l-36.28 20.81 62.28-63.11s-22.7 21.57-52.87 49.89c3.12-5.47 11.88-20.74 17.64-30-6.56 8.64-17.77 23.27-25.47 35.9-.79 1.29-1.67 2.61-2.63 3.94a7563.106 7563.106 0 01-41.89 39c2.94-8.34 15.1-38 48.13-69.24 0 0-38.2 28.54-51.6 71.59l-80.83 73.3 9.83-8.22c-4.1 3.54-7.74 6.61-10.83 9.13l1-.91-3.27 2.74-1.09.86c5.27-9 55.91-95 74.67-117.31-12.79 13.32-49.74 54.8-78.94 117.41 0 0-12.76 13.08-36.22 31.57-6.39 4.92-13.25 10.1-20.21 15.21q-7.21 5.2-15.25 10.64s28.82-49 37.71-73.39c0 0 27.45-49.59 50.95-74.35 0 0-60 61.81-96.76 150.58 0 0-58.34 38.29-75 41.41 0 0 22.27-16 57.35-81.24-.01-.01 59.99-79.56 72.99-91.84zm-1.41 94.91l-4.49 3.5c5.65-4.84 6.32-5.27 4.49-3.5z"/>
    </g>
    <path class="cls-82" style="stroke-linecap: round;" d="M605.91 1745.33c7.78-176 2.14-311.78-4.79-405.1-1.85-24.92-8.72-113.14-8.42-230.78.26-99.58.67-150.37 14.61-199.67 13.62-48.15 48.39-134.09 151.75-219.87"></path>
    <g class="flor3-capullo">
        <path class="petalo fill" d="M959.89 471.54c67.81 44.32 196.42-89.79 239.21-196.07 14.27-35.43 25.82-79 24.26-104.64-2-32.18-23.35-4.57-39 7.38-19.14 14.63-31.78 38.54-54.77 81.2-56.11 104.09-243 164.21-169.72 212.13" fill="url(#Degradado_sin_nombre_166-21)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M954.17 426.18c-54.89-59.81 45.22-200.55 136.23-255.1 30.33-18.18 61.7-23.19 82.76-33.81 15.67-7.9 18.43 15.33 10.33 31.9-9.91 20.27-29.15 54.46-45.53 83.07-54.74 95.64-124.46 238.58-183.79 173.94" fill="url(#Degradado_sin_nombre_166-22)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M896.09 406.84c-53.5-61 49.8-199.46 142-251.91 30.75-17.49 62.22-21.78 83.52-31.91 15.85-7.55 18.07 15.75 9.59 32.13-10.37 20-30.39 53.77-47.42 82-56.91 94.36-129.88 235.67-187.72 169.69" fill="url(#Degradado_sin_nombre_166-23)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M1046.8 523.53c80.78 42.12 188.53-97.72 211.54-206.34 7.67-36.2 2.15-60.59 5.43-85.21 2.43-18.33-12.24-34.84-26.26-22.23-17.13 15.45-55.8 54.06-79.13 78.35-78 81.17-198.91 189.9-111.58 235.43" fill="url(#Degradado_sin_nombre_166-24)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M1032.48 566.14c74.69 52.17 199.55-72.63 236.35-177.37 12.27-34.92 9.94-59.81 16.36-83.81 4.78-17.86-7.65-36.13-23.17-25.42-19 13.1-62.3 46.42-88.57 67.5-87.79 70.45-221.71 162.71-141 219.1" fill="url(#Degradado_sin_nombre_166-25)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-16" d="M946.73 360.41C806.73 245.28 956.84 217 1054.2 201c32.45-5.34 78.1 7.72 102.38 6.71 18.08-.75 42 19.22 43.59 36.41 2 21 23 61.68 22 89.88-3.47 94.19-124.06 150.91-275.41 26.45"/>
        <path class="petalo fill" d="M815.4 497.54c-62.59-51.37 37-235 131.79-320.42 31.6-28.48 65.09-42.63 87.14-60.17 16.42-13.06 27-3.91 19.19 16.69-9.48 25.22-35.08 67.52-71.57 107.72-89 98.12-98.88 311.72-166.55 256.18" fill="url(#Degradado_sin_nombre_166-26)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M865.3 501.19c-68.11-60.77 20.59-212.93 111.66-274 30.36-20.35 54.71-24 76.07-36 15.9-8.94 36.4-1.12 30 16.65-7.88 21.74-29.11 72.14-42.83 102.93-45.88 102.85-101.26 256.12-174.9 190.42" fill="url(#Degradado_sin_nombre_166-27)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M916.89 580.28C966.35 644.7 1151.86 548 1239.5 454c29.22-31.34 44.21-64.9 62.27-86.82 13.45-16.32 4.62-27.17-16.11-19.77-25.35 9-68.16 34-109.19 70-100.09 87.92-313 93.23-259.58 162.87" fill="url(#Degradado_sin_nombre_166-28)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M885.13 625.65c60.67 54 224.54-76.25 292.84-185.28 22.77-36.35 31.16-72.18 44.76-97.14 10.13-18.59-.58-27.58-19.53-16.39-23.19 13.7-77.09 48.49-110 70.51-110.13 73.57-273.62 170-208 228.3" fill="url(#Degradado_sin_nombre_166-29)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M903.65 570.53c-56.46-58.37 42-204.42 132.76-263 30.27-19.53 61.82-25.78 82.87-37.3 15.66-8.59 18.86 14.8 11 31.85-9.63 20.86-28.42 56.14-44.42 85.69-53.47 98.73-121.18 245.86-182.21 182.75" fill="url(#Degradado_sin_nombre_166-30)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M755.87 517.31c-64.62-49.23 15.58-217.15 99.56-294.08 28-25.64 59-37.93 78.75-53.66 14.69-11.71 25.6-3 19.9 16-7 23.15-28 61.77-59.72 98.17-77.36 88.81-68.63 286.81-138.49 233.57" fill="url(#Degradado_sin_nombre_166-31)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M954.52 686c56.79 57.73 211.26-45.52 275.87-140 21.53-31.49 42.17-71.51 46.13-96.84 5-31.79-21.83-9.46-39.68-1.15-21.84 10.17-39.32 30.79-70.94 67.46-77.17 89.46-272.78 108.07-211.38 170.53" fill="url(#Degradado_sin_nombre_166-32)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M765 626c-57.62-57.75 57.26-232.78 158.83-309.53 33.86-25.58 68.33-36.56 91.75-52.06 17.43-11.55 27.08-1.32 17.58 18.66-11.61 24.44-41.53 81.46-60.55 116.37C909 516.11 827.25 688.43 765 626" fill="url(#Degradado_sin_nombre_166-33)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M724.74 598.66c-61.74-53.3 39.77-236.39 135.34-320.49 31.86-28 65.42-41.55 87.62-58.75 16.52-12.81 26.91-3.33 18.92 17.29-9.76 25.29-35.35 84.29-51.71 120.56-54.69 121.07-123.4 299-190.17 241.39" fill="url(#Degradado_sin_nombre_166-34)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M802.45 604c-40.59-70.26 141.72-144.92 257.8-191 38.7-15.36 74.34-16.66 100.56-25.2 19.52-6.36 26.18 5.94 12.13 22.43-17.18 20.17-32.45 53.82-59.31 82C1023.88 586.44 846.33 680 802.45 604" fill="url(#Degradado_sin_nombre_166-35)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M889 695.67c-48.34-65.17 124.26-160.14 234.33-219.16 36.69-19.68 72-25 97-36.51 18.67-8.55 26.69 2.91 14.61 20.89-14.77 22-26.09 57.17-49.56 88.24-78.43 103.79-244.14 217-296.4 146.54" fill="url(#Degradado_sin_nombre_166-36)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M784.35 640.05c-30.81-74.17 101.36-182.46 199.43-262.82 0 0 20.63-16.91 104.81-49.19 4.47-1.71 14.33-5.35 18.38-1.25 4.5 4.54-.49 16.26-2.85 21.65-24.3 55.6-36.45 83.4-43.42 92.54-96.28 126.12-192.77 252.51-250.5 227.9-16.87-7.19-24.09-24.58-25.85-28.83z" fill="url(#Degradado_sin_nombre_166-37)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M772.6 631.32c-74.16-25.45-68.51-140.35-25.3-197.4 14.4-19 36.45-29.78 47.49-41.7 8.22-8.86 20.91-4.28 23.14 8.36 2.73 15.47-.8 42.13-14.33 68.38-33 64.05 49.16 189.88-31 162.36" fill="url(#Degradado_sin_nombre_166-38)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M785 663.12c-66.3-45.66-16.28-180 50-238.14 22.1-19.39 48.87-27.42 64.78-39.13 11.85-8.72 23.11-.64 20.53 14.74-3.15 18.82-12.93 62.68-19.53 89.52-22 89.71-44.13 222.39-115.8 173" fill="url(#Degradado_sin_nombre_166-39)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M810.55 696.58c-63.8-48.48 36-118.6 100.31-162.17 21.42-14.53 47.3-18.42 62.71-26.89 11.47-6.3 22.31 2.22 19.75 15.55-3.13 16.3 1.62 42.38-4.87 65.38-21.68 76.89-108.94 160.55-177.9 108.13" fill="url(#Degradado_sin_nombre_166-40)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="petalo fill" d="M829.4 697.54c42.3 67.37 176.24 20.42 236-44.57 19.92-21.67 28.85-48.26 41-63.91 9-11.64 1.53-23.09-13.68-20.87-18.62 2.72-62.1 11.5-88.75 17.48-89 20-220.26 39-174.53 111.87" fill="url(#Degradado_sin_nombre_166-41)" stroke-miterlimit="10" stroke="#fff" stroke-width="2"/>
        <path class="cls-33" d="M896 730.58a320.07 320.07 0 00-131.53-8l-7.79-2-9.55-11.35-2.06-9-3.36 5.93-4.2-6.2c-15.41-30.72-32.86-77.39-32.38-134.77a278.33 278.33 0 012.87-37.61L725 573l18.34 11 13.07 26.67 24 8.32q6.52 13.35 13.06 26.68l35.81 19.45q7.43 15.78 14.84 31.54z"/>
        <g class="florcerrada" style="transform: scale(0.9) rotate(3deg);transform-origin: 240px 90px">
            <path class="cls-81 hilera hilera1" d="M1021.46,452.86C956.32,371.39,1122.19,192.44,1259.17,126c45.65-22.15,102.37-41.75,136.53-42.63,42.86-1.1,8.25,29.24-6.15,50.51-17.61,26-48.15,44.82-102.58,78.9C1154.14,296,1091.88,540.93,1021.46,452.86"/>
            <path class="cls-81 hilera hilera1" d="M1089.38,453.32c86.27,61,259.55-86.91,319.94-210.59,20.13-41.23,22.69-81.84,34-110.16,8.43-21.08-22.68-21.17-43.56-8.45-25.54,15.57-68.28,45-104,70.07C1176.27,277.8,996.13,387.4,1089.38,453.32"/>
            <path class="cls-81 hilera hilera1" d="M1189.46,583.43c99.46,38.7,230.85-144.71,258.4-278.3,9.18-44.53,1.41-84.34,5.27-114.35,2.88-22.33-27.45-15.14-44.57,2.05-20.94,21-55.12,59.49-83.62,92-95.23,108.72-243,256.75-135.48,298.58"/>
            <path class="cls-81 hilera hilera1" d="M926.37,345.18c-56.32-102.25,129.21-243.7,273.55-275.95,48.12-10.74,80.57-4.32,113.3-9.15,24.36-3.59,46.39,14.76,29.66,33-20.46,22.33-71.66,72.78-103.88,103.27C1131.37,298.22,987.26,455.72,926.37,345.18"/>
            <path class="cls-81 hilera hilera1" d="M864.92,373.14c-66.21-96.51,104.9-254,245.67-299.14,46.92-15.06,79.91-11.63,112.07-19.4,23.94-5.79,47.7,10.45,32.82,30.11-18.22,24-64.31,78.85-93.44,112.08-97.32,111-225.55,280.67-297.12,176.35"/>
            <path class="cls-81 hilera hilera1" d="M1172.67,676c103.15,27.62,234.59-210.51,260.18-371.84,8.53-53.77-.29-99,3.07-134.83,2.5-26.66-15.42-30.94-32.68-7.78-21.13,28.34-49.45,86-67.45,153.42-43.94,164.58-274.63,331.17-163.12,361"/>
            <path class="cls-81 hilera hilera1" d="M1132.87,567.36c112,39.09,241.06-154.62,260.42-294.75,6.45-46.72-3.44-76.36-1.63-107.81,1.34-23.4-19.94-41.63-37.29-23.41-21.23,22.28-68.74,77.28-97.31,111.72-95.48,115.07-245.3,272-124.19,314.25"/>
            <path class="cls-81 hilera hilera1" d="M817,370.45c-39.38-96.16,200.26-232.39,368.81-264.67,56.19-10.76,105-4.69,142.68-9.66,28-3.7,34.31,13,11.44,30.52-28,21.39-86.32,51.07-156.08,71.47C1013.65,247.91,859.58,474.4,817,370.45"/>
            <path class="cls-81 hilera hilera1" d="M834.62,524.49c-68.18-78.78,116-282.82,265.87-366.14,50-27.78,98.31-37.3,132.5-53.79,25.45-12.27,36.78,1.61,20.63,25.33-19.75,29-69.6,96.39-101.08,137.56-105.18,137.57-244.21,342.2-317.92,257"/>
            <path class="cls-81 hilera hilera1" d="M1019.43,495.72c91.4,53.67,256.67-109.14,309.38-238.07,17.57-43,17.41-83.84,27-113.15,7.09-21.82-24.38-19.25-44.64-4.73-24.78,17.76-66,50.91-100.5,79-115.19,93.87-290,218.93-191.19,276.94"/>
            <path class="cls-81 hilera hilera2" d="M1076.62,724.09c87.69,61.63,262.47-108.89,323-246.83,20.18-46,22.56-90.33,33.89-121.78,8.43-23.41-6.93-33.64-28-18.63-25.79,18.35-64.91,60.85-96.89,115.94-78,134.43-326.81,204.68-232,271.3"/>
            <path class="cls-81 hilera hilera2" d="M779.05,547.21C699.88,475,823.91,263.56,942.65,172.12c39.58-30.47,90.34-60.25,123.1-67,41.11-8.47,13.83,28.49,4.21,52.72-11.76,29.64-37.44,54.09-83.09,98.29C875.49,364,864.63,625.24,779.05,547.21"/>
            <path class="cls-81 hilera hilera2" d="M915.52,722.24c89.69,59.38,281-138,350.67-291.24,23.22-51.09,27.64-99,40.9-133.74,9.88-25.87-5.85-35.66-28.69-17.84-28,21.79-92.36,76.3-131.61,110.58-131.15,114.58-328.23,268-231.27,332.24"/>
            <path class="cls-81 hilera hilera2" d="M961.59,767.21c85.16,66,290.49-116.17,371.19-263.61,26.9-49.15,34.81-96.56,50.59-130.18,11.74-25-3.24-36-27.33-20-29.48,19.6-97.74,69-139.41,100.22-139.24,104.22-347.11,242.2-255,313.53"/>
            <path class="cls-81 hilera hilera2" d="M871.53,643.55c90.35,57.21,193.84-182,257.83-334.35,21.33-50.79,24.2-98.15,36.22-132.65,9-25.69-6.88-35.11-28.87-17.17-26.9,22-71.31,40.74-109,75.2-125.89,115.14-253.88,347.13-156.19,409"/>
            <path class="cls-81 hilera hilera2" d="M831.82,558.58c29.42,1.12,65.14-10.72,241.92-260.09,16.34-23.06,49-70.17,63.48-139.12,2.11-10,3.37-18.39,4.11-23.86a220,220,0,0,0-28,0s-59.73,3.86-124,45.42c-54.38,35.15-151,157.78-230.73,346.92C790.14,553.13,815.89,558,831.82,558.58Z"/>
            <path class="cls-81 hilera hilera2" d="M892.21,700.8C995.4,720.75,1096.78,519,1172,369.35c0,0,15.82-31.49,33.6-150,.94-6.29,2.84-20.13-3.51-24.29-7-4.63-20.61,5.07-26.83,9.6-64.17,46.8-96.26,70.2-106,81.78-134.1,159.81-268.5,320-221,388.49C862.11,695,886.3,699.66,892.21,700.8Z"/>
            <path class="cls-81 hilera hilera3" d="M916.41,683.82c50.51,105.79,220.23,77.71,297.57,3.73,25.79-24.66,38-59.26,53.79-77.69,11.76-13.73,2.78-31.8-16.38-32.94-23.45-1.41-62.45,8.41-99.12,33-89.48,60-290.48-40.48-235.86,73.89"/>
            <path class="cls-81 hilera hilera3" d="M869.16,691.72c87.47,82.71,268.28-32.35,332.65-147.46,21.46-38.37,24.85-80,37-106.95,9.05-20-6.28-34-28-25.42-26.53,10.48-87.62,38.47-124.82,56.5C961.73,528.62,774.6,602.31,869.16,691.72"/>
            <path class="cls-81 hilera hilera3" d="M848.81,680.23C954.61,736.48,987.28,557,1006.18,442.44c6.31-38.19-4.61-75.76-2.77-102,1.37-19.52-17-28.9-33.49-17.08-20.17,14.46-58.55,24.35-85.73,47.57-90.81,77.6-149.75,248.49-35.38,309.29"/>
            <path class="cls-81 hilera hilera3" d="M808.09,635.54C712.21,591.06,751.68,406.65,827.35,317c25.23-29.87,58.79-46.1,77.38-64.71,13.84-13.85,30.18-5.88,29.8,14.55-.47,25-4.76,83.78-8.19,119.9-11.46,120.68-14.6,296.87-118.25,248.78"/>
            <path class="cls-81 hilera hilera3" d="M754.25,547.77q1.51,13.18,3.57,26.71a730.62,730.62,0,0,0,52.95,182l15,4.24,13.71,13.68,19.27,2.85c51.13,12.24,90.68,11.76,117,9.11,21.06-2.12,61.49-8.42,61.48-8.47l-.59.06-17.07-26.62-21.74-23.42-43.08-10.78-19.66-32.52-43.08-10.78-39.63-46.29-50.75-11.87Q778,581.72,754.25,547.77Z"/>
        </g>
    </g>
</g>
<g mask="url(#mask)" style="opacity: 0; transform: translateY(-25px);">
    <animate
        attributeName = "opacity"
        from = "0"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1.5s"
        fill = "freeze"
    />
    <g>
        <path class="cls-5" d="M613.14 1789.19a33.67 33.67 0 00-27-21c-13.83-1.62-27.55 6-34 19z"/>
        <path class="cls-5" d="M602.14 1790.19c6.45-13 20.17-20.62 34-19a33.67 33.67 0 0127 21q-14.46-.53-29-1-16.05-.52-32-1z"/>
    </g>
</g>`

const withdrawn = `
<defs>
    <style>
        .cls-1 {
            fill: url(#Degradado_sin_nombre_33);
        }
        .cls-2 {
            fill: #012b23;
        }
        .cls-3 {
            fill: #003e32;
        }
        .cls-4 {
            fill: #562822;
        }

        .cls-5 {
            fill: #5e2b27;
        }
        .cls-6 {
            fill: #466658;
        }
        .cls-7 {
            fill: #476e66;
        }
        .cls-17,
        .cls-8 {
            fill: none;
        }
        .cls-8 {
            stroke: #34514a;
            stroke-width: 7px;
        }
        .cls-11,
        .cls-12,
        .cls-16,
        .cls-17,
        .cls-8,
        .cls-9 {
            stroke-miterlimit: 10;
        }
        .cls-9 {
            fill: #ce5649;
        }
        .cls-11,
        .cls-12,
        .cls-16,
        .cls-9 {
            stroke: #fff;
            stroke-width: 2px;
        }
        .cls-10 {
            fill: #bd9b97;
        }
        .cls-11 {
            fill: #f15c44;
        }
        .cls-12 {
            fill: #e5604e;
        }
        .cls-13 {
            fill: #bfa09d;
        }
        .cls-14 {
            fill: #4f7060;
        }
        .cls-15 {
            mask: url(#mask);
        }
        .cls-16 {
            fill: #a84139;
        }
        .cls-17 {
            stroke: #466658;
            stroke-width: 34px;
        }
        .monte{
            transform-origin: 500px 1460px;
            animation: monte 8s ease-in-out forwards;
        }
        .monte1{
            transform: scaleX(0.2) scaleY(.2) rotate(5deg);
            animation-delay: 1s;
        }
        .monte2{
            transform: scaleX(0.2) scaleY(.2) rotate(-5deg);
            animation-delay: 2s;
        }
        @keyframes monte{
            100%{
                transform: none;
            }
        }
        .hoja{
            transform: scale(0);
            animation: hoja 4s ease-out forwards;
        }
        .hoja1{
            transform-origin: 420px 1050px;
            animation-delay: 5s;
        }
        .hoja2{
            transform-origin: 520px 630px;
            animation-delay: 6s;
            animation-duration: 5s;
            animation-name: hojav2;
        }
        .hoja3{
            transform-origin: 500px 840px;
            animation-delay: 5s;
            animation-name: hojav2;
        }
        .hoja4{
            transform-origin: 410px 430px;
            animation-delay: 7.5s;
            animation-duration: 3s;
        }
        .hoja5{
            transform-origin: 440px 450px;
            animation-delay: 7.7s;
            animation-name: hojav2;
        }
        @keyframes hoja{
            to{
                transform: none;
            }
        }
        @keyframes hojav2{
            to{
                transform: scale(1) translateX(10px);
            }
        }
        .flor{
            transform: scale(0);
            opacity: 0;
            animation: flor 4s linear forwards;
        }
        .flor1{
            transform: scale(0);
            transform-origin: 290px 825px;
            animation-delay: 3s;
        }
        .flor3{
            transform-origin: 645px 460px;
            animation-delay: 4s;
            animation-duration: 3s;
            animation-name: flor3;
        }
        .flor2{
            transform-origin: 420px 370px;
            animation-delay: 4s;
            animation-name: flor2;
        }
        @keyframes flor{
            40%{
                transform: scale(0.2);
            }
            50%{
                opacity: 1;
                transform: scale(0.2);
            }
            100%{
                opacity: 1;
                transform: scale(1);                                
            }
        }
        @keyframes flor2{
            40%{
                transform: scale(0.2);
            }
            50%{
                opacity: 1;
                transform: scale(0.2);
            }
            100%{
                opacity: 1;
                transform: scale(0.7);                              
            }
        }
        @keyframes flor3{
            0%{
                transform: scale(0) rotate(-30deg);
            }
            30%{
                transform: scale(0.2) rotate(-30deg);
            }
            40%{
                transform: scale(0.2) rotate(-30deg);
                animation-timing-function: ease-in;
            }
            50%{
                opacity: 1;
                transform: scale(0.2) rotate(-30deg);
                animation-timing-function: ease-in;
            }
            100%{
                opacity: 1;
                animation-timing-function: linear;
                transform: scale(1);                                
            }
        }
        .florcerrada{
            animation: florcerrada 4s ease-out forwards;
        }

        @keyframes florcerrada{
            to{
                opacity: 0;
            }
        }
        .flor1 .florcerrada{
            animation-delay: 5s;
        }
        .flor2 .florcerrada{
            animation-delay: 5.6s;
        }
        .flor3 .florcerrada{
            animation-delay: 4.5s;
        }
        .flor3 .hilera{
            transform-origin: 960px 620px;
            animation: hilera 4s ease-in-out forwards;
        }
        .flor3 .hilera1{
            animation-delay: 5s;
        }
        .flor3 .hilera2{
            animation-delay: 5.7s;
        }
        .flor3 .hilera3{
            animation-delay: 5.5s;
            animation-timing-function: ease-in;
        }
        @keyframes hilera{
            to{
                transform: scale(0.7);
            }
        }
    </style>
    <linearGradient id="Degradado_sin_nombre_33" x1="479.06" y1="1524.49" x2="479.06" y2="1502.49" gradientUnits="userSpaceOnUse">
        <stop offset="0" />
        <stop offset="0.09" stop-color="#020202" />
        <stop offset="0.13" stop-color="#0a0a0a" />
        <stop offset="0.17" stop-color="#171717" />
        <stop offset="0.2" stop-color="#2a2a2a" />
        <stop offset="0.22" stop-color="#424242" />
        <stop offset="0.25" stop-color="#606060" />
        <stop offset="0.27" stop-color="#848484" />
        <stop offset="0.29" stop-color="#aeaeae" />
        <stop offset="0.31" stop-color="#dbdbdb" />
        <stop offset="0.32" stop-color="#fff" />
    </linearGradient>
    <mask id="mask" x="423.06" y="1502.28" width="111" height="24.22" maskUnits="userSpaceOnUse">
        <rect class="cls-1" x="424.06" y="1502.49" width="110" height="22" />
    </mask>
</defs>
<g style="transform: translate(-190px, -290px);">
    <ellipse class="cls-2" cx="592.37" cy="1890.62" rx="72" ry="42.5" transform="rotate(-45 592.371 1890.622)"/>
    <path class="cls-3" d="M632.92 1833.28s-61.91 99-95.23 101.42c0 0 2.68 14.42 9.68 5.42 0 0 61.1-10.67 85.55-106.84zM765.37 1837.12a311.95 311.95 0 01-79 83 83 83 0 0033.54-5.25c39.17-15 64.81-61.26 55.46-73.75-1.37-1.83-4.1-3.73-10-4z"/>
    <path class="cls-2" d="M774.91 1822c-5.88-8.06-44.75 3.7-69.53 29.74-29.59 31.09-26.43 69.21-25 71.35a7.66 7.66 0 002 2 6.72 6.72 0 003 1 399.31 399.31 0 0055.46-52c17.92-20.32 39.43-44.73 34.07-52.09z"/>
    <path class="cls-2" d="M791 1833.18c-1.4-1.53-2.8-3.06-5.1-3.46-15.55-2.73-24.28 54.86-65.57 80a86.28 86.28 0 01-35.94 11.75c-.9.25-2.37.79-2.61 1.86a2.38 2.38 0 00.59 1.84c1.74 2.3 45.85 14.58 79.22-10.88 28.72-21.97 42.72-66.66 29.41-81.11z"/>
    <path class="cls-3" d="M775 1822v.07z"/>
    <path d="M735.37 1888.12s44-66 79-96" stroke-miterlimit="10" stroke="#012b23" stroke-width="4" fill="none"/>
    <circle class="cls-2" cx="813.87" cy="1793.62" r="4.5"/>
    <path class="cls-3" d="M664.68 1764.64a339.32 339.32 0 01-12.2 46.74 324.88 324.88 0 01-30.81 65.79c39.93-3.55 70.71-25.82 76.31-53.37 4.18-20.58-4-52.47-22.39-58.48a22.86 22.86 0 00-10.91-.68z"/>
    <path class="cls-2" d="M667.49 1747.73c-8.5-5.21-40 20.44-53 54-15.54 40 1.88 74.06 4 75.51a7.77 7.77 0 002.61 1.09 6.91 6.91 0 003.16-.22 400.36 400.36 0 0031.51-69.19c8.86-25.69 19.46-56.44 11.72-61.19z"/>
    <path class="cls-2"  d="M730.19 1791c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.83 53.65-69.26 76.78a86.42 86.42 0 01-36.45 10c-.91.21-2.4.68-2.7 1.74a2.42 2.42 0 00.51 1.87c1.63 2.38 45.11 16.71 79.64-7.16 29.72-20.54 45.8-64.49 33.19-79.54z">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-30 640 1860"
          to="0 640 1860"
          dur="2s"
          fill="freeze"
          begin = "0s"
          id = "semilla"
          />
    </path>
    <path class="cls-3" d="M690.24 1769v.08z"/>
</g>
<g style="opacity: 0.2;">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <path class="cls-2" d="M470,1455.72a339.32,339.32,0,0,1-12.2,46.74A324.62,324.62,0,0,1,427,1568.25c39.93-3.55,70.71-25.82,76.31-53.37,4.18-20.58-4-52.47-22.39-58.48A23,23,0,0,0,470,1455.72Z" />
    <path class="cls-3" d="M472.82,1438.81c-8.51-5.21-40,20.44-53,54-15.54,40,1.88,74.07,4,75.51a7.53,7.53,0,0,0,2.61,1.09,6.87,6.87,0,0,0,3.15-.22A399.5,399.5,0,0,0,461.11,1500C470,1474.31,480.56,1443.56,472.82,1438.81Z" />
    <path class="cls-3" d="M535.52,1482.06c-1.33-1.59-2.66-3.18-4.93-3.69-15.41-3.46-26.84,53.65-69.26,76.79a86.57,86.57,0,0,1-36.45,10c-.92.2-2.4.67-2.7,1.73a2.42,2.42,0,0,0,.51,1.87c1.63,2.38,45.11,16.71,79.64-7.16C532.05,1541.11,548.13,1497.13,535.52,1482.06Z" />
    <path class="cls-2" d="M495.57,1460v.08h0Z" />
    <path class="cls-4" d="M733.84,1615.54c-15.28,38-74.17,47.21-138.74,57.35a494.68,494.68,0,0,1-155-.38c-180,24.25-207.93-18.48-213.67-30.27-29.77-61.13,84.88-216.77,226.13-231.47,2.54-.26,5.75-.56,9.59-.8a248.64,248.64,0,0,1,28.65.2c88.2,6.17,149.35,49.72,149.35,49.72C683.74,1491,754.43,1564.37,733.84,1615.54Z" />
    <polygon class="cls-5" points="357.99 1585.68 352.51 1588.73 343.91 1586.53 338.67 1580.72 340.73 1575.69 348.54 1575.21 356.22 1579.66 357.99 1585.68" />
    <polygon class="cls-5" points="278.99 1604.68 273.51 1607.73 264.91 1605.53 259.67 1599.72 261.73 1594.69 269.54 1594.21 277.22 1598.66 278.99 1604.68" />
    <polygon class="cls-5" points="489.88 1584.54 486.57 1579.2 488.39 1570.51 493.95 1565.01 499.08 1566.84 499.9 1574.62 495.81 1582.5 489.88 1584.54" />
    <polygon class="cls-5" points="337.88 1636.54 334.57 1631.2 336.39 1622.51 341.95 1617.01 347.08 1618.84 347.9 1626.62 343.81 1634.5 337.88 1636.54" />
    <polygon class="cls-5" points="569.88 1558.54 566.57 1553.2 568.39 1544.51 573.95 1539.01 579.08 1540.84 579.9 1548.62 575.81 1556.5 569.88 1558.54" />
    <polygon class="cls-5" points="640.88 1628.54 637.57 1623.2 639.39 1614.51 644.95 1609.01 650.08 1610.84 650.9 1618.62 646.81 1626.5 640.88 1628.54" />
    <polygon class="cls-5" points="347.22 1547.34 340.96 1546.86 335.01 1540.27 333.85 1532.54 338.35 1529.47 345.12 1533.39 349.07 1541.34 347.22 1547.34" />
    <polygon class="cls-5" points="457.22 1632.34 450.96 1631.86 445.01 1625.27 443.85 1617.54 448.35 1614.47 455.12 1618.39 459.07 1626.34 457.22 1632.34" />
    <polygon class="cls-5" points="465.22 1547.34 458.96 1546.86 453.01 1540.27 451.85 1532.54 456.35 1529.47 463.12 1533.39 467.07 1541.34 465.22 1547.34" />
    <polygon class="cls-5" points="374.22 1484.34 367.96 1483.86 362.01 1477.27 360.85 1469.54 365.35 1466.47 372.12 1470.39 376.07 1478.34 374.22 1484.34" />
    <polygon class="cls-5" points="592.22 1478.34 585.96 1477.86 580.01 1471.27 578.85 1463.54 583.35 1460.47 590.12 1464.39 594.07 1472.34 592.22 1478.34" />
    <polygon class="cls-5" points="418.22 1518.34 411.96 1517.86 406.01 1511.27 404.85 1503.54 409.35 1500.47 416.12 1504.39 420.07 1512.34 418.22 1518.34" />
</g>
<g class="monte monte1">
    <path class="cls-7" d="M487.73,1394.49c35.37-100.25.67-180-34.9-231.81-31.91-46.49-70.8-79.81-79.84-87.44C250.77,972.1,83.81,919.59,26.18,891.3c-1.73-.85-7.4-3.66-9.38-3.4-2.57.34,2.63,5.67,3.69,6.79C41.65,917,215.43,1165,395.1,1282.55c4.35,2.84,14.79,9.6,27,19.22C468.68,1338.42,483.24,1371.2,487.73,1394.49Z" />
    <path class="cls-8" d="M27.86,895.44C126.52,954.82,228.91,1027.2,314,1111.8c105.38,104.73,155.42,199.47,178.57,276.8" />
</g>
<g class="monte monte2">
    <path class="cls-7" d="M495.71,1406.49a1096.62,1096.62,0,0,0-15.32-238.15c-.81-4.62-7.85-30.06-13.48-64.94-5.78-35.73-10.42-65.69-6.81-102.51a328,328,0,0,1,17-72c61.35-167.35,311.73-239.33,315.7-239a2.86,2.86,0,0,1,1.89.83c.69.88.53,2.42-.09,4.1C779.82,735,617.81,1029.23,495.71,1406.49Z" />
    <path class="cls-8" d="M780.19,699.29c-78.2,85.77-148.39,181-199.85,284.85-77.63,156.63-95.92,299.06-84.63,422.35" />
</g>

<g class="all-flor1">
    <g class="hoja hoja1">
        <path class="cls-6" d="M402.78,1051.21s-70.61-23.83-114.51,56.42l-27.53,53.62s21.76-20.29,50.08-14.89c0,0,66.47-3.51,88-48.81,0,0,13.38-15.64,14.09-27.31S408.36,1049.89,402.78,1051.21Z" />
        <path class="cls-6" d="M363.74,1122.81s13.21-8,26.66-34.28c0,0,8-27.32,21.05-27.63,4.08-.09,7.45-.22,10.16-.35,12.94.61,27.68,1.44,27.68,1.44s-6.65-9.68-56.17-4.13c0,0-14.89-7.37-51.16,3.88,0,0,29.42-7.93,49.63-2.55a245.7,245.7,0,0,0-23.47,10.28s-27.18-5.06-41.42,5.58c0,0,27.63-7.28,38.36-2.92l-19.17,11s-31.8,4.26-41.6,13.24c0,0,32.86-12.26,37.9-9.58a113,113,0,0,0-18.43,13s-28.41,10.61-29.58,15.61c0,0,20.95-11.63,26.39-10.61a106.43,106.43,0,0,0-23.4,18.62s.14-2.34-15.49,7.3l14.21-5.31-21.52,21s8-7,18.65-16.2c-.83,2.05-3.19,7.77-4.81,11.2a103.13,103.13,0,0,0,7.74-12.94,13.26,13.26,0,0,1,.77-1.43c4.71-4.05,9.78-8.37,14.83-12.63-.45,3.31-2.84,14.91-14.48,25,0,0,14.26-8.45,15.8-25.71l28.83-23.48-3.58,2.56c1.48-1.11,2.81-2.07,3.94-2.85l-.36.29,1.19-.85.41-.26c-1.44,3.36-15.3,35.43-21.44,43.15,4.39-4.46,16.73-18.64,23.35-42.75a88.39,88.39,0,0,1,13.06-10c2.37-1.48,4.93-3,7.53-4.52,1.81-1,3.73-2,5.78-3,0,0-7.89,18.25-9.34,27.91,0,0-7.2,18.66-15.23,27,0,0,20.63-20.62,27.93-55.28,0,0,22.34-10.62,29.55-10.27,0,0-8.38,4.65-17.39,29.3C387.1,1090.52,368.32,1118.82,363.74,1122.81Zm-9.31-40.92,1.66-1.06C354,1082.35,353.79,1082.47,354.43,1081.89Z" />
    </g>
    <path class="cls-17" style="stroke-linecap: round; stroke-dasharray: 720; stroke-dashoffset:720;" d="M487,1447a879,879,0,0,0,4.73-138.16c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-167">
        <animate
            attributeName = "stroke-dashoffset"
            from = "720"
            to = "0"
            dur = "6s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id="tallo1"
        />
    </path>
    <g>
        <animateMotion
           dur="6s"
           begin="tallo1.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M200 630a879.09 879.09 0 004.77-138.17c-3-67.62-10.26-198.55-85.93-337.52-23.56-43.26-63.2-104.67-128.22-166.95"
        />
        <g class="flor flor1">
            <path class="cls-9" d="M176,713.18C136.37,737,67.44,653.71,46.25,589.64c-7.07-21.35-12.37-47.42-10.76-62.48,2-18.9,13.33-1.92,21.84,5.65C67.73,542.07,74.2,556.59,86,582.5c28.78,63.22,132.78,104.88,90,130.68" />
            <path class="cls-9" d="M180.15,683.36c31.83-34.34-23-119.11-73.84-152.87-16.94-11.26-34.63-14.75-46.41-21.38-8.77-4.94-10.63,8.72-6.26,18.64,5.35,12.13,15.8,32.64,24.71,49.81,29.75,57.37,67.38,142.92,101.8,105.8" />
            <path class="cls-9" d="M243.16,647C266,605.55,193.07,537.11,136,517.2c-19-6.64-37-5.55-49.93-9-9.65-2.57-8.26,11.18-1.71,19.7,8,10.43,22.92,27.7,35.55,42.12,42.2,48.2,98.61,121.77,123.27,77" />
            <path class="cls-9" d="M123.11,748.67c-48.22,18.77-99.53-71-105.26-136.32-1.91-21.77,2.81-35.65,2.6-50.31-.16-10.91,9.19-19.52,16.23-11.1,8.61,10.29,27.79,35.73,39.3,51.67,38.47,53.24,99.25,125.76,47.13,146.06" />
            <path class="cls-9" d="M131.8,777.3C85.53,800.75,26.34,716.37,14.72,651.88c-3.87-21.49-.44-35.79-2-50.37-1.14-10.86,7.38-20.35,15.15-12.66,9.5,9.41,30.89,32.86,43.79,47.6C114.78,685.7,181.82,752,131.8,777.3" />
            <path class="cls-11" d="M282.86,659.78c18.16-43.71-78.78-115.37-148.17-136-23.13-6.89-43.52-5.66-59.06-9.23-11.57-2.65-14.5,5-5.33,13.91,11.22,10.94,34.89,26.75,63.47,38.6,69.74,28.92,129.46,140,149.09,92.76" />
            <path class="cls-11" d="M232.79,670.92C256.51,624,178.94,556,118.5,539.28c-20.15-5.57-33.75-2.95-47.46-5.59-10.2-2-19.45,6.33-12.47,15C67.12,559.34,88.51,583.43,102,598c45,48.68,105.17,123.67,130.81,72.93" />
            <path class="cls-11" d="M127.82,798.2c-44.55,11.68-90.4-101.57-94.74-177.51-1.45-25.32,4.08-46.42,4.09-63.25,0-12.53,7.73-14.32,14.08-3.25C59,567.74,68.64,595.1,73.53,626.94,85.47,704.64,176,785.56,127.82,798.2" />
            <path class="cls-11" d="M196.53,799.46C157.93,824.81,79.05,732,51.19,661.25c-9.28-23.57-10.64-45.38-15.89-61.36-3.91-11.9,2.86-16.07,12.33-7.59,11.6,10.38,38.29,36.22,54.54,52.45,54.3,54.25,136.08,127.3,94.36,154.71" />
            <path class="cls-11" d="M194.69,716.58c28.92-37-33-119.16-86.53-149.85C90.3,556.5,72.34,554.18,60,548.28c-9.17-4.39-9.88,9.59-4.69,19.34,6.36,11.93,18.52,32,28.85,48.77,34.51,56.09,79.25,140.21,110.51,100.19" />
            <path class="cls-12" d="M298.37,704.79c32.2-34.93-32.51-121.68-89.58-156.35-19-11.55-38.37-15.19-51.52-22-9.8-5.07-15.19,1.08-9.83,11.22,6.56,12.4,22.95,32.08,45.28,49.34,54.51,42.14,70.84,155.56,105.65,117.79" />
            <path class="cls-12" d="M203.27,825.2c-36.34,30.57-122-36.28-155.25-93.8-11.08-19.17-21.19-43.21-22.25-58-1.32-18.55,13.33-4.41,23.41,1.23,12.34,6.9,21.58,19.61,38.34,42.25,40.87,55.24,155,75.28,115.75,108.32" />
            <path class="cls-12" d="M288.14,775.46c31.33-35.93-44.21-131.53-107.47-171.09-21.09-13.18-41.89-17.92-56.37-25.78-10.79-5.85-16,.49-9.52,11.56,7.94,13.56,28.13,45,40.9,64.29,42.68,64.32,98.6,159.88,132.46,121" />
            <path class="cls-12" d="M310.59,757.85c34-33.56-34.07-134.42-94.13-178.49-20-14.69-40.4-20.94-54.24-29.83-10.31-6.63-16-.68-10.37,10.84,6.89,14.1,24.62,47,35.89,67.11,37.65,67.26,86.13,166.65,122.85,130.37" />
            <path class="cls-12" d="M251,790.2c30.41-36.36-68.63-95.8-131.84-132.82C98.09,645,77.45,641,63,633.71c-10.76-5.43-15.82,1-9.23,11.68,8.08,13.11,13.73,33.72,26.67,52.28,43.24,62,137.69,131.84,170.57,92.53" />
            <path class="cls-12" d="M211.34,802.68c2.22-12.86-.9-29.25-100.14-121.49-9.18-8.53-28-25.64-57.41-36-4.29-1.51-7.89-2.56-10.24-3.2a96.9,96.9,0,0,0-1.63,12.31s-1.79,26.47,12.71,57.14c12.27,25.94,60.5,75.55,139,121.64C206.51,820.67,210.15,809.64,211.34,802.68Z" />
            <path class="cls-12" d="M277.36,784.45c14.8-44.17-67.91-100.5-129.28-142.3,0,0-12.91-8.79-63.93-23.53-2.71-.78-8.68-2.42-10.88.12-2.45,2.83,1,9.36,2.65,12.36,16.81,30.92,25.22,46.39,29.74,51.34C168,750.69,230.55,819.1,263.43,802.26,273,797.34,276.51,787,277.36,784.45Z" />
            <path class="cls-12" d="M271.31,772.83c49.43-16,47-92.22,19-130.53-9.33-12.77-23.82-20.15-31-28.17-5.34-6-13.8-3.08-15.42,5.27-2,10.22,0,27.93,8.71,45.48,21.14,42.83-34.76,125.26,18.68,108" />
            <path class="cls-12" d="M272,794.05c41.45-33.6,1.46-119.76-45.35-154.77-15.61-11.67-33.71-15.6-44.83-22.51-8.28-5.15-15.3.77-12.8,10.8,3.05,12.27,11.78,40.74,17.53,58.14,19.2,58.14,40.65,144.67,85.45,108.34" />
            <path class="cls-12" d="M265.79,802.32c30.89-43.2-46.06-68-95.29-83-16.41-5-33.55-2.4-45-4.74-8.5-1.74-13.69,5.78-9.46,13.72,5.17,9.71,7.28,27.15,15.89,40.44,28.79,44.44,100.43,80.32,133.83,33.62" />
            <path class="cls-12" d="M243.77,817.6C218.63,857.13,139.91,829,105,790.53,93.3,777.7,88.13,762,81,752.75c-5.28-6.89-.82-13.61,8.13-12.24,11,1.66,36.53,7,52.2,10.6C193.73,763.2,271,774.87,243.77,817.6" />
            <path class="cls-13" d="M202.06,836.13q5.88.11,11.94,0a324.2,324.2,0,0,0,83.07-12.63l2.74-6.35,6.81-5.23q1.19-4.15,2.38-8.3c8.36-21.75,10.46-39.16,10.84-50.89.3-9.37-.11-27.51-.13-27.5a1.3,1.3,0,0,0,0,.26L307,731.42l-11.55,8.18-7.26,18.3-15.43,6.74-7.26,18.3-22.65,14.71-8.18,21.6Z" />
            
            <g class="florcerrada" style="transform: scale(0.56);transform-origin: 10px 380px;">
                <path class="cls-16 hilera hilera1" d="M300.25,984.29C227.69,1028,101.4,875.33,62.57,758c-12.94-39.12-22.65-86.88-19.7-114.47,3.7-34.62,24.42-3.51,40,10.35,19.06,17,30.92,43.56,52.54,91C188.14,860.69,378.68,937,300.25,984.29"/>
                <path class="cls-16 hilera hilera1" d="M307.89,929.67c58.33-62.92-42.18-218.24-135.27-280.1-31-20.61-63.45-27-85-39.17-16.07-9-19.47,16-11.46,34.16,9.8,22.23,28.95,59.8,45.26,91.25C175.9,840.93,244.84,997.68,307.89,929.67"/>
                <path class="cls-16 hilera hilera1" d="M423.34,863c41.8-75.92-91.78-201.32-196.36-237.8-34.87-12.16-67.75-10.16-91.49-16.48-17.67-4.71-15.12,20.47-3.13,36.09C147,664,174.35,695.59,197.49,722c77.32,88.3,180.67,223.09,225.85,141"/>
                <path class="cls-16 hilera hilera1" d="M203.39,1049.31C115.05,1083.71,21,919.21,10.54,799.56c-3.5-39.88,5.15-65.31,4.76-92.18-.28-20,16.85-35.76,29.75-20.34,15.78,18.86,50.91,65.48,72,94.67,70.49,97.55,181.84,230.42,86.34,267.6"/>
                <path class="cls-16 hilera hilera1" d="M219.32,1101.77C134.54,1144.74,26.1,990.14,4.81,872c-7.1-39.38-.8-65.57-3.62-92.29-2.09-19.89,13.52-37.29,27.75-23.2,17.41,17.24,56.59,60.21,80.22,87.21,79,90.23,201.8,211.61,110.16,258.06"/>
                <path class="cls-16 hilera hilera1" d="M496.09,886.46c33.27-80.08-144.35-211.38-271.48-249.25-42.37-12.62-79.73-10.36-108.21-16.9-21.19-4.87-26.55,9.1-9.76,25.48,20.55,20,63.91,49,116.28,70.71,127.78,53,237.19,256.53,273.17,170"/>
                <path class="cls-16 hilera hilera1" d="M404.35,906.87c43.46-86-98.66-210.61-209.4-241.19-36.91-10.2-61.84-5.41-87-10.23C89.3,651.86,72.35,667,85.16,683c15.66,19.48,54.85,63.61,79.51,90.3,82.41,89.17,192.7,226.58,239.68,133.61"/>
                <path class="cls-16 hilera hilera1" d="M212,1140.06C130.4,1161.46,46.39,954,38.45,814.84,35.8,768.46,45.92,729.79,46,699c0-23,14.16-26.22,25.79-5.94C86,717.82,103.6,768,112.56,826.3c21.87,142.34,187.7,290.61,99.46,313.76"/>
                <path class="cls-16 hilera hilera1" d="M337.91,1142.36c-70.72,46.45-215.25-123.65-266.28-253.21C54.62,846,52.13,806,42.51,776.73c-7.15-21.81,5.24-29.43,22.6-13.9,21.25,19,70.15,66.35,99.92,96.1,99.48,99.39,249.33,233.22,172.88,283.43"/>
                <path class="cls-16 hilera hilera1" d="M334.54,990.52C387.52,922.69,274.15,772.21,176,716c-32.72-18.75-65.63-23-88.2-33.81-16.8-8-18.11,17.56-8.59,35.42,11.65,21.86,33.92,58.61,52.84,89.36,63.24,102.78,145.2,256.88,202.48,183.56"/>
                
                <path class="cls-16 hilera hilera2" d="M524.49,968.93c59-64-59.55-222.95-164.12-286.45-34.85-21.17-70.29-27.84-94.4-40.32-17.94-9.29-27.82,2-18,20.56,12,22.72,42,58.77,83,90.4,99.87,77.19,129.79,285,193.56,215.81"/>
                <path class="cls-16 hilera hilera2" d="M350.25,1189.53c-66.57,56-223.53-66.47-284.43-171.85C45.53,982.55,27,938.51,25.06,911.41c-2.42-34,24.42-8.07,42.89,2.26,22.6,12.64,39.54,35.93,70.23,77.41,74.89,101.2,284.05,137.91,212.07,198.45"/>
                <path class="cls-16 hilera hilera2" d="M505.76,1098.41c57.4-65.85-81-241-196.91-313.46-38.64-24.16-76.74-32.85-103.28-47.25-19.77-10.72-29.33.9-17.44,21.19,14.56,24.83,51.54,82.52,74.94,117.78,78.19,117.84,180.64,292.92,242.69,221.74"/>
                <path class="cls-16 hilera hilera2" d="M546.89,1066.14c62.24-61.49-62.42-246.28-172.47-327-36.69-26.91-74-38.35-99.38-54.65-18.88-12.13-29.3-1.25-19,19.86,12.62,25.83,45.1,86.07,65.75,122.95,69,123.24,157.82,305.35,225.09,238.87"/>
                <path class="cls-16 hilera hilera2" d="M437.71,1125.4C493.43,1058.79,312,949.88,196.15,882.06c-38.6-22.61-76.41-30-102.9-43.36-19.72-10-29,1.78-16.91,21.4,14.79,24,25.16,61.77,48.86,95.79,79.22,113.66,252.27,241.53,312.51,169.51"/>
                <path class="cls-16 hilera hilera2" d="M365.05,1148.27c4.05-23.56-1.65-53.59-183.47-222.58-16.82-15.63-51.24-47-105.19-66-7.86-2.77-14.45-4.69-18.77-5.87a177.45,177.45,0,0,0-3,22.56s-3.28,48.5,23.29,104.69c22.48,47.53,110.85,138.41,254.57,222.87C356.2,1181.24,362.86,1161,365.05,1148.27Z"/>
                <path class="cls-16 hilera hilera2" d="M486,1114.88C513.11,1034,361.59,930.74,249.14,854.15c0,0-23.65-16.11-117.13-43.1-5-1.43-15.9-4.44-19.93.23-4.48,5.17,1.87,17.13,4.85,22.62,30.81,56.67,46.21,85,54.49,94.07C285.71,1053,400.24,1178.36,460.49,1147.5,478.1,1138.49,484.45,1119.52,486,1114.88Z"/>
                
                <path class="cls-16 hilera hilera3" d="M474.92,1093.58c90.57-29.34,86.13-169,34.86-239.14C492.69,831,466.15,817.51,453,802.82c-9.79-10.94-25.3-5.64-28.27,9.66-3.64,18.73.08,51.17,16,83.33,38.74,78.45-63.68,229.49,34.23,197.77"/>
                <path class="cls-16 hilera hilera3" d="M476.23,1132.46c75.94-61.56,2.67-219.42-83.1-283.57-28.59-21.37-61.76-28.57-82.13-41.24-15.16-9.43-28,1.41-23.46,19.79,5.6,22.48,21.59,74.65,32.12,106.53,35.18,106.51,74.47,265,156.57,198.49"/>
                <path class="cls-16 hilera hilera3" d="M464.8,1147.61c56.61-79.14-84.38-124.65-174.57-152.14-30.07-9.16-61.49-4.39-82.4-8.68-15.57-3.19-25.08,10.58-17.34,25.13,9.49,17.79,13.34,49.74,29.12,74.1,52.75,81.41,184,147.15,245.19,61.59"/>
                <path class="cls-16 hilera hilera3" d="M424.46,1175.61c-46.07,72.42-190.29,20.9-254.34-49.6-21.35-23.51-30.82-52.26-43.81-69.22-9.67-12.62-1.5-24.93,14.91-22.43,20.06,3.05,66.93,12.8,95.64,19.43,95.92,22.14,237.41,43.53,187.6,121.82"/>
                <path class="cls-16 hilera hilera3" d="M348.05,1209.55q10.77.2,21.88,0a593.62,593.62,0,0,0,152.18-23.14l5-11.64,12.48-9.58q2.17-7.61,4.36-15.21c15.32-39.85,19.17-71.73,19.86-93.23.55-17.18-.2-50.4-.24-50.4a4.65,4.65,0,0,0,0,.48l-23.26,10.9-21.18,15-13.29,33.52-28.28,12.35-13.29,33.53-41.51,26.94q-7.49,19.8-15,39.59Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor3">
    <g class="hoja hoja2">
        <path class="cls-14" d="M520.68,588.78s78.19-136.79,236-22.07l102.75,78.84A79.88,79.88,0,0,0,827,643.36c-24.22,3.54-37.2,17.8-59.54,32.41,0,0-28.17,18.43-62.24,28.53-18.21,5.4-60.28,12.65-125.4-23,0,0-38-16.42-52.43-40.08S510.83,592.85,520.68,588.78Z" />
        <path class="cls-6" d="M589.27,652.11c-41.78-40.73-59.65-40.21-59.65-40.21,10.38-9.59,56-14.71,56-14.71,50.72,63.86,105.25,81.86,105.25,81.86-21.55-7.62-53.74-38-53.74-38-13.27-18.53-46-47.18-46-47.18,4.23-.37,8.27-.59,12.14-.69,5.62,0,11.21.06,16.45.25,19.39,1.15,31,4.91,31,4.91,37.6,42.52,72.33,57.16,84,61.15-18-8.67-75.59-59.06-81.6-64.33l.91,0,2.75.33-.87-.18c2.58.24,5.67.63,9.16,1.15l-8.29-1,70.06,13.91c22.13,34.37,53.16,34.62,53.16,34.62-29.06-7-45.94-28.46-50.42-34.84,12.43,2.74,25,5.59,36.68,8.3a30.78,30.78,0,0,1,2.8,2.08c8.6,7.18,19.84,13.74,26.43,17.67C789.05,632.1,779,623,775.36,619.7c26.48,6.2,46.49,11.13,46.49,11.13l-56.24-17.61,27.33-6.3c-34.42-1.06-31.53,3.67-31.53,3.67A163.76,163.76,0,0,0,705,600.21c7-8.8,51.64-10.11,51.64-10.11-7.49-9.07-62.16,3.54-62.16,3.54a167.91,167.91,0,0,0-42.44-4.6c4.47-11.82,67.67-26.41,67.67-26.41-25-6.83-77.39,23.26-77.39,23.26l-41.26.52c11-22.34,60.71-41,60.71-41-33.51-4.87-68.33,39.15-68.33,39.15-21.29,1.32-46.91,7.23-46.91,7.23,24-36.14,77.13-55.58,77.13-55.58-67.15,20.89-80.94,54.66-80.94,54.66-80.42,49.14-79.24,77.65-79.24,77.65s21.09-19.83,39.73-37c4.2-3,9.39-6.92,15.59-11.72C538.68,604.41,582,652,582,652c50.33,38.77,79.24,39.29,79.24,39.29C649.85,688.51,589.27,652.11,589.27,652.11Zm35.24-58.44,3.7.18C629.83,594.28,629.31,594.34,624.51,593.67Z" />
    </g>
    <g class="hoja hoja3">
        <path class="cls-14" d="M521,817s89.67-103.3,204.71,21L800,922.48s-44.88-23-83.43,10.22c0,0-100.6,45.77-160.73-27,0,0-29.57-20.4-37.89-43S512,818.79,521,817Z" />
        <path class="cls-6" d="M568.77,882.49c-28.71-41.74-44-44.31-44-44.31,10.46-6.41,50.15-3.09,50.15-3.09,32.42,62.95,75.83,87.48,75.83,87.48-17.07-10.13-39.37-41.41-39.37-41.41-8.17-18-31.23-47.94-31.23-47.94,3.66.4,7.15.9,10.45,1.46,4.8.91,9.54,2,14,3,16.31,4.24,25.54,9.4,25.54,9.4,24.85,42.55,52,60.88,61.23,66.24-13.91-10.42-54.42-63-58.64-68.55l.76.2,2.29.74-.71-.29c2.16.64,4.72,1.49,7.61,2.52l-6.9-2.23,57.32,23.68c13.05,33,39.43,38.45,39.43,38.45-23.56-10.88-34.32-32-37.06-38.18,10.13,4.43,20.34,9,29.83,13.26a25.16,25.16,0,0,1,2,2.24c6.11,7.56,14.57,15.05,19.53,19.51-4.55-5.52-11.6-15-14.11-18.38,21.5,9.74,37.71,17.32,37.71,17.32l-44.92-24.49,24.34-.76c-29.15-6.7-27.48-2.18-27.48-2.18a142.31,142.31,0,0,0-46.26-18.36c7.42-6.32,45.69.1,45.69.1-4.85-9-53.53-7.47-53.53-7.47a146,146,0,0,0-35.37-11.07C638.7,830.06,695,828.3,695,828.3c-20.11-10-69.84,6.75-69.84,6.75l-35.22-6.51c13.17-17.17,58.61-24.67,58.61-24.67-27.71-9.8-64.79,21.81-64.79,21.81-18.35-2.47-41.17-1.76-41.17-1.76,26.57-26.71,75.06-34.32,75.06-34.32-60.7,6.46-78.15,32.9-78.15,32.9-76.78,28.28-80.58,52.76-80.58,52.76s21.3-13.34,40.08-24.83c4.09-1.89,9.16-4.31,15.25-7.35,19.5-9.75,48.4,38.08,48.4,38.08C599,922.66,623.48,928,623.48,928,614.21,923.71,568.77,882.49,568.77,882.49Zm39.87-43.83,3.12.79C613.07,840.08,612.61,840.05,608.64,838.66Z" />
    </g>
    <path class="cls-17" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M488,1491c7.78-176,2.15-311.78-4.78-405.1-1.86-24.92-8.73-113.14-8.42-230.78.26-99.58.67-150.37,14.61-199.67C503,607.33,537.79,521.4,641.15,435.61">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "6s"
            begin = "semilla.begin + 1s"
            fill = freeze
            id = "tallo3"
        />
    </path>
    <g>
        <animateMotion
           dur="6s"
           begin="tallo3.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M-160 1050c7.78-176 2.15-311.79-4.78-405.11-1.86-24.92-8.73-113.14-8.42-230.78.26-99.57.67-150.37 14.61-199.67 13.66-48.14 48.38-134.08 151.74-219.87"
        />
        <g class="flor flor3">
            <path class="cls-9" d="M782.64,293.51c51.94,26,130.12-85.12,150.39-167.44,6.75-27.44,10.84-60.6,7.35-79.31C936,23.29,923.5,45.67,913.58,56c-12.12,12.62-18.81,31.43-31,65-29.87,82-156,144.37-99.9,172.49" />
            <path class="cls-9" d="M774.5,256.57C731.26,216.68,791.67,105.13,852,57.86,872.12,42.11,893.93,36,908,26.54c10.5-7,14.17,9.89,9.67,22.74-5.52,15.72-16.6,42.42-26.07,64.8C860,188.86,821.24,299.69,774.5,256.57" />
            <path class="cls-9" d="M692,217.19C659.38,167.52,744,74.65,813.54,44.13,836.72,34,859.31,33.56,875.2,28c11.83-4.16,11.44,13.19,4.07,24.51-9,13.84-26,36.93-40.4,56.23C790.73,173.21,727.29,270.88,692,217.19" />
            <path class="cls-9" d="M852.33,332.78c62.23,18.79,117.7-98.69,118.49-181,.26-27.45-7-44.38-8.18-62.76-.88-13.69-13.43-23.55-21.43-12.32-9.77,13.74-31.3,47.48-44.16,68.57-43,70.45-112,167.23-44.72,187.55" />
            <path class="cls-9" d="M844.25,369.49c60.25,24.84,126.12-86.64,134.36-168.55,2.75-27.3-3-44.87-2.46-63.28.37-13.71-11.24-24.77-20.21-14.38-11,12.72-35.47,44.19-50.18,63.91-49.16,65.9-126.64,155.45-61.51,182.3" />
            <path class="cls-10" d="M784.42,154.72c-78.31-64.4,5.66-80.24,60.11-89.19,18.16-3,43.69,4.32,57.28,3.75,10.1-.42,23.48,10.75,24.38,20.37,1.1,11.76,12.86,34.5,12.28,50.27-1.93,52.69-69.39,84.42-154.05,14.8" />
            <path class="cls-11" d="M651.11,246.54c-30.9-50.8,75.78-158.32,158-197.25,27.4-13,53-15.34,71.58-22.74C894.52,21,899.61,30,889.94,42.8c-11.84,15.72-38.2,39.88-71.43,60.05-81.07,49.25-134,198.6-167.4,143.69" />
            <path class="cls-11" d="M723.22,283.78C675.14,238.45,737.74,125,802,79.43c21.43-15.18,38.62-17.9,53.69-26.87,11.22-6.67,25.69-.83,21.15,12.42-5.56,16.21-20.55,53.81-30.23,76.77-32.36,76.72-71.45,191-123.41,142" />
            <path class="cls-11" d="M812.77,401.22C865.22,425.66,947.31,296,969.71,203.06c7.47-31,5.38-58.29,9.14-79.1,2.8-15.49-6.34-19.43-16.67-7.17-12.64,15-30.68,46.66-43.87,84.92-32.19,93.36-162.24,173.08-105.54,199.51" />
            <path class="cls-11" d="M765.34,403.58c50.83,28,140.54-96,168.51-187.33,9.32-30.44,8.88-57.88,13.89-78.41,3.73-15.29-5.15-19.84-16.19-8.3-13.51,14.13-44.41,49.11-63.17,71-62.69,73.26-158,172.76-103,203" />
            <path class="cls-11" d="M750.28,335.5C710.43,292,779.89,183,844,139.35c21.36-14.57,43.63-19.23,58.49-27.82,11-6.4,13.31,11,7.76,23.75-6.79,15.57-20.05,41.88-31.35,63.91-37.73,73.64-85.53,183.37-128.6,136.31" />
            <path class="cls-12" d="M628.52,295c-43.75-40.6,28.8-155.6,96.89-204.6,22.7-16.33,46.57-22.78,62.38-32.61,11.77-7.31,19.12-.13,13.4,13.09-7,16.18-25.59,42.43-51.88,66.24C685.17,195.22,675.82,338.88,628.52,295" />
            <path class="cls-12" d="M759.43,436.48c48.5,34.73,149.26-57.39,185.25-132.68,12-25.1,22.32-56.2,22.19-74.82-.16-23.37-17.13-4.22-29.2,3.83-14.77,9.85-25.11,26.68-43.87,56.67C848,362.67,707,398.94,759.43,436.48" />
            <path class="cls-12" d="M648.25,382.5c-42.76-41.94,42.49-169.07,117.86-224.81,25.12-18.58,50.7-26.56,68.08-37.82,12.94-8.38,20.1-1,13,13.55-8.62,17.76-30.82,59.17-44.93,84.53-47.16,84.73-107.84,209.9-154.06,164.55" />
            <path class="cls-12" d="M618.41,362.64c-45.84-38.71,29.51-171.7,100.42-232.78,23.64-20.36,48.54-30.18,65-42.67,12.26-9.31,20-2.42,14,12.56-7.24,18.33-26.23,61.25-38.37,87.56C718.94,275.25,668,404.49,618.41,362.64" />
            <path class="cls-12" d="M696.21,397.32c-41.65-42.56,76.59-126.71,152.13-179.27,25.18-17.52,50.64-24.59,68-35.14,13-7.86,19.92-.33,12.7,13.73-8.83,17.2-13.89,43.57-28.28,68.09-48.08,81.94-159.55,178.6-204.58,132.59" />
            <path class="cls-12" d="M747.1,409.07c-4-15.89-1.73-36.72,113.54-162,10.65-11.58,32.51-34.86,68.38-50.74,5.22-2.32,9.62-4,12.51-5a121.68,121.68,0,0,1,3.25,15.26s4.83,33-10.33,72.81c-12.83,33.7-68.38,100.55-162.12,166C754.92,431.13,749.28,417.67,747.1,409.07Z" />
            <path class="cls-12" d="M662.64,392.7c-22.86-53.87,75.21-132.52,148-190.89,0,0,15.31-12.28,77.76-35.73,3.32-1.24,10.64-3.88,13.64-.91,3.34,3.3-.36,11.82-2.11,15.73-18,40.38-27,60.58-32.22,67.22-71.44,91.6-143,183.4-185.88,165.52C669.3,408.42,664,395.79,662.64,392.7Z" />
            <path class="cls-12" d="M669.07,377.55c-63.48-15.21-67.91-110.9-36.61-161.62,10.43-16.91,27.86-27.57,36.06-38.32,6.11-8,17-5.21,19.84,5.1,3.49,12.6,2.68,35-6.46,57.81-22.29,55.71,55.8,153.49-12.83,137" />
            <path class="cls-12" d="M670.26,404.2c-55.21-38-13.56-149.86,41.65-198.29,18.4-16.14,40.69-22.83,53.94-32.59,9.86-7.26,19.24-.53,17.09,12.28-2.62,15.67-10.76,52.19-16.26,74.54-18.35,74.7-36.74,185.17-96.42,144.06" />
            <path class="cls-12" d="M678.88,414c-42.93-51.08,51-89.73,111.21-113.34,20.06-7.87,41.8-6.29,55.87-10.34,10.47-3,17.71,5.9,13.19,16.25-5.53,12.67-6.46,34.72-15.95,52.22C811.5,417.21,725.28,469.17,678.88,414" />
            <path class="cls-12" d="M708,430.93c35.37,47.05,131.21,4.12,171.22-47.5,13.34-17.21,18.28-37.37,26.25-49.66,5.94-9.14-.3-17.12-11.38-14.54-13.56,3.16-45.08,12.33-64.35,18.39-64.39,20.27-160,42.46-121.74,93.31" />
            <path class="cls-13" d="M762,450.05q-7.39.66-15,1.16a727,727,0,0,1-97.28,0l-7-6.63-5-8.72-9-5.89q-1.48-4.05-3-8.1l-5.54-2.57a281.56,281.56,0,0,1-13.85-62.16c-1.32-12.81-2.56-34.46-2.53-34.47s0,.18,0,.33l16.48,6.21,15.28,9.11q5.45,11.1,10.88,22.21l20,6.93q5.44,11.1,10.88,22.21l29.81,16.2,12.36,26.26Z" />
            <g class="florcerrada" style="transform: scale(0.6);transform-origin: 350px -20px;">
                <path class="cls-16 hilera hilera1" d="M1021.46,452.86C956.32,371.39,1122.19,192.44,1259.17,126c45.65-22.15,102.37-41.75,136.53-42.63,42.86-1.1,8.25,29.24-6.15,50.51-17.61,26-48.15,44.82-102.58,78.9C1154.14,296,1091.88,540.93,1021.46,452.86"/>
                <path class="cls-16 hilera hilera1" d="M1089.38,453.32c86.27,61,259.55-86.91,319.94-210.59,20.13-41.23,22.69-81.84,34-110.16,8.43-21.08-22.68-21.17-43.56-8.45-25.54,15.57-68.28,45-104,70.07C1176.27,277.8,996.13,387.4,1089.38,453.32"/>
                <path class="cls-16 hilera hilera1" d="M1189.46,583.43c99.46,38.7,230.85-144.71,258.4-278.3,9.18-44.53,1.41-84.34,5.27-114.35,2.88-22.33-27.45-15.14-44.57,2.05-20.94,21-55.12,59.49-83.62,92-95.23,108.72-243,256.75-135.48,298.58"/>
                <path class="cls-16 hilera hilera1" d="M926.37,345.18c-56.32-102.25,129.21-243.7,273.55-275.95,48.12-10.74,80.57-4.32,113.3-9.15,24.36-3.59,46.39,14.76,29.66,33-20.46,22.33-71.66,72.78-103.88,103.27C1131.37,298.22,987.26,455.72,926.37,345.18"/>
                <path class="cls-16 hilera hilera1" d="M864.92,373.14c-66.21-96.51,104.9-254,245.67-299.14,46.92-15.06,79.91-11.63,112.07-19.4,23.94-5.79,47.7,10.45,32.82,30.11-18.22,24-64.31,78.85-93.44,112.08-97.32,111-225.55,280.67-297.12,176.35"/>
                <path class="cls-16 hilera hilera1" d="M1172.67,676c103.15,27.62,234.59-210.51,260.18-371.84,8.53-53.77-.29-99,3.07-134.83,2.5-26.66-15.42-30.94-32.68-7.78-21.13,28.34-49.45,86-67.45,153.42-43.94,164.58-274.63,331.17-163.12,361"/>
                <path class="cls-16 hilera hilera1" d="M1132.87,567.36c112,39.09,241.06-154.62,260.42-294.75,6.45-46.72-3.44-76.36-1.63-107.81,1.34-23.4-19.94-41.63-37.29-23.41-21.23,22.28-68.74,77.28-97.31,111.72-95.48,115.07-245.3,272-124.19,314.25"/>
                <path class="cls-16 hilera hilera1" d="M817,370.45c-39.38-96.16,200.26-232.39,368.81-264.67,56.19-10.76,105-4.69,142.68-9.66,28-3.7,34.31,13,11.44,30.52-28,21.39-86.32,51.07-156.08,71.47C1013.65,247.91,859.58,474.4,817,370.45"/>
                <path class="cls-16 hilera hilera1" d="M834.62,524.49c-68.18-78.78,116-282.82,265.87-366.14,50-27.78,98.31-37.3,132.5-53.79,25.45-12.27,36.78,1.61,20.63,25.33-19.75,29-69.6,96.39-101.08,137.56-105.18,137.57-244.21,342.2-317.92,257"/>
                <path class="cls-16 hilera hilera1" d="M1019.43,495.72c91.4,53.67,256.67-109.14,309.38-238.07,17.57-43,17.41-83.84,27-113.15,7.09-21.82-24.38-19.25-44.64-4.73-24.78,17.76-66,50.91-100.5,79-115.19,93.87-290,218.93-191.19,276.94"/>
                
                <path class="cls-16 hilera hilera2" d="M1076.62,724.09c87.69,61.63,262.47-108.89,323-246.83,20.18-46,22.56-90.33,33.89-121.78,8.43-23.41-6.93-33.64-28-18.63-25.79,18.35-64.91,60.85-96.89,115.94-78,134.43-326.81,204.68-232,271.3"/>
                <path class="cls-16 hilera hilera2" d="M779.05,547.21C699.88,475,823.91,263.56,942.65,172.12c39.58-30.47,90.34-60.25,123.1-67,41.11-8.47,13.83,28.49,4.21,52.72-11.76,29.64-37.44,54.09-83.09,98.29C875.49,364,864.63,625.24,779.05,547.21"/>
                <path class="cls-16 hilera hilera2" d="M915.52,722.24c89.69,59.38,281-138,350.67-291.24,23.22-51.09,27.64-99,40.9-133.74,9.88-25.87-5.85-35.66-28.69-17.84-28,21.79-92.36,76.3-131.61,110.58-131.15,114.58-328.23,268-231.27,332.24"/>
                <path class="cls-16 hilera hilera2" d="M961.59,767.21c85.16,66,290.49-116.17,371.19-263.61,26.9-49.15,34.81-96.56,50.59-130.18,11.74-25-3.24-36-27.33-20-29.48,19.6-97.74,69-139.41,100.22-139.24,104.22-347.11,242.2-255,313.53"/>
                <path class="cls-16 hilera hilera2" d="M871.53,643.55c90.35,57.21,193.84-182,257.83-334.35,21.33-50.79,24.2-98.15,36.22-132.65,9-25.69-6.88-35.11-28.87-17.17-26.9,22-71.31,40.74-109,75.2-125.89,115.14-253.88,347.13-156.19,409"/>
                <path class="cls-16 hilera hilera2" d="M831.82,558.58c29.42,1.12,65.14-10.72,241.92-260.09,16.34-23.06,49-70.17,63.48-139.12,2.11-10,3.37-18.39,4.11-23.86a220,220,0,0,0-28,0s-59.73,3.86-124,45.42c-54.38,35.15-151,157.78-230.73,346.92C790.14,553.13,815.89,558,831.82,558.58Z"/>
                <path class="cls-16 hilera hilera2" d="M892.21,700.8C995.4,720.75,1096.78,519,1172,369.35c0,0,15.82-31.49,33.6-150,.94-6.29,2.84-20.13-3.51-24.29-7-4.63-20.61,5.07-26.83,9.6-64.17,46.8-96.26,70.2-106,81.78-134.1,159.81-268.5,320-221,388.49C862.11,695,886.3,699.66,892.21,700.8Z"/>
                
                <path class="cls-16 hilera hilera3" d="M916.41,683.82c50.51,105.79,220.23,77.71,297.57,3.73,25.79-24.66,38-59.26,53.79-77.69,11.76-13.73,2.78-31.8-16.38-32.94-23.45-1.41-62.45,8.41-99.12,33-89.48,60-290.48-40.48-235.86,73.89"/>
                <path class="cls-16 hilera hilera3" d="M869.16,691.72c87.47,82.71,268.28-32.35,332.65-147.46,21.46-38.37,24.85-80,37-106.95,9.05-20-6.28-34-28-25.42-26.53,10.48-87.62,38.47-124.82,56.5C961.73,528.62,774.6,602.31,869.16,691.72"/>
                <path class="cls-16 hilera hilera3" d="M848.81,680.23C954.61,736.48,987.28,557,1006.18,442.44c6.31-38.19-4.61-75.76-2.77-102,1.37-19.52-17-28.9-33.49-17.08-20.17,14.46-58.55,24.35-85.73,47.57-90.81,77.6-149.75,248.49-35.38,309.29"/>
                <path class="cls-16 hilera hilera3" d="M808.09,635.54C712.21,591.06,751.68,406.65,827.35,317c25.23-29.87,58.79-46.1,77.38-64.71,13.84-13.85,30.18-5.88,29.8,14.55-.47,25-4.76,83.78-8.19,119.9-11.46,120.68-14.6,296.87-118.25,248.78"/>
                <path class="cls-16 hilera hilera3" d="M754.25,547.77q1.51,13.18,3.57,26.71a730.62,730.62,0,0,0,52.95,182l15,4.24,13.71,13.68,19.27,2.85c51.13,12.24,90.68,11.76,117,9.11,21.06-2.12,61.49-8.42,61.48-8.47l-.59.06-17.07-26.62-21.74-23.42-43.08-10.78-19.66-32.52-43.08-10.78-39.63-46.29-50.75-11.87Q778,581.72,754.25,547.77Z"/>
            </g>
        </g>
    </g>
</g>

<g class="all-flor2">
    <g class="hoja hoja5">
        <path class="cls-6" d="M424.89,464.35s53,58.16,117.42-14.92l41.5-49.61s-25.48,13.83-48.11-4.72c0,0-58.48-24.93-92.06,17.73,0,0-16.72,12.14-21.19,25.24S419.64,463.44,424.89,464.35Z" />
        <path class="cls-6" d="M482.26,399.1s-14,3.4-34.34,27.77c0,0-16,27.9-27.3,22.56-3.55-1.66-6.5-3-8.88-4-10.95-6.35-23.39-13.73-23.39-13.73s2.53,14,47.07,29.23c0,0,10.4,15,45.4,17.84,0,0-28-3.71-43.64-18.7a172.42,172.42,0,0,0,23.65-1.58s21.76,17.66,37.56,11.65c0,0-26.24-3.69-34.05-13.38l20.17-4.23s28.82,9,40.25,2.91c0,0-32.39-.23-35.86-5.51a83.87,83.87,0,0,0,20.19-6.86s28,.2,30.68-5c0,0-21.92,4.22-26.27.69a81.71,81.71,0,0,0,26.34-11.19s-.89,2.62,15.77-1.64l-14-.1,25.5-14.7s-9.22,4.58-21.45,10.48c1.4-2,5.32-7.53,7.86-10.77a107.23,107.23,0,0,0-11,11.49,15.61,15.61,0,0,1-1.14,1.32c-5.4,2.59-11.21,5.35-17,8,1.49-3.6,7.39-15.89,20.79-22.47,0,0-15.1,3.5-22.15,22.65l-32.63,14.41,3.93-1.38c-1.64.64-3.1,1.16-4.34,1.56l.41-.18-1.31.46-.43.12c2.35-3.22,24.92-34,32.77-40.23-5.26,3.22-20.6,14.13-34.3,38.94a68,68,0,0,1-14.55,5.76c-2.54.67-5.25,1.33-8,1.92q-2.83.56-6,1s12.85-17.52,17.3-28c0,0,12.39-18.29,22.06-24.35,0,0-24.62,14.7-42.39,51.35,0,0-22.78,2.46-28.88-1.09,0,0,8.76-1.68,24.7-26.08C451.43,426,477,401.69,482.26,399.1Zm-5.52,51.08-1.78.49C477.23,449.82,477.49,449.79,476.74,450.18Z" />
    </g>
    <g class="hoja hoja4">
        <path class="cls-14" d="M317.51,419.32S165.57,385.05,91.68,561.4L46,678.83S86.9,631.94,146.94,637c0,0,137.42-21.69,172.39-120.52,0,0,24.44-35.41,23.37-59.82S328.82,415.37,317.51,419.32Z" />
        <path class="cls-6" d="M251.86,576.61s25.74-19.43,48-77c0,0,10.74-58.54,37.78-62,8.45-1.08,15.43-2.08,21-2.94,27-1.52,57.87-3,57.87-3s-15.92-18.7-117.67,3.57c0,0-32.55-12.1-105.51,19.15,0,0,59.43-22.86,102.62-16.05,0,0-26.61,13.21-46.58,26.45,0,0-57.6-4.64-84.9,20.56,0,0,55.88-21.1,79.13-14.36l-37.49,26.93S141,513.65,122.53,534.44c0,0,65.65-32.6,76.72-28.12a236.53,236.53,0,0,0-35.51,30.93s-56.77,28.2-58.12,38.84c0,0,41-28.69,52.56-27.77a223.12,223.12,0,0,0-44.62,43.78s-.21-4.89-30.61,18.52l28.39-14.1L71.15,644.75S86.24,628.43,106.41,607c-1.29,4.44-5,16.83-7.59,24.32,3.61-6.83,9.83-18.38,13.3-28.57a29.59,29.59,0,0,1,1.29-3.16c8.92-9.42,18.53-19.52,28.1-29.45-.23,7-2.67,31.6-24.68,55.21,0,0,27.81-20.66,27.29-56.88l54.85-55-6.89,6.09c2.84-2.63,5.38-4.91,7.57-6.77l-.68.68,2.29-2,.78-.63c-2.27,7.28-24.12,77-35.22,94.33,8.15-10.22,30.73-42.37,39.29-93.93,0,0,8.19-10,25-23.54,4.61-3.58,9.59-7.35,14.68-11,3.54-2.48,7.32-5,11.35-7.58,0,0-12.45,39.64-13.37,60.05,0,0-10.93,40.34-25.82,59.36,0,0,38.42-47.34,46.09-121,0,0,44.15-26.91,59.22-27.75,0,0-16.42,11.48-29.81,64.68C293.43,504.43,260.52,567.33,251.86,576.61Zm-28.22-83.05c1-.83,2.11-1.69,3.22-2.56C222.93,494.6,222.42,494.9,223.64,493.56Z" />
    </g>

    <path class="cls-17" style="stroke-linecap: round; stroke-dasharray: 1120; stroke-dashoffset:1120;" d="M487,1469a4441.3,4441.3,0,0,0-20.7-706.72C451.4,626.24,431,498.61,407.48,380.14">
        <animate
            attributeName = "stroke-dashoffset"
            from = "1120"
            to = "0"
            dur = "6s"
            begin = "semilla.begin + 1.5s"
            fill = freeze
            id = "tallo2"
        />
    </path>
    <g>
        <animateMotion
           dur="6s"
           begin="tallo2.begin + 0s"
           fill="freeze"
           keyPoints="0;1"
           keyTimes="0;1"
           keySplines="0.7 0 0.84 0;"
           fill="remove"
           calcMode="linear"
           path="M70 1100a4442.49 4442.49 0 00-20.69-706.73 4433.022 4433.022 0 00-58.83-382.17"
        />
        <g class="flor flor2">
            <circle class="cls-12" cx="365.56" cy="215.19" r="137.23"/>
                <path class="cls-12" d="M370.8,133.48c-12.2.28-20.63-9.66-29.56-20.18-1.33-1.57-2.69-3.17-4.07-4.75A209,209,0,0,0,308,81c-15-11.74-24.65-10.91-28.68-19.42-2.5-5.26-1.3-9.79-.31-13.28,6.2-22,40.53-45.73,81.53-47.19,1,0,2.68-.09,4.95-.06,46.76.46,84.48,26.51,87.5,48.3a20.2,20.2,0,0,1-.62,9.06c-2.57,8.38-9,10.55-24.44,23.73,0,0-15.91,13.7-28,28.81-1.67,2.08-1.67,2.22-2.72,3.45C389.15,123.77,378.6,129.81,370.8,133.48Z" />
                <path class="cls-12" d="M370.8,220.5c-12.2.28-20.63-9.66-29.56-20.18-1.33-1.57-2.69-3.17-4.07-4.75A209.73,209.73,0,0,0,308,168c-15-11.73-24.65-10.9-28.68-19.41-2.5-5.26-1.3-9.79-.31-13.28,6.2-22,40.53-45.73,81.53-47.2,1,0,2.68-.08,4.95,0,46.76.46,84.48,26.51,87.5,48.3a20.2,20.2,0,0,1-.62,9.06c-2.57,8.38-9,10.55-24.44,23.73,0,0-15.91,13.7-28,28.81-1.67,2.08-1.67,2.22-2.72,3.45C389.15,210.79,378.6,216.83,370.8,220.5Z" />
                <path class="cls-12" d="M415.52,177.59c-6.48-6.87-3.47-18.44-.27-30.68.47-1.83,1-3.69,1.42-5.55,3.33-13.51,18.58-39,19.16-49.18.95-16.61-4.6-21.61-.38-29.67,2.61-5,6.57-7.33,9.66-9.11,19.44-11.2,54.66-7.32,76.81,15.42.57.58,1.44,1.5,2.59,2.82,23.69,27.37,23.81,66.73,9.25,83.14a26,26,0,0,1-7,5.73c-7.52,4.16-12.45,1.87-30.11,1.83,0,0-32.05,13.76-49.45,16.92-2.39.44-2.5.53-3.95.75A63.44,63.44,0,0,1,415.52,177.59Z" />
                <path class="cls-12" d="M446.4,227.34c.53-6.43,11-9.92,22-13.62,1.65-.56,3.33-1.12,5-1.7a200.27,200.27,0,0,0,29.39-12.71c12.68-6.81,12.49-11.92,21.23-13.24a32.18,32.18,0,0,1,13.23,1.08c21.47,5.32,42.84,25.56,41.59,47.22,0,.55-.09,1.42-.26,2.6-3.56,24.51-32,41.87-53.87,41.41a37.38,37.38,0,0,1-9-1.17c-8.17-2.14-9.9-5.74-22-15a236.32,236.32,0,0,0-26.82-17.41c-2-1.07-2.1-1.08-3.25-1.75A54,54,0,0,1,446.4,227.34Z" />
                <path class="cls-12" d="M365.43,215.76c.53-6.43,11-9.92,22-13.62,1.65-.56,3.33-1.12,5-1.7a200.27,200.27,0,0,0,29.39-12.71c12.68-6.8,12.49-11.92,21.23-13.24a32.35,32.35,0,0,1,13.23,1.08c21.47,5.32,42.84,25.57,41.59,47.23,0,.55-.09,1.41-.26,2.6-3.56,24.5-32,41.86-53.87,41.41a38.07,38.07,0,0,1-9-1.18c-8.17-2.13-9.9-5.73-22-15A236.32,236.32,0,0,0,386,233.17c-2-1.07-2.1-1.08-3.25-1.75A54,54,0,0,1,365.43,215.76Z" />
                <path class="cls-12" d="M410,283.9c7.5-5.72,18.69-1.51,30.54,2.94,1.77.67,3.56,1.34,5.37,2a192.07,192.07,0,0,0,34.68,9.1c16.41,2.68,22-2.31,29.54,2.72,4.68,3.12,6.61,7.31,8.05,10.56,9.1,20.51,1.57,55.12-23.36,74.78-.64.5-1.64,1.28-3.08,2.28C462,409,422.85,405,408.05,388.78a26,26,0,0,1-5-7.58c-3.34-7.91-.55-12.57,1.33-30.14a230.28,230.28,0,0,0,.57-35.84c-.18-2.43-.26-2.54-.33-4A63.38,63.38,0,0,1,410,283.9Z" />
                <path class="cls-12" d="M380,204c7.5-5.73,18.69-1.52,30.53,2.94,1.78.66,3.57,1.34,5.38,2a192.2,192.2,0,0,0,34.67,9.1c16.42,2.68,22-2.32,29.55,2.72,4.68,3.11,6.6,7.3,8,10.56,9.1,20.51,1.56,55.12-23.36,74.78-.64.5-1.64,1.27-3.08,2.28-29.69,20.7-68.85,16.71-83.65.51a26.13,26.13,0,0,1-5-7.58c-3.35-7.92-.55-12.58,1.33-30.14a230.44,230.44,0,0,0,.57-35.85c-.19-2.42-.27-2.54-.33-4A63.31,63.31,0,0,1,380,204Z" />
                <path class="cls-12" d="M344.2,266.68c9.28,1.75,13.64,12.88,18.25,24.66.69,1.76,1.39,3.55,2.12,5.33,5.24,12.88,10.91,50.74,16.44,59.34,9,14,16.42,14.77,17.74,23.77.82,5.56-1,9.8-2.46,13.05-9.14,20.49-39.91,38.05-71.2,32.68-.8-.14-2-.37-3.75-.77-35.25-8.21-58.49-40-56.35-61.82a25.72,25.72,0,0,1,2.31-8.76c3.64-7.79,9-8.83,23.28-19.19,0,0,14.81-38.25,27-51,1.68-1.76,1.71-1.9,2.75-2.93A63.45,63.45,0,0,1,344.2,266.68Z" />
                <path class="cls-12" d="M363.31,201.22c9.27,1.75,13.63,12.88,18.25,24.66q1,2.66,2.11,5.33c5.25,12.88,10.91,50.74,16.44,59.34,9,14,16.42,14.78,17.75,23.78.82,5.56-1,9.79-2.46,13-9.15,20.49-39.92,38.05-71.21,32.68-.79-.14-2-.36-3.75-.76-35.25-8.22-58.49-40-56.35-61.82a25.76,25.76,0,0,1,2.31-8.77c3.64-7.78,9-8.83,23.29-19.18,0,0,14.8-38.25,27-51,1.68-1.76,1.72-1.9,2.76-2.92A63.49,63.49,0,0,1,363.31,201.22Z" />
                <path class="cls-12" d="M292.58,252.16c4.91,8.06-.45,18.75-6.12,30.06-.84,1.7-1.7,3.41-2.54,5.14a193.5,193.5,0,0,0-12.68,33.53c-4.37,16.05,0,22.09-5.79,29.1-3.58,4.33-7.95,5.81-11.34,6.9-21.35,6.91-55-4.2-71.93-31.05-.43-.68-1.1-1.76-1.94-3.29-17.49-31.7-9.42-70.23,8.23-83.25a25.91,25.91,0,0,1,8.06-4.15c8.22-2.5,12.57.76,29.84,4.47A229,229,0,0,0,262,243.93c2.44.08,2.56,0,4,.1A63.29,63.29,0,0,1,292.58,252.16Z" />
                <path class="cls-12" d="M289.09,186.24c-2.13,7.08-13.26,8.94-25,10.91-1.76.29-3.55.59-5.33.91a194.48,194.48,0,0,0-32,8.45c-14.14,5.12-15.23,10.88-24.14,10.64C197,217,193,215,189.82,213.34c-19.74-10.16-35.66-37-29-61,.17-.61.45-1.57.91-2.86,9.62-26.71,41.86-40.55,63.23-35.74a32.36,32.36,0,0,1,8.52,3.08c7.49,4,8.28,8.35,17.84,21.16a229.25,229.25,0,0,0,22,24.74c1.66,1.58,1.79,1.62,2.75,2.59A56,56,0,0,1,289.09,186.24Z" />
                <path class="cls-12" d="M373,238.42c-2.13,7.08-13.26,8.94-25,10.91-1.76.29-3.55.59-5.33.91a193.49,193.49,0,0,0-32,8.45c-14.14,5.12-15.23,10.88-24.14,10.64-5.5-.15-9.59-2.19-12.72-3.81-19.74-10.16-35.66-37-29-61,.17-.62.45-1.57.91-2.86,9.62-26.71,41.86-40.56,63.23-35.74A32.73,32.73,0,0,1,317.4,169c7.49,4,8.28,8.36,17.84,21.17a228.61,228.61,0,0,0,22,24.73c1.66,1.58,1.79,1.63,2.75,2.6A56,56,0,0,1,373,238.42Z" />
                <path class="cls-12" d="M336.42,138.74c-8.53,4-18.6-2.4-29.26-9.22-1.6-1-3.21-2.06-4.85-3.07a192.37,192.37,0,0,0-32-16.11c-15.5-6-22-2.3-28.33-8.8-3.93-4-5-8.52-5.68-12-4.64-22,9.93-54.25,38.4-68.3.72-.35,1.86-.9,3.48-1.58,33.35-14.08,70.82-2,81.92,16.89A25.74,25.74,0,0,1,363.37,45c1.63,8.44-2.07,12.41-7.56,29.2a229.69,229.69,0,0,0-8,34.94c-.33,2.41-.27,2.54-.52,4A63.39,63.39,0,0,1,336.42,138.74Z" />
                <path class="cls-12" d="M402.87,142.38c-8.71-3.64-10.66-15.43-12.73-27.92-.3-1.87-.62-3.76-1-5.65a192.46,192.46,0,0,0-9.45-34.58c-5.89-15.56-13-17.87-12.42-26.94.36-5.61,3-9.38,5.12-12.26,13.21-18.14,46.95-28.91,76.44-17.16.75.3,1.93.79,3.51,1.53,32.78,15.37,48.9,51.27,42.27,72.19a25.84,25.84,0,0,1-4.08,8.09c-5.18,6.86-10.61,6.77-26.77,13.92A230,230,0,0,0,432.48,131c-2,1.37-2.07,1.5-3.31,2.29A63.44,63.44,0,0,1,402.87,142.38Z" />
                <path class="cls-12" d="M444.63,194.19c-3.12-8.9,4.34-18.24,12.23-28.13,1.18-1.48,2.38-3,3.56-4.5a192.36,192.36,0,0,0,19.37-30.16c7.62-14.79,4.58-21.61,11.72-27.26,4.4-3.49,9-4,12.52-4.39,22.32-2.33,52.91,15.54,63.91,45.32.28.76.7,2,1.21,3.63,10.51,34.64-5.38,70.65-25.36,79.71A25.78,25.78,0,0,1,535,230.8c-8.56.74-12.13-3.36-28.25-10.58a230.23,230.23,0,0,0-33.91-11.61c-2.37-.58-2.5-.54-3.91-.93A63.31,63.31,0,0,1,444.63,194.19Z" />
                <path class="cls-12" d="M434.07,259.9c4.53-8.28,16.46-9,29.09-9.73,1.89-.12,3.81-.23,5.72-.37A193,193,0,0,0,504.26,244c16.09-4.23,19.13-11,28.1-9.53,5.54.94,9,4,11.65,6.37,16.66,15,23.85,49.72,9.07,77.82-.37.71-1,1.83-1.88,3.33-18.71,31-56.11,43.27-76.21,34.49a25.84,25.84,0,0,1-7.63-4.91c-6.27-5.86-5.62-11.26-11-28.07a229.74,229.74,0,0,0-14.06-33c-1.16-2.15-1.28-2.22-1.93-3.53A63.32,63.32,0,0,1,434.07,259.9Z" />
                <path class="cls-12" d="M367.26,298.6c10.65-2.52,20.14,5.64,30.19,14.28,1.5,1.3,3,2.61,4.57,3.9a200.34,200.34,0,0,0,31.39,21.61c15.68,8.7,23.93,6.12,29.26,13.7,3.29,4.68,3.19,9.33,3.06,12.92-.83,22.63-26,52.17-61.64,61.15-.91.23-2.34.58-4.33,1-41.14,8.16-79.74-10.36-87-31.11a22.47,22.47,0,0,1-1.35-9c.49-8.67,5.71-12,16.46-27.7A239.35,239.35,0,0,0,346.43,326c1-2.34,1-2.48,1.66-3.87C353.2,311.47,361.19,303.63,367.26,298.6Z" />
                <path class="cls-12" d="M304.92,272.42c5.24,3.62,3,14.38.62,25.78-.36,1.7-.72,3.43-1.06,5.16a201,201,0,0,0-3.84,31.7c-.54,14.32,3.94,16.68.69,24.89a33,33,0,0,1-7.55,10.92c-15.31,16-43.33,24.48-61.23,12.73-.46-.29-1.16-.78-2.09-1.51-19.18-15.14-19.79-48.3-8.44-67a38.46,38.46,0,0,1,5.5-7.19c5.92-6,9.87-5.75,23.9-11.64a236.57,236.57,0,0,0,28.32-14.64c1.9-1.17,2-1.28,3.13-1.95A54,54,0,0,1,304.92,272.42Z" />
                <path class="cls-12" d="M283.85,219.28c1.2,9.36-8,16.95-17.81,25-1.47,1.2-3,2.41-4.42,3.65a193,193,0,0,0-25.22,25.48c-10.52,12.88-9,20.19-17.12,24.23-5,2.49-9.63,2.07-13.17,1.69-22.32-2.37-48.52-26.2-53.09-57.62-.11-.8-.28-2.06-.43-3.8-3.08-36.07,20-68,41.38-72.7a26,26,0,0,1,9.05-.51c8.53,1,11.17,5.8,25.44,16.22a229.88,229.88,0,0,0,30.76,18.41c2.19,1.05,2.33,1,3.63,1.72A63.33,63.33,0,0,1,283.85,219.28Z" />
                <path class="cls-12" d="M310.16,154.51c-5.28,6.14-16.51,3.67-28.4,1.05-1.78-.39-3.58-.79-5.39-1.16a191.64,191.64,0,0,0-33.77-4.07c-15.55-.43-19.26,4.8-27.44,1.13-5-2.27-7.9-5.86-10.07-8.65-13.65-17.61-16-50.13,1.39-71.12.44-.54,1.14-1.37,2.18-2.46,21.39-22.52,57.87-23.67,75.53-10.69a30,30,0,0,1,6.49,6.31c5.12,6.82,3.83,11.41,6.76,27.68a227.68,227.68,0,0,0,8.95,32.78c.81,2.2.91,2.29,1.35,3.62A58,58,0,0,1,310.16,154.51Z" />
            <g class="florcerrada">
                <circle class="cls-16" cx="365.56" cy="215.19" r="137.23"/>
                <path class="cls-16" d="M370.8,133.48c-12.2.28-20.63-9.66-29.56-20.18-1.33-1.57-2.69-3.17-4.07-4.75A209,209,0,0,0,308,81c-15-11.74-24.65-10.91-28.68-19.42-2.5-5.26-1.3-9.79-.31-13.28,6.2-22,40.53-45.73,81.53-47.19,1,0,2.68-.09,4.95-.06,46.76.46,84.48,26.51,87.5,48.3a20.2,20.2,0,0,1-.62,9.06c-2.57,8.38-9,10.55-24.44,23.73,0,0-15.91,13.7-28,28.81-1.67,2.08-1.67,2.22-2.72,3.45C389.15,123.77,378.6,129.81,370.8,133.48Z" />
                <path class="cls-16" d="M370.8,220.5c-12.2.28-20.63-9.66-29.56-20.18-1.33-1.57-2.69-3.17-4.07-4.75A209.73,209.73,0,0,0,308,168c-15-11.73-24.65-10.9-28.68-19.41-2.5-5.26-1.3-9.79-.31-13.28,6.2-22,40.53-45.73,81.53-47.2,1,0,2.68-.08,4.95,0,46.76.46,84.48,26.51,87.5,48.3a20.2,20.2,0,0,1-.62,9.06c-2.57,8.38-9,10.55-24.44,23.73,0,0-15.91,13.7-28,28.81-1.67,2.08-1.67,2.22-2.72,3.45C389.15,210.79,378.6,216.83,370.8,220.5Z" />
                <path class="cls-16" d="M415.52,177.59c-6.48-6.87-3.47-18.44-.27-30.68.47-1.83,1-3.69,1.42-5.55,3.33-13.51,18.58-39,19.16-49.18.95-16.61-4.6-21.61-.38-29.67,2.61-5,6.57-7.33,9.66-9.11,19.44-11.2,54.66-7.32,76.81,15.42.57.58,1.44,1.5,2.59,2.82,23.69,27.37,23.81,66.73,9.25,83.14a26,26,0,0,1-7,5.73c-7.52,4.16-12.45,1.87-30.11,1.83,0,0-32.05,13.76-49.45,16.92-2.39.44-2.5.53-3.95.75A63.44,63.44,0,0,1,415.52,177.59Z" />
                <path class="cls-16" d="M446.4,227.34c.53-6.43,11-9.92,22-13.62,1.65-.56,3.33-1.12,5-1.7a200.27,200.27,0,0,0,29.39-12.71c12.68-6.81,12.49-11.92,21.23-13.24a32.18,32.18,0,0,1,13.23,1.08c21.47,5.32,42.84,25.56,41.59,47.22,0,.55-.09,1.42-.26,2.6-3.56,24.51-32,41.87-53.87,41.41a37.38,37.38,0,0,1-9-1.17c-8.17-2.14-9.9-5.74-22-15a236.32,236.32,0,0,0-26.82-17.41c-2-1.07-2.1-1.08-3.25-1.75A54,54,0,0,1,446.4,227.34Z" />
                <path class="cls-16" d="M365.43,215.76c.53-6.43,11-9.92,22-13.62,1.65-.56,3.33-1.12,5-1.7a200.27,200.27,0,0,0,29.39-12.71c12.68-6.8,12.49-11.92,21.23-13.24a32.35,32.35,0,0,1,13.23,1.08c21.47,5.32,42.84,25.57,41.59,47.23,0,.55-.09,1.41-.26,2.6-3.56,24.5-32,41.86-53.87,41.41a38.07,38.07,0,0,1-9-1.18c-8.17-2.13-9.9-5.73-22-15A236.32,236.32,0,0,0,386,233.17c-2-1.07-2.1-1.08-3.25-1.75A54,54,0,0,1,365.43,215.76Z" />
                <path class="cls-16" d="M410,283.9c7.5-5.72,18.69-1.51,30.54,2.94,1.77.67,3.56,1.34,5.37,2a192.07,192.07,0,0,0,34.68,9.1c16.41,2.68,22-2.31,29.54,2.72,4.68,3.12,6.61,7.31,8.05,10.56,9.1,20.51,1.57,55.12-23.36,74.78-.64.5-1.64,1.28-3.08,2.28C462,409,422.85,405,408.05,388.78a26,26,0,0,1-5-7.58c-3.34-7.91-.55-12.57,1.33-30.14a230.28,230.28,0,0,0,.57-35.84c-.18-2.43-.26-2.54-.33-4A63.38,63.38,0,0,1,410,283.9Z" />
                <path class="cls-16" d="M380,204c7.5-5.73,18.69-1.52,30.53,2.94,1.78.66,3.57,1.34,5.38,2a192.2,192.2,0,0,0,34.67,9.1c16.42,2.68,22-2.32,29.55,2.72,4.68,3.11,6.6,7.3,8,10.56,9.1,20.51,1.56,55.12-23.36,74.78-.64.5-1.64,1.27-3.08,2.28-29.69,20.7-68.85,16.71-83.65.51a26.13,26.13,0,0,1-5-7.58c-3.35-7.92-.55-12.58,1.33-30.14a230.44,230.44,0,0,0,.57-35.85c-.19-2.42-.27-2.54-.33-4A63.31,63.31,0,0,1,380,204Z" />
                <path class="cls-16" d="M344.2,266.68c9.28,1.75,13.64,12.88,18.25,24.66.69,1.76,1.39,3.55,2.12,5.33,5.24,12.88,10.91,50.74,16.44,59.34,9,14,16.42,14.77,17.74,23.77.82,5.56-1,9.8-2.46,13.05-9.14,20.49-39.91,38.05-71.2,32.68-.8-.14-2-.37-3.75-.77-35.25-8.21-58.49-40-56.35-61.82a25.72,25.72,0,0,1,2.31-8.76c3.64-7.79,9-8.83,23.28-19.19,0,0,14.81-38.25,27-51,1.68-1.76,1.71-1.9,2.75-2.93A63.45,63.45,0,0,1,344.2,266.68Z" />
                <path class="cls-16" d="M363.31,201.22c9.27,1.75,13.63,12.88,18.25,24.66q1,2.66,2.11,5.33c5.25,12.88,10.91,50.74,16.44,59.34,9,14,16.42,14.78,17.75,23.78.82,5.56-1,9.79-2.46,13-9.15,20.49-39.92,38.05-71.21,32.68-.79-.14-2-.36-3.75-.76-35.25-8.22-58.49-40-56.35-61.82a25.76,25.76,0,0,1,2.31-8.77c3.64-7.78,9-8.83,23.29-19.18,0,0,14.8-38.25,27-51,1.68-1.76,1.72-1.9,2.76-2.92A63.49,63.49,0,0,1,363.31,201.22Z" />
                <path class="cls-16" d="M292.58,252.16c4.91,8.06-.45,18.75-6.12,30.06-.84,1.7-1.7,3.41-2.54,5.14a193.5,193.5,0,0,0-12.68,33.53c-4.37,16.05,0,22.09-5.79,29.1-3.58,4.33-7.95,5.81-11.34,6.9-21.35,6.91-55-4.2-71.93-31.05-.43-.68-1.1-1.76-1.94-3.29-17.49-31.7-9.42-70.23,8.23-83.25a25.91,25.91,0,0,1,8.06-4.15c8.22-2.5,12.57.76,29.84,4.47A229,229,0,0,0,262,243.93c2.44.08,2.56,0,4,.1A63.29,63.29,0,0,1,292.58,252.16Z" />
                <path class="cls-16" d="M289.09,186.24c-2.13,7.08-13.26,8.94-25,10.91-1.76.29-3.55.59-5.33.91a194.48,194.48,0,0,0-32,8.45c-14.14,5.12-15.23,10.88-24.14,10.64C197,217,193,215,189.82,213.34c-19.74-10.16-35.66-37-29-61,.17-.61.45-1.57.91-2.86,9.62-26.71,41.86-40.55,63.23-35.74a32.36,32.36,0,0,1,8.52,3.08c7.49,4,8.28,8.35,17.84,21.16a229.25,229.25,0,0,0,22,24.74c1.66,1.58,1.79,1.62,2.75,2.59A56,56,0,0,1,289.09,186.24Z" />
                <path class="cls-16" d="M373,238.42c-2.13,7.08-13.26,8.94-25,10.91-1.76.29-3.55.59-5.33.91a193.49,193.49,0,0,0-32,8.45c-14.14,5.12-15.23,10.88-24.14,10.64-5.5-.15-9.59-2.19-12.72-3.81-19.74-10.16-35.66-37-29-61,.17-.62.45-1.57.91-2.86,9.62-26.71,41.86-40.56,63.23-35.74A32.73,32.73,0,0,1,317.4,169c7.49,4,8.28,8.36,17.84,21.17a228.61,228.61,0,0,0,22,24.73c1.66,1.58,1.79,1.63,2.75,2.6A56,56,0,0,1,373,238.42Z" />
                <path class="cls-16" d="M336.42,138.74c-8.53,4-18.6-2.4-29.26-9.22-1.6-1-3.21-2.06-4.85-3.07a192.37,192.37,0,0,0-32-16.11c-15.5-6-22-2.3-28.33-8.8-3.93-4-5-8.52-5.68-12-4.64-22,9.93-54.25,38.4-68.3.72-.35,1.86-.9,3.48-1.58,33.35-14.08,70.82-2,81.92,16.89A25.74,25.74,0,0,1,363.37,45c1.63,8.44-2.07,12.41-7.56,29.2a229.69,229.69,0,0,0-8,34.94c-.33,2.41-.27,2.54-.52,4A63.39,63.39,0,0,1,336.42,138.74Z" />
                <path class="cls-16" d="M402.87,142.38c-8.71-3.64-10.66-15.43-12.73-27.92-.3-1.87-.62-3.76-1-5.65a192.46,192.46,0,0,0-9.45-34.58c-5.89-15.56-13-17.87-12.42-26.94.36-5.61,3-9.38,5.12-12.26,13.21-18.14,46.95-28.91,76.44-17.16.75.3,1.93.79,3.51,1.53,32.78,15.37,48.9,51.27,42.27,72.19a25.84,25.84,0,0,1-4.08,8.09c-5.18,6.86-10.61,6.77-26.77,13.92A230,230,0,0,0,432.48,131c-2,1.37-2.07,1.5-3.31,2.29A63.44,63.44,0,0,1,402.87,142.38Z" />
                <path class="cls-16" d="M444.63,194.19c-3.12-8.9,4.34-18.24,12.23-28.13,1.18-1.48,2.38-3,3.56-4.5a192.36,192.36,0,0,0,19.37-30.16c7.62-14.79,4.58-21.61,11.72-27.26,4.4-3.49,9-4,12.52-4.39,22.32-2.33,52.91,15.54,63.91,45.32.28.76.7,2,1.21,3.63,10.51,34.64-5.38,70.65-25.36,79.71A25.78,25.78,0,0,1,535,230.8c-8.56.74-12.13-3.36-28.25-10.58a230.23,230.23,0,0,0-33.91-11.61c-2.37-.58-2.5-.54-3.91-.93A63.31,63.31,0,0,1,444.63,194.19Z" />
                <path class="cls-16" d="M434.07,259.9c4.53-8.28,16.46-9,29.09-9.73,1.89-.12,3.81-.23,5.72-.37A193,193,0,0,0,504.26,244c16.09-4.23,19.13-11,28.1-9.53,5.54.94,9,4,11.65,6.37,16.66,15,23.85,49.72,9.07,77.82-.37.71-1,1.83-1.88,3.33-18.71,31-56.11,43.27-76.21,34.49a25.84,25.84,0,0,1-7.63-4.91c-6.27-5.86-5.62-11.26-11-28.07a229.74,229.74,0,0,0-14.06-33c-1.16-2.15-1.28-2.22-1.93-3.53A63.32,63.32,0,0,1,434.07,259.9Z" />
                <path class="cls-16" d="M367.26,298.6c10.65-2.52,20.14,5.64,30.19,14.28,1.5,1.3,3,2.61,4.57,3.9a200.34,200.34,0,0,0,31.39,21.61c15.68,8.7,23.93,6.12,29.26,13.7,3.29,4.68,3.19,9.33,3.06,12.92-.83,22.63-26,52.17-61.64,61.15-.91.23-2.34.58-4.33,1-41.14,8.16-79.74-10.36-87-31.11a22.47,22.47,0,0,1-1.35-9c.49-8.67,5.71-12,16.46-27.7A239.35,239.35,0,0,0,346.43,326c1-2.34,1-2.48,1.66-3.87C353.2,311.47,361.19,303.63,367.26,298.6Z" />
                <path class="cls-16" d="M304.92,272.42c5.24,3.62,3,14.38.62,25.78-.36,1.7-.72,3.43-1.06,5.16a201,201,0,0,0-3.84,31.7c-.54,14.32,3.94,16.68.69,24.89a33,33,0,0,1-7.55,10.92c-15.31,16-43.33,24.48-61.23,12.73-.46-.29-1.16-.78-2.09-1.51-19.18-15.14-19.79-48.3-8.44-67a38.46,38.46,0,0,1,5.5-7.19c5.92-6,9.87-5.75,23.9-11.64a236.57,236.57,0,0,0,28.32-14.64c1.9-1.17,2-1.28,3.13-1.95A54,54,0,0,1,304.92,272.42Z" />
                <path class="cls-16" d="M283.85,219.28c1.2,9.36-8,16.95-17.81,25-1.47,1.2-3,2.41-4.42,3.65a193,193,0,0,0-25.22,25.48c-10.52,12.88-9,20.19-17.12,24.23-5,2.49-9.63,2.07-13.17,1.69-22.32-2.37-48.52-26.2-53.09-57.62-.11-.8-.28-2.06-.43-3.8-3.08-36.07,20-68,41.38-72.7a26,26,0,0,1,9.05-.51c8.53,1,11.17,5.8,25.44,16.22a229.88,229.88,0,0,0,30.76,18.41c2.19,1.05,2.33,1,3.63,1.72A63.33,63.33,0,0,1,283.85,219.28Z" />
                <path class="cls-16" d="M310.16,154.51c-5.28,6.14-16.51,3.67-28.4,1.05-1.78-.39-3.58-.79-5.39-1.16a191.64,191.64,0,0,0-33.77-4.07c-15.55-.43-19.26,4.8-27.44,1.13-5-2.27-7.9-5.86-10.07-8.65-13.65-17.61-16-50.13,1.39-71.12.44-.54,1.14-1.37,2.18-2.46,21.39-22.52,57.87-23.67,75.53-10.69a30,30,0,0,1,6.49,6.31c5.12,6.82,3.83,11.41,6.76,27.68a227.68,227.68,0,0,0,8.95,32.78c.81,2.2.91,2.29,1.35,3.62A58,58,0,0,1,310.16,154.51Z" />
            </g>
        </g>
    </g>
</g>

<g class="cls-15" style="opacity: 0; transform: translate(5px,-5px);">
    <animate
        attributeName = "opacity"
        from = "0.2"
        to = "1"
        dur = "3s"
        begin = "semilla.begin + 1s"
        fill = "freeze"
    />
    <g>
        <path class="cls-5" d="M484.06,1523.49a33.68,33.68,0,0,0-27-21c-13.83-1.62-27.55,6-34,19Z" />
        <path class="cls-5" d="M473.06,1524.49c6.45-13,20.17-20.62,34-19a33.68,33.68,0,0,1,27,21q-14.46-.51-29-1Q489,1525,473.06,1524.49Z" />
    </g>
</g>`


async function loadAnimation(state){
    document.querySelector('.animation-flowers').innerHTML = "" 
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const script = document.createElement('script')
    svg.setAttribute('xmlns',"http://www.w3.org/2000/svg")
	svg.setAttribute('class',"animationSingleFlower")
	switch(state){
		case "angry":
			svg.setAttribute('viewBox',"0 0 1454.32 1988.76")
			svg.innerHTML = `${angry}`
            script.innerHTML = `function addAnimationWind(){
                                    const animationSingleFlower = document.querySelector('.animationSingleFlower')
                                    const monte1 = animationSingleFlower.querySelector('.monte1')
                                    const monte2 = animationSingleFlower.querySelector('.monte2')
                                    const hojas = animationSingleFlower.querySelector('.hojas')

                                    const all_flor1 = animationSingleFlower.querySelector('.all-flor1')
                                    const all_flor2 = animationSingleFlower.querySelector('.all-flor2')
                                    const all_flor3 = animationSingleFlower.querySelector('.all-flor3')

                                    monte1.style.animation = "wind 9s infinite alternate"
                                    monte2.style.animation = "wind 9s infinite"

                                    all_flor1.style.animation = "wind 10s infinite alternate"
                                    all_flor2.style.animation = "wind 10s infinite alternate-reverse"
                                    all_flor3.style.animation = "wind 10s infinite"
                                    all_flor1.style.transformOrigin = "670px 1730px"
                                    all_flor2.style.transformOrigin = "670px 1730px"
                                    all_flor3.style.transformOrigin = "670px 1730px"

                                    hojas.style.animation = "wind 10s infinite alternate-reverse"
                                    hojas.style.transformOrigin = "670px 1730px"
                                }
                                setTimeout(()=>{
                                    addAnimationWind()
                                },6000)`
			break
		case "confused":
            svg.setAttribute('viewBox',"0 0 1245.86 2011.69")
            svg.innerHTML = `${confused}`
            script.innerHTML = `function addAnimationWind(){
                                    const animationSingleFlower = document.querySelector('.animationSingleFlower')
                                    const monte1 = animationSingleFlower.querySelector('.monte1')
                                    const monte2 = animationSingleFlower.querySelector('.monte2')
                                    const hojas = animationSingleFlower.querySelector('.hojas')

                                    const all_flor1 = animationSingleFlower.querySelector('.all-flor1')
                                    const all_flor2 = animationSingleFlower.querySelector('.all-flor2')
                                    const all_flor3 = animationSingleFlower.querySelector('.all-flor3')

                                    monte1.style.animation = "wind 9s infinite alternate"
                                    monte2.style.animation = "wind 9s infinite"

                                    all_flor1.style.animation = "wind 10s infinite alternate"
                                    all_flor2.style.animation = "wind 10s infinite alternate-reverse"
                                    all_flor3.style.animation = "wind 10s infinite"
                                    all_flor1.style.transformOrigin = "670px 1730px"
                                    all_flor2.style.transformOrigin = "670px 1730px"
                                    all_flor3.style.transformOrigin = "670px 1730px"
                                }
                                setTimeout(()=>{
                                    addAnimationWind()
                                },7000)`
			break
		case "balanced":
            svg.setAttribute('viewBox',"0 0 1454.32 1988.76")
            svg.innerHTML = `${balanced}`
            script.innerHTML = `function addAnimationWind(){
                                    const animationSingleFlower = document.querySelector('.animationSingleFlower')
                                    const monte1 = animationSingleFlower.querySelector('.monte1')
                                    const monte2 = animationSingleFlower.querySelector('.monte2')
                                    const hojas = animationSingleFlower.querySelector('.hojas')

                                    const all_flor1 = animationSingleFlower.querySelector('.all-flor1')
                                    const all_flor2 = animationSingleFlower.querySelector('.all-flor2')
                                    const all_flor3 = animationSingleFlower.querySelector('.all-flor3')

                                    monte1.style.animation = "wind 9s infinite alternate"
                                    monte2.style.animation = "wind 9s infinite"

                                    all_flor1.style.animation = "wind 10s infinite alternate"
                                    all_flor2.style.animation = "wind 10s infinite alternate-reverse"
                                    all_flor3.style.animation = "wind 10s infinite"
                                    all_flor1.style.transformOrigin = "670px 1730px"
                                    all_flor2.style.transformOrigin = "670px 1730px"
                                    all_flor3.style.transformOrigin = "670px 1730px"
                                }
                                setTimeout(()=>{
                                    addAnimationWind()
                                },7000)`
			break
		case "sensitive":
            svg.setAttribute('viewBox',"0 0 1337.16 1945.53")
            svg.innerHTML = `${sensitive}`
            script.innerHTML = `function addAnimationWind(){
                                    const animationSingleFlower = document.querySelector('.animationSingleFlower')
                                    const monte1 = animationSingleFlower.querySelector('.monte1')
                                    const monte2 = animationSingleFlower.querySelector('.monte2')
                                    const hojas = animationSingleFlower.querySelector('.hojas')

                                    const all_flor1 = animationSingleFlower.querySelector('.all-flor1')
                                    const all_flor2 = animationSingleFlower.querySelector('.all-flor2')
                                    const all_flor3 = animationSingleFlower.querySelector('.all-flor3')

                                    monte1.style.animation = "wind 9s infinite alternate"
                                    monte2.style.animation = "wind 9s infinite"

                                    all_flor1.style.animation = "wind 10s infinite alternate"
                                    all_flor2.style.animation = "wind 10s infinite alternate-reverse"
                                    all_flor3.style.animation = "wind 10s infinite"
                                    all_flor1.style.transformOrigin = "600px 1730px"
                                    all_flor2.style.transformOrigin = "600px 1730px"
                                    all_flor3.style.transformOrigin = "600px 1730px"
                                }
                                setTimeout(()=>{
                                    addAnimationWind()
                                },10000)
                                setTimeout(()=>{
                                    const petalos = document.querySelectorAll('.animationSingleFlower .petalo')
                                    petalos.forEach(petalo=>{
                                        const delay = Math.random()*7
                                        setTimeout(()=>{
                                            const fill = petalo.getAttribute('fill')
                                            petalo.style.fill = fill

                                        },delay*1000)
                                    })
                                    const hojas = document.querySelectorAll('.animationSingleFlower .hoja .cuerpo')
                                    hojas.forEach(hoja=>{
                                        const delay = Math.random()*5
                                        setTimeout(()=>{
                                            const fill = hoja.getAttribute('fill')
                                            hoja.style.fill = fill
                                        },delay*1000+1000)
                                    })
                                },8000)`
			break
		case "withdrawn":
            svg.setAttribute('viewBox',"0 0 1007.12 1679.84")
            svg.innerHTML = `${withdrawn}`
            script.innerHTML = `function addAnimationWind(){
                                    const animationSingleFlower = document.querySelector('.animationSingleFlower')
                                    const monte1 = animationSingleFlower.querySelector('.monte1')
                                    const monte2 = animationSingleFlower.querySelector('.monte2')
                                    const hojas = animationSingleFlower.querySelector('.hojas')

                                    const all_flor1 = animationSingleFlower.querySelector('.all-flor1')
                                    const all_flor2 = animationSingleFlower.querySelector('.all-flor2')
                                    const all_flor3 = animationSingleFlower.querySelector('.all-flor3')

                                    monte1.style.animation = "wind 9s infinite alternate"
                                    monte2.style.animation = "wind 9s infinite"

                                    all_flor1.style.animation = "wind 10s infinite alternate"
                                    all_flor2.style.animation = "wind 10s infinite alternate-reverse"
                                    all_flor3.style.animation = "wind 10s infinite"
                                    all_flor1.style.transformOrigin = "500px 1460px"
                                    all_flor2.style.transformOrigin = "500px 1460px"
                                    all_flor3.style.transformOrigin = "500px 1460px"
                                }
                                setTimeout(()=>{
                                    addAnimationWind()
                                },10000)`
			break
	}

    document.querySelector('.animation-flowers').appendChild(script)
	document.querySelector('.animation-flowers').appendChild(svg)

}