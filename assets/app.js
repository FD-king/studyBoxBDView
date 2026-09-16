/* Study Box BD shared data + cart */
const SB = (() => {
  // Promo: 15% off books, 20% off courses — list price is `old`, sale is `price`
  function withBookSale(list) {
    return list.map((b) => {
      const old = b.price;
      return { ...b, oldPrice: old, price: Math.round(old * 0.85), discount: 15 };
    });
  }
  function withCourseSale(list) {
    return list.map((c) => {
      const old = c.price;
      return { ...c, oldPrice: old, price: Math.round(old * 0.8), discount: 20 };
    });
  }

  const books = withBookSale([
    { id: "vl1", title: "VocabLab Class One", author: "Study Box · Class 1", price: 150, rating: 5, reviews: 64, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/image-1-679x1024.webp", category: "Class I" },
    { id: "vl1b", title: "Class One Word Builder", author: "Study Box · Class 1", price: 120, rating: 4, reviews: 41, cover: "", category: "Class I" },
    { id: "vl1c", title: "Class One Picture Dictionary", author: "Study Box · Class 1", price: 135, rating: 5, reviews: 38, cover: "", category: "Class I" },
    { id: "vl2", title: "VocabLab Class Two", author: "Study Box · Class 2", price: 175, rating: 5, reviews: 72, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/image-3-1.png", category: "Class II" },
    { id: "vl2b", title: "Class Two Spelling Book", author: "Study Box · Class 2", price: 140, rating: 4, reviews: 45, cover: "", category: "Class II" },
    { id: "vl2c", title: "Class Two Reading Practice", author: "Study Box · Class 2", price: 155, rating: 5, reviews: 39, cover: "", category: "Class II" },
    { id: "vl3", title: "VocabLab Class Three", author: "Study Box · Class 3", price: 250, rating: 5, reviews: 80, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/image-1-1.png", category: "Class III" },
    { id: "vl3b", title: "Class Three Grammar Basics", author: "Study Box · Class 3", price: 200, rating: 4, reviews: 52, cover: "", category: "Class III" },
    { id: "vl3c", title: "Class Three Story Reader", author: "Study Box · Class 3", price: 180, rating: 5, reviews: 47, cover: "", category: "Class III" },
    { id: "vl4", title: "VocabLab Class Four", author: "Study Box · Class 4", price: 275, rating: 5, reviews: 95, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-18-at-8.06.00-PM-658x1024.jpeg", best: "900+ sold", category: "Class IV" },
    { id: "vl4b", title: "Class Four Sentence Builder", author: "Study Box · Class 4", price: 220, rating: 4, reviews: 58, cover: "", category: "Class IV" },
    { id: "vl4c", title: "Class Four Idioms Starter", author: "Study Box · Class 4", price: 210, rating: 5, reviews: 44, cover: "", category: "Class IV" },
    { id: "vl5", title: "VocabLab Class Five", author: "Study Box · Class 5", price: 250, rating: 5, reviews: 88, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-18-at-8.04.31-PM-658x1024.jpeg", best: "850+ sold", category: "Class V" },
    { id: "vl5b", title: "Class Five Vocabulary Workbook", author: "Study Box · Class 5", price: 230, rating: 4, reviews: 61, cover: "", category: "Class V" },
    { id: "vl5c", title: "Class Five Composition Guide", author: "Study Box · Class 5", price: 240, rating: 5, reviews: 50, cover: "", category: "Class V" },
    { id: "vl6", title: "VocabLab Class Six", author: "Study Box · Class 6", price: 240, rating: 4, reviews: 70, cover: "https://studyboxbd.com/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-05-at-1.14.44-PM-658x1024.jpeg", category: "Class VI" },
    { id: "vl6b", title: "Class Six Grammar Drill", author: "Study Box · Class 6", price: 225, rating: 5, reviews: 55, cover: "", category: "Class VI" },
    { id: "vl6c", title: "Class Six Synonym Pack", author: "Study Box · Class 6", price: 190, rating: 4, reviews: 42, cover: "", category: "Class VI" },
    { id: "vl7", title: "VocabLab Class Seven", author: "Study Box · Class 7", price: 270, rating: 5, reviews: 86, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-18-at-8.02.10-PM-658x1024.jpeg", best: "850+ sold", category: "Class VII" },
    { id: "vl7b", title: "Class Seven Writing Lab", author: "Study Box · Class 7", price: 255, rating: 4, reviews: 49, cover: "", category: "Class VII" },
    { id: "vl7c", title: "Class Seven Question Bank", author: "Study Box · Class 7", price: 265, rating: 5, reviews: 57, cover: "", category: "Class VII" },
    { id: "vl8", title: "VocabLab Class Eight", author: "Study Box · Class 8", price: 300, rating: 5, reviews: 78, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/image-683x1024.png", category: "Class VIII" },
    { id: "vl8b", title: "Class Eight JSC English Prep", author: "Study Box · Class 8", price: 290, rating: 4, reviews: 63, cover: "", category: "Class VIII" },
    { id: "vl8c", title: "Class Eight Vocabulary Plus", author: "Study Box · Class 8", price: 280, rating: 5, reviews: 51, cover: "", category: "Class VIII" },
    { id: "vlssc", title: "VocabLab SSC (Nine–Ten)", author: "Study Box · Class 9–10", price: 330, rating: 5, reviews: 110, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-18-at-7.55.36-PM-658x1024.jpeg", best: "900+ sold", category: "SSC" },
    { id: "vlsscb", title: "SSC English 2nd Paper Guide", author: "Study Box · SSC", price: 310, rating: 5, reviews: 84, cover: "", category: "SSC" },
    { id: "vlsscc", title: "SSC Model Test English", author: "Study Box · SSC", price: 295, rating: 4, reviews: 72, cover: "", category: "SSC" },
    { id: "vlhsc", title: "VocabLab HSC", author: "Study Box · HSC", price: 350, rating: 5, reviews: 140, cover: "https://studyboxbd.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-18-at-8.07.43-PM-1-658x1024.jpeg", best: "1,000+ sold", category: "HSC" },
    { id: "vlhscb", title: "HSC English 1st Paper Focus", author: "Study Box · HSC", price: 340, rating: 5, reviews: 98, cover: "", category: "HSC" },
    { id: "vlhscc", title: "HSC Vocabulary Sprint", author: "Study Box · HSC", price: 320, rating: 4, reviews: 77, cover: "", category: "HSC" },
    { id: "sa", title: "Synonym & Antonym (HSC to Admission)", author: "Study Box", price: 150, rating: 5, reviews: 55, cover: "", category: "Exam" },
    { id: "gt", title: "Grammar Techniques", author: "Study Box", price: 400, rating: 5, reviews: 92, cover: "", category: "Exam" },
    { id: "sscp1", title: "SSC Board Question 1st Paper", author: "Study Box", price: 350, rating: 5, reviews: 68, cover: "", category: "Exam" },
    { id: "sscp2", title: "SSC Board Question 2nd Paper", author: "Study Box", price: 350, rating: 5, reviews: 61, cover: "", category: "Exam" },
    { id: "hscp1", title: "HSC Board Question 1st Paper", author: "Study Box", price: 400, rating: 5, reviews: 74, cover: "", category: "Exam" },
    { id: "hscp2", title: "HSC Board Question 2nd Paper", author: "Study Box", price: 400, rating: 5, reviews: 69, cover: "", category: "Exam" },
    { id: "sscwr", title: "SSC Writing Part (70 Marks)", author: "Study Box", price: 325, rating: 5, reviews: 58, cover: "", category: "Exam" },
    { id: "examad", title: "Admission English Crash", author: "Study Box · Admission", price: 380, rating: 5, reviews: 81, cover: "", category: "Exam" }
  ]);

  const BOOK_CATEGORIES = [
    "All",
    "Class I", "Class II", "Class III", "Class IV", "Class V",
    "Class VI", "Class VII", "Class VIII", "SSC", "HSC", "Exam"
  ];

  const courses = withCourseSale([
    { id: "hsc2027", title: "HSC 2027 English Course", author: "Class 5 to HSC · Free trial", price: 2500, rating: 5, reviews: 200, cover: "", lessons: "Live + materials", totalLessons: 24 },
    { id: "vocabclass", title: "VocabLab Workshop (Group)", author: "Textbook units · School / batch", price: 800, rating: 5, reviews: 80, cover: "", lessons: "Workshop", totalLessons: 8 },
    { id: "admissioneng", title: "Admission English Bridge", author: "HSC → Admission", price: 1800, rating: 5, reviews: 65, cover: "", lessons: "Exam focused", totalLessons: 16 }
  ]);

  const playlists = [
    { id: "p1", title: "Assertive to Exclamatory (Vice Versa)", desc: "Grammar transformation — Study Box BD lesson.", meta: "Free on YouTube", videoId: "hc8Y_MBaj9I", url: "https://youtu.be/hc8Y_MBaj9I" },
    { id: "p2", title: "Narration (Advanced) Part - 01", desc: "Advanced narration series from Study Box BD.", meta: "Free on YouTube", videoId: "NcqzyRbORiI", url: "https://youtu.be/NcqzyRbORiI" }
  ];

  const reviews = [
    { type: "book", stars: 5, text: "আলহামদুলিল্লাহ স্যার যেমন টা আশা করেছিলাম তার চেয়ে ভাল পাঠ্য বই গুলা আল্লাহ আপনার নেক হায়াত দান করুক আমিন!", name: "Rejaul Korim", item: "VocabLab books" },
    { type: "course", stars: 5, text: "sir, আপনার মতো কাউকে এভাবে সহজ করে বুঝাতে দেখিনি। আমি খুব সহজে বুঝেছি Modifiers গুলো।", name: "Cubarsi", item: "English class" },
    { type: "course", stars: 5, text: "If you are a student and reading this... Trust me! you will enjoy your journey with Study Box with the rarest feeling you have ever had while studying or learning English.. Mr. Box (Nayem Bhuiyan Sir) is a storehouse unique ideas", name: "Rose", item: "Study Box journey" },
    { type: "book", stars: 5, text: "VocabLab is lesson-based from NCTB EFT — students revise vocabulary with the same units they study in class. Schools we work with keep reordering.", name: "School coordinator", item: "VocabLab series" },
    { type: "book", stars: 5, text: "Grammar Techniques and board question books are complete for SSC/HSC prep. Delivery via courier was smooth.", name: "HSC student", item: "Board questions" },
    { type: "course", stars: 5, text: "HSC 2027 English course — free class first, then enroll. Clear structure for Class 5 to HSC tracks.", name: "Guardian", item: "HSC 2027" }
  ];

  const CART_KEY = "sb_cart_v1";

  function money(n) {
    return "৳" + Number(n).toLocaleString("en-US");
  }

  function stars(n) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

  function loadCart() {
    try {
      const raw = sessionStorage.getItem(CART_KEY);
      return raw ? new Map(JSON.parse(raw)) : new Map();
    } catch {
      return new Map();
    }
  }

  function saveCart(cart) {
    try {
      sessionStorage.setItem(CART_KEY, JSON.stringify([...cart.entries()]));
    } catch { /* ignore */ }
  }

  function toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2000);
  }

  function coverHTML(p, kind) {
    if (kind === "course") {
      return `<div class="cover-fallback cover-course">${p.title}<small>${p.lessons || ""}</small></div>`;
    }
    if (p.cover) {
      return `<img class="cover" src="${p.cover}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
              <div class="cover-fallback" style="display:none">${p.title}<small>${p.author}</small></div>`;
    }
    return `<div class="cover-fallback">${p.title}<small>${p.author}</small></div>`;
  }

  function productCard(p, kind, cart) {
    const selected = cart.has(p.id);
    const actionLabel = kind === "course" ? "Enroll" : "Buy now";
    const kindClass = kind === "course" ? "course-card" : "";
    const saleBadge = p.discount
      ? `<span class="badge sale">-${p.discount}%</span>`
      : "";
    const oldPrice = p.oldPrice && p.oldPrice > p.price
      ? `<span class="price-old">${money(p.oldPrice)}</span>`
      : "";
    return `
      <article class="product-card ${kindClass} ${selected ? "selected" : ""}" data-id="${p.id}">
        ${saleBadge}
        ${p.best ? `<span class="badge best">${p.best}</span>` : ""}
        <div class="cover-wrap">${coverHTML(p, kind)}</div>
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-author">${p.author}</p>
          <div class="stars-row">
            <span class="stars" aria-label="${p.rating} stars">${stars(p.rating)}</span>
            <span>(${p.reviews})</span>
          </div>
          <div class="price-row">
            <span class="price">${money(p.price)}</span>
            ${oldPrice}
          </div>
          <div class="stock">In stock</div>
          ${p.best && kind === "book" ? `<div class="sold-note">${p.best} nationwide</div>` : ""}
          <div class="product-actions">
            <div class="action-row">
              <button type="button" class="buy-btn" data-buy="${p.id}" data-kind="${kind}">
                ${actionLabel}
              </button>
              <button type="button" class="cart-add-btn ${selected ? "is-in" : ""}" data-add="${p.id}" data-kind="${kind}" aria-label="${selected ? "Remove from cart" : "Add to cart"}" title="${selected ? "In cart" : "Add to cart"}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14h9.5c.75 0 1.41-.41 1.75-1.03l3.3-6.02A1 1 0 0 0 20.9 5H6.2L5.27 2.79A1 1 0 0 0 4.3 2H2v2h1.6l3.6 7.59-1.35 2.44C5.52 14.37 6.48 16 7.2 16h12v-2H7.2z"/></svg>
              </button>
            </div>
            <span class="in-cart-note">In cart</span>
          </div>
        </div>
      </article>
    `;
  }

  function flyToCart(sourceEl) {
    const cartIcon = document.getElementById("open-cart");
    if (!sourceEl || !cartIcon) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cartIcon.classList.add("cart-bump");
      setTimeout(() => cartIcon.classList.remove("cart-bump"), 400);
      return;
    }
    const src = sourceEl.getBoundingClientRect();
    const dst = cartIcon.getBoundingClientRect();
    const clone = document.createElement("div");
    clone.className = "fly-clone";
    if (sourceEl.tagName === "IMG" && sourceEl.src) {
      clone.style.backgroundImage = `url("${sourceEl.src}")`;
    } else {
      clone.textContent = (sourceEl.textContent || "★").trim().slice(0, 2) || "★";
      clone.classList.add("fly-clone-text");
    }
    clone.style.left = src.left + src.width / 2 + "px";
    clone.style.top = src.top + src.height / 2 + "px";
    document.body.appendChild(clone);
    const dx = dst.left + dst.width / 2 - (src.left + src.width / 2);
    const dy = dst.top + dst.height / 2 - (src.top + src.height / 2);
    requestAnimationFrame(() => {
      clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.15)`;
      clone.style.opacity = "0.35";
    });
    setTimeout(() => {
      clone.remove();
      cartIcon.classList.add("cart-bump");
      setTimeout(() => cartIcon.classList.remove("cart-bump"), 450);
    }, 700);
  }

  function bindAdd(root, cart, onToggle) {
    function ensureInCart(id, kind) {
      const item = (kind === "course" ? courses : books).find((x) => x.id === id);
      if (!item) return null;
      if (!cart.has(id)) {
        cart.set(id, {
          id: item.id,
          kind,
          title: item.title,
          price: item.price,
          cover: item.cover || ""
        });
        saveCart(cart);
      }
      return item;
    }

    root.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.dataset.add;
        const kind = btn.dataset.kind;
        const item = (kind === "course" ? courses : books).find((x) => x.id === id);
        if (!item) return;
        if (cart.has(id)) {
          cart.delete(id);
          toast("Removed “" + item.title + "”");
        } else {
          cart.set(id, {
            id: item.id,
            kind,
            title: item.title,
            price: item.price,
            cover: item.cover || ""
          });
          const card = btn.closest(".product-card");
          const cover = card?.querySelector(".cover, .cover-fallback");
          flyToCart(cover || card);
          toast("Added “" + item.title + "”");
        }
        saveCart(cart);
        onToggle();
      });
    });

    root.querySelectorAll("[data-buy]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.dataset.buy;
        const kind = btn.dataset.kind;
        const item = ensureInCart(id, kind);
        if (!item) return;
        const card = btn.closest(".product-card");
        const cover = card?.querySelector(".cover, .cover-fallback");
        flyToCart(cover || card);
        onToggle();
        document.getElementById("open-checkout")?.click();
        if (!document.getElementById("open-checkout")) {
          // Fallback: open cart drawer pay mode if checkout CTA missing
          document.getElementById("open-cart")?.click();
          setTimeout(() => document.getElementById("pay-btn")?.click(), 50);
        }
        toast("Proceeding to checkout — “" + item.title + "”");
      });
    });
  }

  function total(cart) {
    let t = 0;
    cart.forEach((i) => { t += i.price; });
    return t;
  }

  function updateBadge(cart) {
    const el = document.getElementById("cart-count");
    if (el) el.textContent = String(cart.size);
    const tot = document.getElementById("cart-total");
    if (tot) tot.textContent = money(total(cart));
    const pay = document.getElementById("pay-btn");
    if (pay) {
      const empty = cart.size === 0;
      pay.disabled = empty;
      pay.textContent = empty ? "Cart is empty" : "Pay " + money(total(cart));
    }
  }

  function renderCartItems(cart, onChange) {
    const root = document.getElementById("cart-items");
    if (!root) return;
    if (cart.size === 0) {
      root.innerHTML = `<div class="empty-cart">Your cart is empty.<br />Add VocabLab books or enroll in a course.</div>`;
      return;
    }
    const items = [];
    cart.forEach((i) => items.push(i));
    root.innerHTML = items.map((i) => `
      <div class="cart-item">
        <div class="cart-thumb" style="${i.cover ? `background-image:url('${i.cover}')` : ""}" aria-hidden="true"></div>
        <div>
          <h4>${i.title}</h4>
          <div class="meta">${i.kind === "course" ? "Course enrollment" : "Book · Study Box"}</div>
          <div class="line-price">${money(i.price)}</div>
        </div>
        <button type="button" class="remove-item" data-remove="${i.id}">Remove</button>
      </div>
    `).join("");
    root.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        cart.delete(btn.dataset.remove);
        saveCart(cart);
        onChange();
      });
    });
  }

  function renderPlaylists(mountId) {
    const root = document.getElementById(mountId);
    if (!root) return;
    root.innerHTML = playlists.map((p) => {
      const src = p.videoId
        ? `https://www.youtube-nocookie.com/embed/${p.videoId}`
        : "";
      const media = src
        ? `<iframe src="${src}" title="${p.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`
        : `<div class="yt-ph"><div><div class="play-dot">▶</div>YouTube</div></div>`;
      return `
        <article class="playlist-card">
          <div class="playlist-thumb">${media}</div>
          <div class="playlist-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.meta} →</a>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderReviews(mountId, filter = "all") {
    const root = document.getElementById(mountId);
    if (!root) return;
    const list = filter === "all" ? reviews : reviews.filter((r) => r.type === filter);
    root.innerHTML = list.map((r) => `
      <article class="review">
        <div class="stars" aria-label="${r.stars} of 5">${stars(r.stars)}</div>
        <p>“${r.text}”</p>
        <div class="review-foot">
          <strong>${r.name}</strong>
          <span class="pill ${r.type === "book" ? "book" : ""}">${r.item}</span>
        </div>
      </article>
    `).join("") || `<p style="color:var(--body);">No reviews in this filter.</p>`;
  }

  function initShell(getCart, refresh) {
    const cart = getCart();
    const drawer = document.getElementById("drawer");
    const backdrop = document.getElementById("backdrop");
    if (!drawer || !backdrop) {
      updateBadge(cart);
      return cart;
    }

    let lastFocus = null;

    function openDrawer(pay = false) {
      lastFocus = document.activeElement;
      drawer.hidden = false;
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        drawer.classList.add("open");
        backdrop.classList.add("open");
      });
      document.body.style.overflow = "hidden";
      const cb = document.getElementById("checkout-block");
      const items = document.getElementById("cart-items");
      if (cb) cb.classList.toggle("checkout-hidden", !pay);
      const success = document.getElementById("pay-success");
      if (success) success.classList.remove("show");
      if (items) items.classList.toggle("checkout-hidden", pay && cart.size > 0);
      const title = document.getElementById("drawer-title");
      if (title) title.textContent = pay ? "Checkout" : "Your cart";
      document.getElementById("drawer-close")?.focus();
      renderCartItems(cart, refresh);
      updateBadge(cart);
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
      setTimeout(() => {
        drawer.hidden = true;
        backdrop.hidden = true;
      }, 200);
      if (lastFocus) lastFocus.focus();
    }

    document.getElementById("open-cart")?.addEventListener("click", () => openDrawer(false));
    document.getElementById("open-checkout")?.addEventListener("click", () => openDrawer(true));
    document.getElementById("drawer-close")?.addEventListener("click", closeDrawer);
    document.getElementById("success-done")?.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
    });

    document.getElementById("pay-btn")?.addEventListener("click", () => {
      if (cart.size === 0) {
        toast("Add a book or course first");
        return;
      }
      openDrawer(true);
    });

    document.getElementById("payment-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!e.target.reportValidity()) return;
      if (cart.size === 0) {
        toast("Cart is empty");
        return;
      }
      const user = getUser();
      if (!user) {
        toast("Please sign in to place an order");
        openAuthModal("signin");
        return;
      }
      const btn = document.getElementById("pay-btn");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Processing…";
      }
      setTimeout(() => {
        const items = [];
        cart.forEach((i) => items.push({ id: i.id, kind: i.kind, title: i.title, price: i.price }));
        addOrder({
          id: "SB-" + Date.now().toString(36).toUpperCase(),
          email: user.email,
          items,
          total: total(cart),
          createdAt: new Date().toISOString(),
          status: "Paid (demo)"
        });
        document.getElementById("checkout-block")?.classList.add("checkout-hidden");
        document.getElementById("cart-items")?.classList.add("checkout-hidden");
        document.getElementById("pay-success")?.classList.add("show");
        const foot = document.getElementById("drawer-foot");
        if (foot) foot.style.display = "none";
        cart.clear();
        saveCart(cart);
        refresh();
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Cart is empty";
        }
        if (foot) foot.style.display = "";
      }, 900);
    });

    document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
    updateBadge(cart);
    updateAccountUI();
    wireAuthModal();
    wireNavDrawer();
    return cart;
  }

  function wireNavDrawer() {
    const drawer = document.getElementById("nav-drawer");
    const backdrop = document.getElementById("nav-backdrop");
    const openBtn = document.getElementById("open-nav");
    const closeBtn = document.getElementById("nav-close");
    if (!drawer || !backdrop || !openBtn) return;

    function openNav() {
      drawer.hidden = false;
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        drawer.classList.add("open");
        backdrop.classList.add("open");
      });
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      closeBtn?.focus();
    }
    function closeNav() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      setTimeout(() => {
        drawer.hidden = true;
        backdrop.hidden = true;
      }, 220);
      openBtn.focus();
    }

    openBtn.addEventListener("click", openNav);
    closeBtn?.addEventListener("click", closeNav);
    backdrop.addEventListener("click", closeNav);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) closeNav();
    });
  }

  /* ---------- Auth (localStorage demo) ---------- */
  const USERS_KEY = "sb_users_v1";
  const SESSION_KEY = "sb_session_v1";
  const ORDERS_KEY = "sb_orders_v1";

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function hash(str) {
    // Demo-only hash (not security)
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return String(h);
  }

  function getUser() {
    const session = readJSON(SESSION_KEY, null);
    if (!session?.email) return null;
    const users = readJSON(USERS_KEY, []);
    return users.find((u) => u.email === session.email) || null;
  }

  function signUp({ name, email, phone, password }) {
    const users = readJSON(USERS_KEY, []);
    const normalized = String(email || "").trim().toLowerCase();
    if (!normalized || !password || !name) throw new Error("Name, email, and password are required");
    if (users.some((u) => u.email === normalized)) throw new Error("Account already exists — sign in instead");
    const user = {
      name: name.trim(),
      email: normalized,
      phone: (phone || "").trim(),
      passwordHash: hash(password),
      address: "",
      createdAt: new Date().toISOString()
    };
    users.push(user);
    writeJSON(USERS_KEY, users);
    writeJSON(SESSION_KEY, { email: normalized });
    updateAccountUI();
    return user;
  }

  function signIn({ email, password }) {
    const users = readJSON(USERS_KEY, []);
    const normalized = String(email || "").trim().toLowerCase();
    const user = users.find((u) => u.email === normalized);
    if (!user || user.passwordHash !== hash(password || "")) {
      throw new Error("Invalid email or password");
    }
    writeJSON(SESSION_KEY, { email: normalized });
    updateAccountUI();
    return user;
  }

  function signOut() {
    localStorage.removeItem(SESSION_KEY);
    updateAccountUI();
    toast("Signed out");
  }

  function updateProfile({ name, phone, address }) {
    const users = readJSON(USERS_KEY, []);
    const session = readJSON(SESSION_KEY, null);
    if (!session?.email) throw new Error("Not signed in");
    const idx = users.findIndex((u) => u.email === session.email);
    if (idx < 0) throw new Error("Account not found");
    users[idx] = {
      ...users[idx],
      name: (name || users[idx].name).trim(),
      phone: (phone ?? users[idx].phone).trim(),
      address: (address ?? users[idx].address).trim()
    };
    writeJSON(USERS_KEY, users);
    updateAccountUI();
    return users[idx];
  }

  function addOrder(order) {
    const orders = readJSON(ORDERS_KEY, []);
    orders.unshift(order);
    writeJSON(ORDERS_KEY, orders);
  }

  function listOrders() {
    const user = getUser();
    if (!user) return [];
    return readJSON(ORDERS_KEY, []).filter((o) => o.email === user.email);
  }

  function updateAccountUI() {
    const user = getUser();
    document.querySelectorAll("[data-account-label]").forEach((el) => {
      el.textContent = user ? user.name.split(" ")[0] : "Sign in";
    });
    document.querySelectorAll("[data-account-link]").forEach((el) => {
      el.setAttribute("href", "account.html");
      el.setAttribute("aria-label", user ? "Open account" : "Sign in");
    });
  }

  function openAuthModal(mode = "signin") {
    const modal = document.getElementById("auth-modal");
    const backdrop = document.getElementById("auth-backdrop");
    if (!modal || !backdrop) {
      window.location.href = "account.html";
      return;
    }
    selectAuthTab(mode);
    modal.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add("open");
      backdrop.classList.add("open");
    });
    document.body.style.overflow = "hidden";
    document.getElementById(mode === "signup" ? "signup-name" : "signin-email")?.focus();
  }

  function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    const backdrop = document.getElementById("auth-backdrop");
    if (!modal || !backdrop) return;
    modal.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.hidden = true;
      backdrop.hidden = true;
    }, 200);
  }

  function selectAuthTab(mode) {
    document.querySelectorAll("[data-auth-tab]").forEach((btn) => {
      btn.setAttribute("aria-selected", btn.dataset.authTab === mode ? "true" : "false");
    });
    document.getElementById("signin-form")?.classList.toggle("checkout-hidden", mode !== "signin");
    document.getElementById("signup-form")?.classList.toggle("checkout-hidden", mode !== "signup");
    const switchLine = document.getElementById("auth-switch-line");
    if (switchLine) {
      switchLine.innerHTML = mode === "signin"
        ? `Don’t have an account? <button type="button" class="link-btn" data-auth-tab="signup">Sign up</button>`
        : `Already have an account? <button type="button" class="link-btn" data-auth-tab="signin">Sign in</button>`;
      switchLine.querySelectorAll("[data-auth-tab]").forEach((btn) => {
        btn.addEventListener("click", () => selectAuthTab(btn.dataset.authTab));
      });
    }
  }

  function wireAuthModal() {
    document.getElementById("open-auth")?.addEventListener("click", (e) => {
      e.preventDefault();
      if (getUser()) window.location.href = "account.html";
      else openAuthModal("signin");
    });
    document.getElementById("auth-backdrop")?.addEventListener("click", closeAuthModal);
    document.getElementById("auth-close")?.addEventListener("click", closeAuthModal);
    document.querySelectorAll("[data-auth-tab]").forEach((btn) => {
      btn.addEventListener("click", () => selectAuthTab(btn.dataset.authTab));
    });
    document.getElementById("signin-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      try {
        const user = signIn({
          email: document.getElementById("signin-email").value,
          password: document.getElementById("signin-password").value
        });
        toast("Welcome back, " + user.name.split(" ")[0]);
        closeAuthModal();
      } catch (err) {
        toast(err.message);
      }
    });
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      try {
        const user = signUp({
          name: document.getElementById("signup-name").value,
          email: document.getElementById("signup-email").value,
          phone: document.getElementById("signup-phone").value,
          password: document.getElementById("signup-password").value
        });
        toast("Account created for " + user.name.split(" ")[0]);
        closeAuthModal();
      } catch (err) {
        toast(err.message);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.getElementById("auth-modal");
        if (modal?.classList.contains("open")) closeAuthModal();
      }
    });
  }

  function initLoopSlider(rootId, { interval = 5000 } = {}) {
    const root = document.getElementById(rootId);
    if (!root) return;
    const slides = [...root.querySelectorAll("[data-slide]")];
    if (slides.length < 2) return;
    let i = 0;
    let timer = null;
    const dots = [...root.querySelectorAll("[data-slide-dot]")];

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, idx) => {
        s.classList.toggle("is-active", idx === i);
        s.setAttribute("aria-hidden", idx === i ? "false" : "true");
      });
      dots.forEach((d, idx) => {
        d.classList.toggle("is-active", idx === i);
        d.setAttribute("aria-selected", idx === i ? "true" : "false");
      });
    }
    function next() { go(i + 1); }
    function start() {
      stop();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(next, interval);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    root.querySelectorAll("[data-slide-next]").forEach((b) => {
      b.addEventListener("click", (e) => { e.preventDefault(); next(); start(); });
    });
    root.querySelectorAll("[data-slide-prev]").forEach((b) => {
      b.addEventListener("click", (e) => { e.preventDefault(); go(i - 1); start(); });
    });
    dots.forEach((d, idx) => {
      d.addEventListener("click", () => { go(idx); start(); });
    });

    go(0);
    start();
  }

  return {
    books, courses, playlists, reviews, BOOK_CATEGORIES,
    money, stars, loadCart, saveCart, toast,
    productCard, bindAdd, total, updateBadge,
    renderCartItems, renderPlaylists, renderReviews, initShell,
    getUser, signUp, signIn, signOut, updateProfile,
    listOrders, addOrder, openAuthModal, closeAuthModal, updateAccountUI,
    flyToCart, initLoopSlider
  };
})();
