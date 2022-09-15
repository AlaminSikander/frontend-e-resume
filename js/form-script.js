/* global $, alert, console */

var myText = document.getElementById("myText");
    var result = document.getElementById("result");
    var ewarning = document.getElementById("e-warning");

    var limit = 80;
    result.textContent = 0 + "/" + limit;
    
    myText.addEventListener("input", function(){
        var textLength = myText.value.length;
        result.textContent = textLength + "/" + limit;
    
        if(textLength > limit){
            myText.style.borderColor = "#ff2851";
            result.style.color = "#ff0000";
        }
        else{
            myText.style.borderColor = "#3c3939";
            result.style.color = "#3c3939";
        }
    });

    var myText = document.getElementById("myText");
    var ewarning = document.getElementById("e-warning");
    myText.addEventListener("input", checkCodeLength)

    function checkCodeLength(){
        var entereCodeLength = myText.value.length;
        var maxLength = 80;

        if (entereCodeLength > maxLength){
            ewarning.hidden = false
            myText.classList.add("error")
            ewarning.style.color = "#ff0000";
        } else{
            ewarning.hidden = true
            myText.classList.remove("error")
        }
    }



$(document).ready(function () {
    'use strict';
    /*
    var x = 0,
        inptSkill = $('#input-skills');
    
    inptSkill.on('keyup',function(e){
        e.stopPropagation();
        if(e.which == 13){
            e.preventDefault();
            
            var curVal = inptSkill.val().trim();
            var found = false;
            for(var i = 0; i<x; i++){
                var str = $('.tag-span').eq(i).text().trim();
                if(str == curVal){
                    found=true;
                }
            }
            if(!found && curVal.length > 1){
                $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i> '+curVal + '<input hidden type="text" value="'+curVal+'" name="skills[]"></span>');
                x++;
            }

            inptSkill.val('');
            
        }
    });
    */
    $('.fa-plus-circle').click(function () {
        var curVal = inptSkill.val().trim();
        var found = false;
        for (var i = 0; i < x; i++) {
            var str = $('.tag-span').eq(i).text().trim();
            if (str == curVal) {
                found = true;
            }
        }
        if (!found && curVal.length > 1) {
            $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i> ' + curVal + '<input hidden type="text" value="' + curVal + '" name="skills[]"></span>');
            x++;
        }

        inptSkill.val('');
    });

    // Remove Tag On Click

    $('.tags').on('click', '.tag-span i', function () {
        $(this).parent('.tag-span').fadeOut(500).remove();
        x--;

    });


    




    // Add education block

    $('#add-edu').on('click', function () {
        $('.all-edus').append('<div class="add-border"><span></span><h2>New education</h2><span></span></div><div class="new-edu"><label>Field of study:</label>                  <input type="text" name="edu[]" class="form-control" placeholder="field of study"><label>Degree:</label><select required name="class" class="form-control select"><option>Select one</option><option>S.S.C.</option><option>H.S.C.</option><option>Bachelor</option><option>Masters</option><option>PHD</option></select><label>Institute Name:</label><input type="text" name="edu[]" class="form-control" placeholder="institute name"><label>Result:</label><input type="text" name="edu[]" class="form-control" placeholder="result"><div class="form-row"><div class="col"><label>From year:</label><input type="month" name="edu[]" class="form-control">              </div><div class="col"><label>To year (optional=present):</label<input type="month" name="edu[]" class="form-control"></div></div></div>');
    });


    // Add Experience block

    $('#add-exp').on('click', function () {
        $('.all-exps').append('<div class="add-border"><span></span><h2>New Experience</h2><span></span></div><div class="new-exp"><label>Title:</label><input type="text" name="exp[]" class="form-control" placeholder="Ex: Web Developer"><label>Company:</label><input type="text" name="exp[]" class="form-control" placeholder="Ex: ProgressSoft"><div class="form-row"><div class="col"><label>From year:</label><input type="month" name="exp[]" class="form-control"></div><div class="col"><label>To year (optional=present):</label><input type="month" name="exp[]" class="form-control"></div></div><div class=""><label>Description (optional):</label><textarea name="myText" id="myText" rows="4" class="form-control" ></textarea><p class="limits" id="result"></p><p id="e-warning" class="limits" hidden>Max length of characters is 80.</p></div></textarea></div>');
    });

    // Add skills block

    $('.add-skills').on('click', function () {
        $('.all-skills').append('<div class="add-border"></div><div class="new-skills"><label>Skill</label> <select required name="class" class="form-control select"><option>Select one</option><option>Web analytics</option><option>SEO/SEM</option><option>HTML & CSS</option><option>Wordpress</option><option>Email marketing</option><option>Web scraping</option><option>Data visualization & pattern-finding through critical thinking</option><option>Search Engine and Keyword Optimization</option><option>Project/campaign management</option><option>Social media and mobile marketing </option><option>Paid social media advertisements</option><option>The 4 P-s of Marketing</option><option>Consumer Behavior Drivers</option><option>Brand management</option><option>Creativity</option><option>Copywriting</option><option>Copywriting</option><option>CMS Tools</option></select></div>');

    });
    // Add Reference block

    $('#add-ref').on('click', function () {
        $('.all-refs').append('<div class="add-border"><span></span><h2>New Reference</h2><span></span></div><div class="new-ref"><label>Name:</label><input type="text" name="ref[]" class="form-control" placeholder="name"><label>Job Position:</label>                  <input type="text" name="ref[]" class="form-control" placeholder="job position">          <label>Company Name:</label><input type="text" name="ref[]" class="form-control" placeholder="company name"><div class="form-row"><div class="col">                   <label>Pone No:</label><input type="text" placeholder="phone no" name="ref[]" class="form-control">              </div><div class="col"><label>Email:</label>                                 <input type="text" name="ref[]" placeholder="email" class="form-control"></div></div></div>');
    });



    // Add socials block

    $('.add-socials').on('click', function () {
        $('.all-socials').append('<div class="add-border"><span></span><h2>New ref</h2><span></span></div><div class="new-socials"><label>Social Name</label> <input type="text" name="social" class="form-control">          <label>Social Link</label><input type="text" name="socials[]" class="form-control"> <label>Social icon image (16px*16px)</label><input type="file" name="socials[]" class="form-control" /></div>');

    });

    // Add socials block

    $('.add-hoppies').on('click', function () {
        $('.all-hoppies').append('<div class="add-border"><span></span><h2>New Hoppy</h2><span></span></div><div class="new-hoppies"> <label>Hoppy icon image (32px*32px)</label><input type="file" name="hoppies[]" class="form-control" /></div>');

    });

    


});



