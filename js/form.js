/* =============================================================
   form.js — Enquiry Form Validation & Gmail Opener
   FireChars.in
   ============================================================= */

function openGmailEnquiry(e) {
  if (e) e.preventDefault();

  const fname = document.getElementById('f-fname').value.trim();
  const lname = document.getElementById('f-lname').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const type  = document.getElementById('f-type').value.trim();
  const brief = document.getElementById('f-brief').value.trim();
  const err   = document.getElementById('form-error');
  const btn   = document.getElementById('submitEnquiryBtn');

  // ── Validation ──────────────────────────────────────────────
  if (!fname || !lname) {
    showFormErr(err, '⚠ Please enter your full name.');
    return;
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    showFormErr(err, '⚠ Please enter a valid email address.');
    return;
  }
  if (!phone) {
    showFormErr(err, '⚠ Please enter your phone number.');
    return;
  }
  if (!type) {
    showFormErr(err, '⚠ Please select a service.');
    return;
  }
  err.style.display = 'none';

  // ── Build Gmail URL ──────────────────────────────────────────
  const to      = 'connect.datasemantic@gmail.com';
  const subject = `Project Enquiry — ${type} | ${fname} ${lname}`;
  const body    =
`Dear FireChars Team,

I would like to enquire about your services. Please find my details below:

Name        : ${fname} ${lname}
Email       : ${email}
Phone       : ${phone}
Service     : ${type}

Project Brief:
${brief || '(Not provided)'}

Looking forward to hearing from you.

Regards,
${fname} ${lname}`;

  const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, '_blank');
}

function showFormErr(el, msg) {
  el.textContent    = msg;
  el.style.display  = 'block';
}
