	function downloadText(datasource, callbackFunction)

			{
				
		//		alert(callbackFunction);	
				var XMLHttpRequestObject = false;

				if (window.XMLHttpRequest){
				    XMLHttpRequestObject = new XMLHttpRequest();

				}else if(window.ActiveXObject) {
				    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
				}

				if (XMLHttpRequestObject) {

	

					XMLHttpRequestObject.open("GET", datasource);
				

					XMLHttpRequestObject.onreadystatechange = function()

					{

						if (XMLHttpRequestObject.readyState == 4 &&

							XMLHttpRequestObject.status == 200) {

							callbackFunction(XMLHttpRequestObject.responseText)	;
						
							
							
							delete XMLHttpRequestObject;
							XMLHttpRequestObject = null;
						}
					}

					XMLHttpRequestObject.send(null);

				}
			}