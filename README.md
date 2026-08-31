# Avnish's Portfolio Case

IMPORTANT UPDATE TO THE PORTFOLIO STRUCTURE:

The portfolio must begin with an INTRODUCTION page and end with a CONTACT / CONNECT page.

The overall experience should feel like opening a physical professional portfolio file.

PAGE 1 — INTRODUCTION

The first page should be different from the other pages.

When the portfolio opens, the first visible document should contain my professional introduction.

Heading:

"AVNISH SINGH"

Subheading:

"B.Tech CSE | Artificial Intelligence & Machine Learning"

Introduction:

"Hi, I'm Avnish Singh, a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I am passionate about programming, web development, artificial intelligence, machine learning, and building practical technology solutions. I enjoy learning new technologies, solving problems, participating in hackathons, and developing projects that turn ideas into useful applications."

Add a short statement:

"Currently exploring the world of AI, ML, software development and modern web technologies."

Add quick information:

• B.Tech CSE — AI & ML
• Lovely Professional University
• CGPA: 7.60
• Interested in AI/ML, Web Development and Software Development

Add two buttons:

"Explore My Portfolio"
"Connect With Me"

The "Explore My Portfolio" button should take the user to the envelope/file section.

The "Connect With Me" button should take the user to the final Contact page.

DESIGN OF INTRODUCTION PAGE:

Make this page look like the first professional page of a physical portfolio/document.

Include:
- Large AVNISH SINGH heading
- Small "PORTFOLIO 2026" label
- Professional introduction
- Small profile/technology visual
- Decorative paper elements
- Subtle handwritten/document-style details
- Realistic paper shadows
- Elegant typography

Do NOT make this look like a standard website hero section.

It should look like a professional introduction document inside the file.


PORTFOLIO FILE STRUCTURE:

After the introduction page, show the main file containing envelopes/pages.

The portfolio should contain:

1. INTRODUCTION
2. ABOUT ME
3. EDUCATION
4. SKILLS
5. PROJECTS
6. ACHIEVEMENTS
7. CERTIFICATIONS
8. CONTACT / CONNECT

Each section should initially appear as an envelope/page inside the physical file.

When an envelope is clicked:

Envelope opens
        ↓
Paper/document comes out
        ↓
Paper expands
        ↓
Section information appears
        ↓
User can close it and return to the file


FINAL PAGE — CONTACT / CONNECT WITH ME

The final page should be a dedicated professional contact page.

Heading:

"LET'S CONNECT"

Subheading:

"Have a question, project idea, collaboration opportunity, or simply want to get in touch? Send me a message."

DIRECT CONTACT INFORMATION:

AVNISH SINGH

Email:
avnish879507@gmail.com

LinkedIn:
https://www.linkedin.com/in/avnish-singh-353061384/

GitHub:
https://github.com/AvnishSingh-R

Mobile:
9369178707

Create attractive buttons:

"Email Me"
"LinkedIn"
"GitHub"

The buttons should open the corresponding links in a new tab where appropriate.


MESSAGE BOX / CONTACT FORM

Add a professional message form on the final page so visitors can send me a message.

Heading:

"Send Me a Message"

Fields:

1. Full Name
   Placeholder: "Enter your name"

2. Gmail / Email
   Placeholder: "Enter your email address"

3. Phone Number
   Placeholder: "Enter your phone number"

4. Address
   Placeholder: "Enter your address"
   Make this field OPTIONAL.

5. Subject
   Placeholder: "What would you like to discuss?"

6. Message
   Placeholder:
   "Write your message here..."

Button:

"SEND MESSAGE"

FORM BEHAVIOUR:

When the visitor submits the form:

- Validate required fields.
- Validate the email format.
- Validate the phone number format.
- Show a loading state while submitting.
- Show a success message after successful submission:

"Thank you! Your message has been sent successfully. I'll get back to you soon."

If submission fails, show:

"Something went wrong. Please try again or contact me directly through email."

Do NOT simply create a fake form that does nothing.

The form should actually send the submitted message to my email or store it securely in a database.

Use a proper backend/API for form submission.

Suggested implementation:

Frontend:
Next.js + React + TypeScript + Tailwind CSS

Form handling:
React Hook Form + Zod

Backend:
Next.js API Route / Server Action

Email:
Use a transactional email service such as Resend or another properly configured email provider.

Database:
PostgreSQL can optionally store messages.

IMPORTANT SECURITY REQUIREMENTS:

- Never expose email API keys in frontend code.
- Store API keys in environment variables.
- Validate and sanitize all form inputs.
- Add basic spam/rate-limit protection.
- Never expose submitted messages publicly.
- Do not display visitor information anywhere on the public website.
- The address field should be optional because collecting a visitor's full address is usually unnecessary.


CONTACT PAGE VISUAL DESIGN:

The final page should look like the final sheet of a professional physical portfolio.

At the top:

"LET'S CONNECT"

Then:

"AVNISH SINGH"

Then direct contact buttons.

Below that, create a paper/card containing:

"Send Me a Message"

[ Full Name                 ]

[ Gmail / Email             ]

[ Phone Number              ]

[ Address (Optional)        ]

[ Subject                   ]

[                            ]
[ Write your message...     ]
[                            ]

          [ SEND MESSAGE ]

At the bottom:

"Thank you for visiting my portfolio."

Add a small handwritten-style signature:

"— Avnish Singh"


FINAL ANIMATION:

When the user reaches the Contact page, make the paper slide completely out of the envelope and settle in the center.

The rest of the portfolio file should remain slightly visible behind it.

When the user closes the Contact page, the paper should smoothly return into the envelope.

Add a subtle "Back to File" button.


NAVIGATION:

Add a small document-style navigation system.

It should show:

INTRODUCTION
ABOUT
EDUCATION
SKILLS
PROJECTS
ACHIEVEMENTS
CERTIFICATIONS
CONTACT

However, navigation should NOT destroy the physical-file concept.

Instead, clicking a navigation item should:
1. Find the corresponding envelope/page.
2. Animate toward that envelope.
3. Open it.
4. Bring the selected document forward.

Add keyboard support:
- Escape → close current document
- Arrow keys → navigate between pages where appropriate


OVERALL USER EXPERIENCE:

The complete experience should feel like:

"Someone has handed me Avnish Singh's physical portfolio file, and I am opening each envelope/document to explore his profile."

The website should NOT feel like a conventional scrolling portfolio.

It should feel:
- Interactive
- Premium
- Academic
- Professional
- Creative
- Technical
- Realistic
- Smooth

The first page introduces Avnish.

The middle pages contain his professional information.

The final page allows visitors to directly connect with him and send a message.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e4452164-eb84-478f-bd26-242925cc8262).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
