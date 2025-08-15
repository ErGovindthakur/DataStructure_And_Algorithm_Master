/* 
Set 3 – Advanced & Tricky — Solutions with Explanations
Author: Your Name
Usage: This file is meant for reading + copy/paste into a browser console or project files.
*/

/* ======================================================
1) Event Loop — Real-world Analogy + Key Points
======================================================
Analogy:
- Think of a single chef (the JS thread) in a kitchen.
- Orders (functions) are put on the Call Stack; the chef handles one dish at a time.
- When a dish needs to "wait" (timers, network), a helper (Web APIs) takes over.
- When helpers are done, callbacks are queued:
  • Microtask Queue = VIP queue (Promises, queueMicrotask) — ALWAYS processed first.
  • Macrotask/Task Queue = regular queue (setTimeout/setInterval, DOM events).
- The Event Loop’s job is to:
  1) Check if the Call Stack is empty.
  2) Drain ALL microtasks.
  3) Take one macrotask, run it, repeat.

Interview punchline:
"Promises (microtasks) run before setTimeout (macrotasks), after the current synchronous code finishes."
*/

/* ======================================================
2) Output Ordering — Microtasks vs Macrotasks
====================================================== */
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');

/*
Expected output:
start
end
promise
timeout

Why?
- 'start' logs synchronously.
- 'end' logs synchronously (still in the same call stack).
- Promise callback goes to the Microtask Queue; setTimeout(0) goes to the Macrotask Queue.
- After the current call stack is empty, the Event Loop drains microtasks first → logs 'promise'.
- Then it takes the next macrotask → logs 'timeout'.
*/

/* ======================================================
3) Debounce Implementation
======================================================
Debounce: run the function AFTER the user stops triggering it for a given time.
Common use: search box (wait until user stops typing).
*/
function debounce(fn, delay = 300, immediate = false) {
  let timerId;
  return function (...args) {
    const context = this;
    const callNow = immediate && !timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
      if (!immediate) fn.apply(context, args);
    }, delay);
    if (callNow) fn.apply(context, args);
  };
}

/* Example usage (pseudo):
const onInput = debounce((e) => {
  console.log('Searching for:', e.target.value);
}, 400);

inputEl.addEventListener('input', onInput);
*/

/* ======================================================
4) Map vs WeakMap — Differences & When to Use
======================================================
Map:
- Keys can be ANY type (primitives or objects).
- Iterable, has size, for..of works.
- Strong references: keys prevent GC.

WeakMap:
- Keys MUST be objects.
- NOT iterable, no size property.
- Weak references: if the only reference to a key object is inside the WeakMap, it can be garbage-collected.
- Great for per-object metadata/caches without memory leaks.
*/
(function demoMapWeakMap() {
  const m = new Map();
  m.set('id', 123);
  m.set({ user: 'alice' }, 'meta');
  // Iterable:
  // for (const [k, v] of m) console.log(k, v);

  const wm = new WeakMap();
  const objKey = { user: 'bob' };
  wm.set(objKey, { secret: 42 }); // OK (object key)
  // wm.set('not-object', 1); // TypeError: Invalid value used as weak map key
  // Not iterable; used mainly for private metadata tied to object lifecycle.
})();

/* ======================================================
5) Async Generator — Fetch paginated data until done
======================================================
We’ll simulate a paginated API. In real life, replace `mockFetchPage` with `fetch(...)`.
*/
async function mockFetchPage(page = 1) {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 200));
  const TOTAL_PAGES = 3;
  if (page > TOTAL_PAGES) {
    return { items: [], nextPage: null };
  }
  // Example "items" per page:
  return {
    items: [`Item ${page}-A`, `Item ${page}-B`],
    nextPage: page < TOTAL_PAGES ? page + 1 : null
  };
}

async function* paginatedItems() {
  let page = 1;
  while (true) {
    const { items, nextPage } = await mockFetchPage(page);
    if (!items.length) break;
    for (const item of items) yield item; // stream items as they arrive
    if (!nextPage) break;
    page = nextPage;
  }
}

