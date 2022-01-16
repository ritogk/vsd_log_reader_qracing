/// 汎用 CSV リーダ //////////////////////////////////////////////////////////

LogReaderInfo.push({
	Caption:	"qracing_csv (*.csv)",
	Filter:		"*.csv",
	ReaderFunc:	"ReadCSV"
});


function ReadCSV( Files, ParamDef ){
	Log.Time		= [];
	Log.Longitude	= [];
	Log.Latitude	= [];
	Log.Gx	= [];
	Log.Gy	= [];
	//Log.Gz	= [];
	Log.Speed	= [];
	
	
	var	Cnt = 0;
	
	for( var i = 0; i < Files.length; ++i ){
		var file = new File();
		try{
			file.Open( Files[ i ], "zr" );
		}catch( e ){
			MessageBox( "ファイルが開けません: " + Files[ i ] );
			return 0;
		}
		file.ReadLine();
		
		try{
		do{
			lineArray = file.ReadLine().split(','); // 0:時間, 1:緯度, 2:経度, 3:X加速度, 4:Y加速度
			
			// MessageBox(lineArray[6] + ' ' + lineArray[7]);
			newDate = new Date(lineArray[6] + ' ' + lineArray[7]);
			
			var year = newDate.getFullYear();    //年
			var month = newDate.getMonth() + 1;  //月
			var day = newDate.getDate();         //日
			var week = newDate.getDay();         //曜日
			var hour = newDate.getHours();       //時
			var minute = newDate.getMinutes();   //分
			var second = newDate.getSeconds();   //秒
			var millisecond = newDate.getMilliseconds();  //ミリ秒
			
			Log.Time[ Cnt ] = Date.UTC(year, month, day, hour, minute, second, millisecond);
			Log.Latitude[ Cnt ] = lineArray[9];
			Log.Longitude[ Cnt ] = lineArray[11];
			Log.Speed[ Cnt ] = lineArray[14];
			Log.Gx[ Cnt ] = lineArray[16];
			Log.Gy[ Cnt ] = lineArray[17];
			// Log.Gz[ Cnt ] = lineArray[18];
			
			// MessageBox(Log.Time[ Cnt ]);
			// MessageBox(Log.Latitude[ Cnt ]);
			// MessageBox(Log.Longitude[ Cnt ]);
			
			Cnt++;
			file.ReadLine();
		}while( !file.IsEOF())
		}catch(e){
			MessageBox(lineArray);
		}
		
		file.Close();
	}
	
	return Cnt;
}
