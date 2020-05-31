var geoJsonData = [
	{type:"Feature",properties:{name:'North on Coolsingel'},geometry:{type:"Point", coordinates:[4.481267,51.918228]}},
	{type:"Feature",properties:{name:'Straight ahead across Hofplein',desc:'Continue North underneath the railway'},geometry:{type:"Point", coordinates:[4.478435,51.924007]}},
	{type:"Feature",properties:{name:'Bear left on Schiekade',desc:'Continue NW on cycle path'},geometry:{type:"Point", coordinates:[4.477029,51.92679]}},
	{type:"Feature",properties:{name:'Straight ahead on Schieweg',desc:'Continue WNW on Schieweg'},geometry:{type:"Point", coordinates:[4.470107,51.931043]}},
	{type:"Feature",properties:{name:'Bear right on Schieweg',desc:'Continue NNW on Schieweg'},geometry:{type:"Point", coordinates:[4.467433,51.931841]}},
	{type:"Feature",properties:{name:'Straight ahead to roundabout',desc:'Continue NNW over the canal and follow the cycle path across the roundabout'},geometry:{type:"Point", coordinates:[4.462794,51.937139]}},
	{type:"Feature",properties:{name:'Left on Dwarskeiweg',desc:'Continue for 150 m'},geometry:{type:"Point", coordinates:[4.461005,51.941914]}},
	{type:"Feature",properties:{name:'Right on Overschiese Kleiweg',desc:'Continue North on road'},geometry:{type:"Point", coordinates:[4.458912,51.942072]}},
	{type:"Feature",properties:{name:'Continue on cycle path',desc:'Continue North under trees, over the HSL train line, then follow the path to the right around the airport'},geometry:{type:"Point", coordinates:[4.458548,51.949227]}},
	{type:"Feature",properties:{name:'Continue left on Bovendijk',desc:'Continue NNE and follow the road around to the left'},geometry:{type:"Point", coordinates:[4.458269,51.960892]}},
	{type:"Feature",properties:{name:'Bear left on cycle path'},geometry:{type:"Point", coordinates:[4.458190,51.965509]}},
	{type:"Feature",properties:{name:'Left on Landscheiding',desc:'Continue ENE on the road, bending around to the left around the edge of the airport'},geometry:{type:"Point", coordinates:[4.456983,51.965954]}},
	{type:"Feature",properties:{name:'Right across road',desc:'Dog leg left then right and continue NW on Oude Bovendijk.'},geometry:{type:"Point", coordinates:[4.447597,51.962617]}},
	{type:"Feature",properties:{name:'Straight ahead on path',desc:'Continue NW on path, the follow it around to the left, then right'},geometry:{type:"Point", coordinates:[4.426183,51.978056]}},
	{type:"Feature",properties:{name:'Straight ahead on Ackersdijkseweg',desc:'After 200 m continue straight ahead on Zuideindseweg'},geometry:{type:"Point", coordinates:[4.413696,51.982704]}},
	{type:"Feature",properties:{name:'Straight ahead across road',desc:'Continue NNE on Noordeindseweg'},geometry:{type:"Point", coordinates:[4.395830,52.009521]}},
	{type:"Feature",properties:{name:'Left after trees',desc:'After the trees, turn left before the field. Continue SW along the path past Ikea.'},geometry:{type:"Point", coordinates:[4.390934,52.016931]}},
	{type:"Feature",properties:{name:'Right across road to cycle path',desc:'Continue 60 m.'},geometry:{type:"Point", coordinates:[4.379760,52.011893]}},
	{type:"Feature",properties:{name:'Left on cycle path',desc:'Continue SW under the motorway'},geometry:{type:"Point", coordinates:[4.379265,52.012392]}},
	{type:"Feature",properties:{name:'Continue on cycle path',desc:'Continue West for 250 m'},geometry:{type:"Point", coordinates:[4.375410,52.011064]}},
	{type:"Feature",properties:{name:'Left on Weidepad',desc:'Cross the small footbridge and continue 150m SW along Weidepad.'},geometry:{type:"Point", coordinates:[4.371927,52.011268]}},
	{type:"Feature",properties:{name:'Left across road',desc:'Cross the road and dog left then right on the cyclepath on Kanaalweg and over the Groenebrug bridge.'},geometry:{type:"Point", coordinates:[4.370133,52.010853]}},
	{type:"Feature",properties:{name:'Right on Oostpoort',desc:'Continue across the small bridge then bear left.'},geometry:{type:"Point", coordinates:[4.368975,52.010308]}},
	{type:"Feature",properties:{name:'Straight ahead on Oosteinde',desc:'Dog leg right-left over the bridge and continue on the right-hand side of the canal'},geometry:{type:"Point", coordinates:[4.368260,52.010925]}},
	{type:"Feature",properties:{name:'Left on Oude Langendijk',desc:'Continue on the left hand side of the church and along the left hand side of the market square.'},geometry:{type:"Point", coordinates:[4.362615,52.012611]}},
	{type:"Feature",properties:{name:'Left then right on Oude Langendijk',desc:'Dog leg left-right and over the canal.'},geometry:{type:"Point", coordinates:[4.358387,52.011107]}},
	{type:"Feature",properties:{name:'Left then right on Peperstraat',desc:'Continue 70 m SW, straight ahead over the next canal, then continue 100 m on Binnenwatersloot.'},geometry:{type:"Point", coordinates:[4.358068,52.010792]}},
	{type:"Feature",properties:{name:'Left on Westvest',desc:'Continue SSE'},geometry:{type:"Point", coordinates:[4.355888,52.009590]}},
	{type:"Feature",properties:{name:'Right over bridge to Stationsplein'},geometry:{type:"Point", coordinates:[4.357770,52.007417]}},
	{type:"Feature",properties:{name:'End at Deflt railway station'},geometry:{type:"Point", coordinates:[4.356735,52.006950]}},
	{
		type: "LineString",
		coordinates: [[4.481225,51.918285],[4.480703,51.918965],[4.480083,51.920583],[4.478431,51.924015],[4.478724,51.924401],[4.478489,51.924833],[4.477912,51.925004],[4.477645,51.925412],[4.477002,51.926629],[4.477022,51.926775],[4.476410,51.927089],[4.476317,51.927097],[4.476238,51.927127],[4.475698,51.927410],[4.475363,51.927617],[4.474666,51.928068],[4.473982,51.928495],[4.473780,51.928598],[4.470828,51.930502],[4.470700,51.930612],[4.470509,51.930757],[4.470124,51.930999],[4.470094,51.931036],[4.469802,51.931138],[4.469632,51.931174],[4.469414,51.931230],[4.468064,51.931639],[4.467373,51.931846],[4.467251,51.931918],[4.462632,51.937293],[4.462284,51.937736],[4.462143,51.937987],[4.462133,51.938116],[4.462240,51.938236],[4.462423,51.938397],[4.462412,51.938455],[4.462261,51.938740],[4.462168,51.938842],[4.462059,51.938937],[4.461959,51.939010],[4.461859,51.939064],[4.461661,51.939184],[4.461490,51.939241],[4.461083,51.939245],[4.460963,51.939328],[4.460867,51.939449],[4.460707,51.939814],[4.460719,51.939982],[4.460896,51.940374],[4.460994,51.940755],[4.461006,51.941153],[4.461001,51.941907],[4.460542,51.941903],[4.460383,51.941858],[4.459680,51.941855],[4.459509,51.941875],[4.458897,51.942041],[4.458802,51.942240],[4.458717,51.942313],[4.459110,51.944017],[4.459371,51.944590],[4.459489,51.945005],[4.459553,51.945573],[4.459539,51.946025],[4.459491,51.946513],[4.458674,51.948577],[4.458520,51.948631],[4.458472,51.948668],[4.458349,51.949169],[4.458543,51.949169],[4.458290,51.951151],[4.458194,51.951767],[4.457911,51.952651],[4.457492,51.953574],[4.456918,51.954590],[4.456550,51.955149],[4.456280,51.955483],[4.455207,51.956632],[4.454686,51.957128],[4.454101,51.957648],[4.453765,51.957951],[4.453584,51.958106],[4.453511,51.958289],[4.453588,51.958449],[4.453679,51.958592],[4.454057,51.958792],[4.455210,51.959354],[4.455749,51.959595],[4.456292,51.959770],[4.456958,51.959983],[4.457717,51.960343],[4.457956,51.960459],[4.458102,51.960609],[4.458240,51.960893],[4.458370,51.960864],[4.459790,51.963724],[4.459832,51.963918],[4.459812,51.964081],[4.459763,51.964214],[4.459652,51.964371],[4.459392,51.964623],[4.458642,51.965341],[4.458386,51.965493],[4.458205,51.965500],[4.457749,51.965589],[4.457482,51.965667],[4.457254,51.965753],[4.457088,51.965852],[4.456994,51.965915],[4.456978,51.965975],[4.456631,51.966089],[4.455943,51.966240],[4.455254,51.966313],[4.454638,51.966304],[4.454006,51.966263],[4.453592,51.966213],[4.453042,51.966095],[4.452459,51.965937],[4.451951,51.965781],[4.451570,51.965645],[4.451048,51.965405],[4.450578,51.965154],[4.450091,51.964835],[4.449746,51.964586],[4.447936,51.962848],[4.447559,51.962606],[4.447161,51.962819],[4.447043,51.962822],[4.446914,51.962760],[4.446731,51.962739],[4.446168,51.963185],[4.444440,51.964486],[4.442819,51.965637],[4.441569,51.966506],[4.434222,51.971959],[4.434089,51.972019],[4.434095,51.972097],[4.433074,51.972863],[4.432042,51.973593],[4.431308,51.974111],[4.430705,51.974584],[4.430143,51.975015],[4.429413,51.975573],[4.428995,51.975906],[4.428791,51.976013],[4.428605,51.976087],[4.428474,51.976160],[4.428338,51.976269],[4.428236,51.976383],[4.427878,51.976746],[4.427444,51.977166],[4.427329,51.977270],[4.426689,51.977682],[4.426174,51.978048],[4.425982,51.978132],[4.425522,51.978463],[4.424772,51.979009],[4.423463,51.979941],[4.423084,51.980210],[4.422703,51.980381],[4.422423,51.980449],[4.422163,51.980474],[4.421013,51.980512],[4.420090,51.980548],[4.419637,51.980598],[4.419415,51.980628],[4.418984,51.980736],[4.417650,51.981190],[4.417406,51.981265],[4.417196,51.981302],[4.416984,51.981294],[4.416487,51.981219],[4.415886,51.981113],[4.415579,51.981076],[4.415389,51.981085],[4.415267,51.981135],[4.415170,51.981206],[4.415037,51.981381],[4.414476,51.982290],[4.414417,51.982367],[4.414317,51.982427],[4.414211,51.982450],[4.414070,51.982460],[4.413951,51.982460],[4.413832,51.982477],[4.413748,51.982537],[4.413682,51.982676],[4.413623,51.982871],[4.413563,51.983009],[4.412824,51.984148],[4.409630,51.988918],[4.408782,51.990285],[4.408017,51.991428],[4.406355,51.993739],[4.402667,51.999297],[4.401467,52.001162],[4.400587,52.002513],[4.399989,52.003467],[4.398312,52.005918],[4.397519,52.007091],[4.396786,52.008209],[4.395718,52.009640],[4.395725,52.009848],[4.395622,52.010053],[4.395408,52.010195],[4.395096,52.010635],[4.394419,52.011782],[4.394168,52.012040],[4.393532,52.013055],[4.393069,52.013792],[4.392733,52.014371],[4.390918,52.016910],[4.390665,52.016817],[4.389730,52.016433],[4.389156,52.016186],[4.388395,52.015854],[4.387754,52.015576],[4.386879,52.015182],[4.386118,52.014837],[4.385102,52.014379],[4.384763,52.014206],[4.384603,52.014204],[4.384501,52.014190],[4.384372,52.014146],[4.383556,52.013730],[4.383032,52.013464],[4.380988,52.012480],[4.379747,52.011872],[4.379547,52.012033],[4.379259,52.012387],[4.379201,52.012380],[4.379125,52.012350],[4.379080,52.012303],[4.379013,52.012242],[4.378923,52.012197],[4.378812,52.012182],[4.378702,52.012168],[4.378602,52.012115],[4.378434,52.011935],[4.378365,52.011883],[4.377960,52.011746],[4.377020,52.011439],[4.376890,52.011397],[4.376788,52.011408],[4.376638,52.011429],[4.376528,52.011419],[4.376396,52.011371],[4.376372,52.011317],[4.376299,52.011261],[4.375823,52.011140],[4.375737,52.011138],[4.375408,52.011043],[4.375219,52.011012],[4.374984,52.010999],[4.374127,52.011001],[4.373506,52.011027],[4.372368,52.011152],[4.371985,52.011223],[4.371864,52.011262],[4.371698,52.011162],[4.371377,52.011034],[4.370934,52.010856],[4.370720,52.010763],[4.370571,52.010751],[4.370153,52.010854],[4.369876,52.010761],[4.370024,52.010604],[4.369844,52.010529],[4.369751,52.010463],[4.369679,52.010388],[4.369639,52.010341],[4.369534,52.010316],[4.368989,52.010292],[4.368762,52.010530],[4.368869,52.010674],[4.368736,52.010823],[4.368188,52.010919],[4.368144,52.011059],[4.367685,52.011140],[4.366887,52.011278],[4.366084,52.011504],[4.365078,52.011897],[4.364139,52.012182],[4.363042,52.012465],[4.362566,52.012625],[4.360910,52.011955],[4.360665,52.011957],[4.360380,52.011891],[4.358376,52.011097],[4.358495,52.010951],[4.358060,52.010786],[4.358209,52.010497],[4.357359,52.010244],[4.355881,52.009584],[4.356429,52.008964],[4.357091,52.008316],[4.357744,52.007624],[4.357896,52.007456],[4.357763,52.007411],[4.357628,52.007361],[4.357600,52.007316],[4.357384,52.007239],[4.357046,52.007102],[4.356728,52.006945]]
	}
]