// Example consumer:
(async function consumePages() {
  // console.log('--- Streaming items from async generator ---');
  for await (const item of paginatedItems()) {
    // console.log('Got:', item);
  }
  // console.log('--- Done streaming ---');
})();

/* ======================================================
6) Event Delegation — Why Bubbling Matters (Example)
======================================================
Delegation relies on bubbling: a single listener on a parent can handle events from many children.
HTML:
<ul id="menu">
  <li data-id="home">Home</li>
  <li data-id="about">About</li>
  <li data-id="contact">Contact</li>
</ul>

JS:
*/
function attachDelegationExample() {
  const menu = document.getElementById('menu');
  if (!menu) return; // ignore if not in DOM
  menu.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li || !menu.contains(li)) return;
    console.log('Clicked item id =', li.dataset.id);
  });
}
/*
Why bubbling is important?
- The click originates on the <li>, bubbles up to <ul>, where ONE listener decides what to do.
- This scales (new <li> added later still works) and improves performance (fewer listeners).
*/

/* ======================================================
7) Throttling vs Debouncing — UX Difference
======================================================
- Debounce: wait for silence; triggers once after the user stops (e.g., search input).
- Throttle: allow execution at most once per interval while events keep firing (e.g., scroll handler).
*/
function throttle(fn, interval = 200) {
  let last = 0;
  let timerId = null;
  return function (...args) {
    const now = Date.now();
    const remaining = interval - (now - last);
    const context = this;
    if (remaining <= 0) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      last = now;
      fn.apply(context, args);
    } else if (!timerId) {
      // trailing call
      timerId = setTimeout(() => {
        last = Date.now();
        timerId = null;
        fn.apply(context, args);
      }, remaining);
    }
  };
}

/* Example usage (pseudo):
window.addEventListener('scroll', throttle(() => {
  console.log('Scroll handler (throttled)');
}, 150));
*/

/* ======================================================
8) Service Worker vs Web Worker — Differences + Snippets
======================================================
Web Worker:
- Run JS in a background thread (no DOM access), great for heavy computations.
- Lives while referenced.
Example:
  // worker.js
  self.onmessage = (e) => { postMessage(e.data * 2); };

  // main.js
  const w = new Worker('worker.js');
  w.postMessage(21);
  w.onmessage = (e) => console.log(e.data); // 42

Service Worker:
- Sits between your app and network; can intercept requests, cache, and enable offline (PWA).
- Lifecycle: install → activate → fetch (persists across visits).
Example:
  // main.js
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }

  // sw.js
  self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('v1').then(cache => cache.addAll(['/','/index.html'])));
  });
  self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
  });

Key differences:
- Purpose: Web Worker = compute; Service Worker = offline/caching/network proxy.
- Scope: Web Worker per page; Service Worker scope is origin/path and persists.
- DOM: Neither can touch DOM directly.
*/

/* ======================================================
9) Optimizing a Slow JavaScript Page — Checklist + Snippets
======================================================
A) Reduce DOM thrash:
*/
function addManyFast(elementsCount = 1000) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < elementsCount; i++) {
    const div = document.createElement('div');
    div.textContent = `Item #${i}`;
    frag.appendChild(div);
  }
  document.body.appendChild(frag);
}

/*
B) Defer heavy work to idle time or separate thread:
- Use requestIdleCallback (where supported) or Web Workers.
*/
function scheduleHeavyWork(cb) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(cb);
  } else {
    setTimeout(cb, 0);
  }
}

/*
C) Smooth animations with requestAnimationFrame:
*/
function animateBox(box) {
  let x = 0;
  function step() {
    x += 2;
    box.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/*
D) Network & resources:
- Use <script type="module"> or defer/async for non-blocking JS.
- Lazy-load images: <img loading="lazy" ...>.
- Code split: dynamic import() to load heavy modules on demand.
*/
async function loadChartOnDemand() {
  const { initChart } = await import('./heavy-chart-module.js'); // example
  initChart();
}

/*
E) Data work:
- Memoize expensive pure functions.
- Batch state updates.
- Virtualize long lists (render only visible items).
*/

/* End of Set 3 Solutions */
