const typingElement = document.getElementById("typing");
const programs = [
  "Photoshop",
  "Illustrator",
  "VS Code",
  "Figma",
  "Adobe XD",
  "Premiere Pro",
  "After Effects",
  "Blender",
  "Sublime Text",
  "Atom",
  "InDesign",
  "Sketch",
  "AutoCAD",
  "Unity",
  "Unreal Engine",
];

let programIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId = null; // متغير لتخزين معرف setTimeout

// فحص وجود العنصر والقائمة
if (!typingElement) {
  console.error("Element with id 'typing' not found!");
} else if (programs.length === 0) {
  console.error("Programs list is empty!");
} else {
  function type() {
    const currentProgram = programs[programIndex];

    if (!isDeleting) {
      typingElement.textContent = currentProgram.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentProgram.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2000); // انتظر ثانيتين قبل البدء في الحذف
      } else {
        timeoutId = setTimeout(type, 150); // سرعة الكتابة
      }
    } else {
      typingElement.textContent = currentProgram.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        programIndex++;
        if (programIndex === programs.length) {
          programIndex = 0; // كرر القائمة من البداية
        }
      }
      timeoutId = setTimeout(type, 75); // سرعة الحذف
    }
  }

  // دالة لبدء تأثير الكتابة
  function startTypingEffect() {
    // إلغاء أي استدعاءات سابقة لـ setTimeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    typingElement.textContent = ""; // امسح النص الحالي
    programIndex = 0;
    charIndex = 0;
    isDeleting = false;
    type(); // ابدأ التأثير
  }

  // ابدأ التأثير عند تحميل الصفحة
  startTypingEffect();
}
