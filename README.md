## **Note to Future Students Working on the Defactify Website**

Hello future contributors,

First, thank you for continuing to work on the Defactify website! I’d like to share some information to make your journey with this website building smoother.

1. **Base Code Usability**:  
   The existing codebase is fully usable and designed for easy updates. You can build upon it without any issues, so don’t hesitate to make improvements or add new features (if required).

2. **CSS Customization**:  
   If you want to update the website's design or styles, it’s straightforward! All the styling is managed via the `style.css` file, which is centralized for easy maintenance.

3. **Template Extending with JavaScript**:  
   To make development and maintenance easier, I’ve implemented **extendable HTML** using JavaScript. This approach allows changes in components like the **header, footer, contact information, co-organizers**, etc., to automatically reflect across all pages of the website where these components are used.  

   - The logic for template extending is handled by the `base.js` file.
   - All reusable HTML components are located in the `extendable_htmls` folder.

   So, if you need to update shared elements, you only need to modify the corresponding file in the `extendable_htmls` folder, and the changes will propagate throughout the site.

4. **Sidebar Implementation**:  
   Due to limitations with the current extendable HTML setup, **the sidebar is not automatically included**. I have manually added the sidebar to every individual page of the website. If you need to make updates to the sidebar, you will need to edit each page manually.


---

I hope this note clarifies most of the questions you might have. If you have any further doubts, feel free to connect with me on [**LinkedIn**](https://www.linkedin.com/in/rajarshi-roy-learner/) and I’ll be happy to assist.

Best of luck with your work on Defactify!  
Warm regards,  
Rajarshi Roy