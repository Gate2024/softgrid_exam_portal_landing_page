import { useRef, useState } from 'react'

const screenshotStates = [
  {
    id: 'login',
    label: 'Login Screen',
    route: 'examportal.app/login-screen',
    activeSection: 'Dashboard',
    cards: [
      { label: 'Secure access', value: 'Ready' },
      { label: 'Active sessions', value: '24' },
      { label: 'System status', value: 'Online' },
    ],
    panelTitle: 'Welcome to ExamPortal',
    panelRows: ['Institution login', 'Verified credentials', 'Secure examination access'],
  },
  {
    id: 'admin',
    label: 'Admin Dashboard',
    route: 'examportal.app/admin-dashboard',
    activeSection: 'Dashboard',
    cards: [
      { label: 'Total exams', value: '148' },
      { label: 'Candidates', value: '5,240' },
      { label: 'Avg. score', value: '82.4%' },
    ],
    panelTitle: 'Live exam activity',
    panelRows: ['Mathematics — Mid-Term', 'Science — Unit Test', 'English — Final Exam'],
  },
  {
    id: 'creation',
    label: 'Exam Creation',
    route: 'examportal.app/exam-creation',
    activeSection: 'Exams',
    cards: [
      { label: 'Exam title', value: 'New examination' },
      { label: 'Duration', value: '90 min' },
      { label: 'Questions', value: '40' },
    ],
    panelTitle: 'Build your examination',
    panelRows: ['Set exam details', 'Select question bank', 'Publish when ready'],
  },
  {
    id: 'question-bank',
    label: 'Question Bank',
    route: 'examportal.app/question-bank',
    activeSection: 'Questions',
    cards: [
      { label: 'Total questions', value: '12,450' },
      { label: 'Verified items', value: '9,820' },
      { label: 'Categories', value: '28' },
    ],
    panelTitle: 'Question library',
    panelRows: ['Mathematics · Algebra', 'Science · Physics', 'English · Comprehension'],
  },
  {
    id: 'candidate',
    label: 'Candidate Interface',
    route: 'examportal.app/candidate-interface',
    activeSection: 'Candidates',
    cards: [
      { label: 'Exam progress', value: '68%' },
      { label: 'Time remaining', value: '42:18' },
      { label: 'Answered', value: '27 / 40' },
    ],
    panelTitle: 'Candidate examination',
    panelRows: ['Question 28 of 40', 'Mark for review', 'Save and continue'],
  },
  {
    id: 'results',
    label: 'Results Dashboard',
    route: 'examportal.app/results-dashboard',
    activeSection: 'Reports',
    cards: [
      { label: 'Completion rate', value: '94.8%' },
      { label: 'Average score', value: '82.4%' },
      { label: 'Top result', value: '98.2%' },
    ],
    panelTitle: 'Results overview',
    panelRows: ['Score distribution', 'Candidate performance', 'Download report'],
  },
]

const sidebarItems = ['Dashboard', 'Exams', 'Questions', 'Candidates', 'Reports', 'Settings']

function BrowserBar({ route }) {
  return (
    <div className="screenshot-preview__browser">
      <div className="screenshot-preview__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="screenshot-preview__address">{route}</div>
    </div>
  )
}

function PreviewSidebar({ activeSection }) {
  return (
    <aside className="screenshot-preview__sidebar" aria-label="Preview navigation">
      <div className="screenshot-preview__sidebar-mark">EP</div>
      <nav className="screenshot-preview__menu">
        {sidebarItems.map((item) => (
          <div
            className={`screenshot-preview__menu-item${item === activeSection ? ' is-active' : ''}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}

function PreviewContent({ state }) {
  return (
    <div className={`screenshot-preview__main-content screenshot-preview__main-content--${state.id}`} key={state.id}>
      <div className="screenshot-preview__topbar">{state.label}</div>
      <div className="screenshot-preview__content-area">
        <div className="screenshot-preview__stat-cards">
          {state.cards.map((card) => (
            <div className="screenshot-preview__stat-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="screenshot-preview__panel">
          <div className="screenshot-preview__panel-heading">
            <span>{state.panelTitle}</span>
            <i aria-hidden="true" />
          </div>
          <div className="screenshot-preview__panel-lines">
            {state.panelRows.map((row, index) => (
              <div className="screenshot-preview__panel-line" key={row}>
                <i aria-hidden="true" />
                <span>{row}</span>
                <b>{index === 0 ? 'View' : '•••'}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenshotPreview({ state }) {
  return (
    <div className="screenshot-preview">
      <BrowserBar route={state.route} />
      <div className="screenshot-preview__body">
        <div className="screenshot-preview__inner">
          <PreviewSidebar activeSection={state.activeSection} />
          <PreviewContent state={state} />
        </div>
        <div className="screenshot-preview__floating-label">{state.label}</div>
      </div>
    </div>
  )
}

function ScreenshotGallery() {
  const [selectedScreenshot, setSelectedScreenshot] = useState('login')
  const tabRefs = useRef([])
  const selectedState = screenshotStates.find((state) => state.id === selectedScreenshot) ?? screenshotStates[0]

  const selectScreenshot = (id, focusTab = false) => {
    setSelectedScreenshot(id)
    if (focusTab) {
      const index = screenshotStates.findIndex((state) => state.id === id)
      tabRefs.current[index]?.focus()
    }
  }

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % screenshotStates.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + screenshotStates.length) % screenshotStates.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = screenshotStates.length - 1
    if (nextIndex !== index) {
      event.preventDefault()
      selectScreenshot(screenshotStates[nextIndex].id, true)
    }
  }

  return (
    <section className="screenshots-section" id="screenshots" aria-labelledby="screenshots-title">
      <div className="screenshots-section__inner">
        <header className="screenshots-section__header">
          <p>Gallery</p>
          <h2 id="screenshots-title">
            <span>See the Exam Portal</span>
            <strong>in Action</strong>
          </h2>
        </header>

        <div className="screenshot-tabs" role="tablist" aria-label="Exam portal screenshots">
          {screenshotStates.map((state, index) => {
            const isSelected = state.id === selectedScreenshot
            return (
              <button
                aria-controls="screenshot-preview"
                aria-selected={isSelected}
                className={`screenshot-tab${isSelected ? ' is-active' : ''}`}
                id={`screenshot-tab-${state.id}`}
                key={state.id}
                onClick={() => selectScreenshot(state.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(element) => { tabRefs.current[index] = element }}
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                {state.label}
              </button>
            )
          })}
        </div>

        <div id="screenshot-preview" role="tabpanel" aria-label={`${selectedState.label} preview`}>
          <ScreenshotPreview state={selectedState} />
        </div>
      </div>
    </section>
  )
}

export default ScreenshotGallery
