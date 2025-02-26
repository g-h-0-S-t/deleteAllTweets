javascript:

'use strict';

/* MIT License
 * 
 * Copyright (c) 2021 gh0$t
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. */

(function () {
    const delTweets = function () {
        // Scroll the page down to load more tweets
        console.log("Scrolling...");
        window.scrollBy(0, 1000);  // Scroll by smaller increments to allow better loading

        setTimeout(() => {
            // Select the first "More" button using the updated selector
            const moreButton = document.querySelector('button[aria-label="More"][data-testid="caret"]');

            if (moreButton) {
                console.log("Clicking 'More' button...");

                moreButton.click();

                setTimeout(() => {
                    // Now, look for the "Delete" button after the "More" dropdown is opened
                    const deleteButton = Array.from(document.querySelectorAll('span'))
                        .find(span => span.textContent === 'Delete');

                    if (deleteButton) {
                        console.log("Clicking 'Delete' button...");

                        deleteButton.click();

                        setTimeout(() => {
                            // After clicking delete, find the confirmation button and confirm the deletion
                            const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');

                            if (confirmButton) {
                                console.log("Confirming tweet deletion...");
                                confirmButton.click();
                            } else {
                                console.log("Confirmation button not found.");
                            }
                        }, 300);  // Reduced delay for confirmation modal appearance
                    } else {
                        console.log("Delete button not found.");
                        document.body.click();  // Close the dropdown if Delete button is not present
                    }
                }, 300);  // Reduced delay for the dropdown to appear
            } else {
                console.log("No 'More' button found, scrolling further.");
            }

            // Repeat the process after a shorter delay
            setTimeout(delTweets, 1000);  // Reduced interval between attempts
        }, 500);  // Reduced delay after scrolling to allow content to load
    };

    delTweets();
})();
