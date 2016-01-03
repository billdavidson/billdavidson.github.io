/*
 * Copyright 2015 Bill Davidson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

/**
 * Fix broken YouTube comments in the textarea with id
 * "editor".
 */
function fixYoutube()
{
	// using a textarea avoids XSS risks.
	var textarea = $("textarea");
	textarea.html($("#editor").val()); // handle entities.
	var str = textarea.text();
	textarea = null;
	str = str.replace(/\r/gm, "");
	str = str.replace(/\n{3,}/gm, "\n\n");
	str = str.replace(/[ \t]+$/gm, "");
	var i = str.length - 1;
	if ( i >= 0 ){
		while ( str.slice(i, i+1).match(/\s/) ){
			--i;
		}
		++i;
		if ( i < str.length ){
			str = str.slice(0, i);
		}
	}
	$("#editor").val(str);
}

/**
 * Remove everything from the editor textarea.
 */
function clearEditor()
{
    $("#editor").text("");
}

/*
 * Initialize the page.
 */
$(document).ready(
    function()
    {
    	// set up the event handlers.
    	$("#editor").on("change paste", fixYoutube);
    	$("#fixBtn").on("click", fixYoutube);
    	$("#clearBtn").on("click", clearEditor);
    }
);
