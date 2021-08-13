function working(calculate){
			
			// Fetch data
			let num = document.getElementById("num").value.split(";");
			let ans = document.getElementById("ans");
			let error = document.getElementById("error");
		
			// elements of array are still strings, must convert to numbers.
			let ipStr = num.map((i)=>Number(i)); 

			let meanResult, medianResult, modeResult;
			switch (calculate){
				case 'Sum': 
				let sumResult = 0;
					for (let i = 0; i < ipStr.length; i++) {
						sumResult += ipStr[i];	
					}
					ans.value = sumResult;
					break;


				case 'Mean': 
					// Sum of array
					let sum = 0;
					for (let i = 0; i < ipStr.length; i++) {
						sum += ipStr[i];	
					}
					meanResult = sum / ipStr.length;
					//alert(result);
					ans.value = meanResult;
					break;

		
				case 'Median': 
					// Sorting array
					ipStr.sort();
					
					 // checking for odd length (median is the average of the two middle numbers)
    					if (ipStr.length % 2 != 0)
							medianResult = ipStr[Math.ceil(ipStr.length / 2) - 1]; 
						// for even length (pick the middle number as median)
    					else medianResult = (ipStr[Math.floor((ipStr.length-1)/2)] + ipStr[ipStr.length / 2]) / 2; 

					ans.value = medianResult;
					break;

				

				default:
					break;
			}
		
		}
		
		
