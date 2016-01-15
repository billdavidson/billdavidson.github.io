/*
 * Copyright 2015-2016 Bill Davidson
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
 * Fix broken YouTube comments in the textarea with id "editor".
 */
function fixYouTube()
{
    // using a textarea avoids XSS risks.  handle entities.
    var textarea = $("textarea");
    textarea.html($("#editor").val());
    var str = textarea.text();
    textarea = null;
    
    // Valid entities have been translated to their text value in str.

    str = str.replace(/\r/gm, "");              // remove all carriage returns.
    str = str.replace(/[ \t]+$/gm, "");         // remove trailing whitespace per line.
    str = str.replace(/\n{3,}/gm, "\n\n");      // no more than one blank line at a time.
    str = $.trim(str);

    // put the fixed text back into the textarea.
    $("#editor").val(str);
}

/*
 * Initialize the page.
 */
$(document).ready(
    function()
    {
        // the paste event for the editor textarea.
        $("#editor").on("paste",
                        function()
                        {
                            // run after paste completes.
                            setTimeout(fixYouTube, 0);
                        });

        // the fix button.
        $("#fixBtn").on("click", fixYouTube);
        
        // the clear button.
        $("#clearBtn").on("click",
                          function()
                          {
                              $("#editor").text("");
                          });
    }
);
