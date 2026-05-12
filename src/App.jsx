import { useState, useRef } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { XIcon, ChevronDownIcon, AlertCircleIcon, BriefcaseIcon, MapPinIcon, HashIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

/* ── Stat Card ────────────────────────────────────────────────────────────── */
function StatCard({ label, value, sub, wide }) {
  return (
    <div
      className="bg-white"
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '14px',
        padding: '16px 20px',
        minWidth: wide ? '220px' : '150px',
        flex: wide ? '0 0 auto' : '1',
      }}
    >
      <div className="text-xs tracking-wider mb-2" style={{ fontWeight: 400, color: '#4A5565', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: '30px', fontWeight: 600, color: '#101828', lineHeight: 1.1 }}>{value}</div>
      {sub && <div className="text-xs mt-1.5" style={{ color: '#6A7282' }}>{sub}</div>}
    </div>
  )
}

/* ── Logo ─────────────────────────────────────────────────────────────────── */
function TimesheetsLogo() {
  return (
    <svg width="120" height="22" viewBox="0 0 129 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0346 8.9548C11.0448 8.96788 13.1336 11.6429 16.0686 13.1505C18.1143 14.2106 19.7921 15.2932 19.9761 17.0525C19.996 17.263 20.0023 17.4667 19.9974 17.6636C19.0987 18.9264 16.9029 19.7597 14.2592 20.1649C14.7223 19.7869 15.1836 19.2024 15.2179 18.3608C15.3098 16.1053 14.2295 15.203 12.9423 14.1654C12.5975 13.8722 12.1378 13.5337 11.7241 13.1728C11.1725 12.6766 10.8506 11.9774 10.8276 11.2331C10.7586 10.376 10.8507 9.33825 11.0346 8.9548ZM8.96562 8.9548C9.14949 9.33828 9.24157 10.376 9.17262 11.2331C9.14962 11.9774 8.82767 12.6766 8.27608 13.1728C7.86236 13.5337 7.40265 13.8722 7.05786 14.1654C5.77065 15.203 4.69035 16.1052 4.78227 18.3608C4.81345 19.1258 5.19746 19.6783 5.61489 20.0566C3.16709 19.6198 1.07738 18.8221 0.00241032 17.6629C-0.00240909 17.4662 0.00423119 17.2627 0.0240692 17.0525C0.208043 15.2932 1.8859 14.2106 3.93154 13.1505C6.87374 11.6392 8.96562 8.9548 8.96562 8.9548Z" fill="#F09021" />
      <path d="M19.9989 17.6615C19.9989 19.06 19.1946 20.6616 17.8614 21.9022C16.4593 23.233 14.6203 24 12.8274 24H7.17262C5.4027 24 3.56367 23.233 2.13854 21.9022C0.805412 20.639 0.0010643 19.06 0.0010643 17.6615C3.44901 21.3833 17.3555 21.3833 19.9989 17.6615ZM6.87402 0C7.17271 9.06267e-05 7.40263 0.180522 7.47159 0.428559C7.51753 0.676598 7.4027 0.924892 7.17298 1.06025C2.71368 3.56398 6.11537 6.72186 7.47159 7.53393C8.38104 8.07383 8.78541 8.55485 8.95895 8.96316C8.89168 9.04826 8.32692 9.75323 7.41336 10.6178C6.44629 9.69701 5.34788 8.98505 4.34561 8.34576C2.52971 7.19539 0.989537 6.18042 0.805637 4.39848C0.713696 3.27067 0.989413 2.32315 1.65601 1.60135C2.8743 0.270635 5.17308 4.91426e-06 6.87402 0ZM13.1263 0C14.8273 2.38748e-05 17.1261 0.270613 18.3443 1.60135C19.0108 2.32313 19.2866 3.27073 19.1947 4.39848C19.0108 6.18038 17.4706 7.19542 15.6547 8.34576C14.6523 8.98512 13.5534 9.69686 12.5863 10.6178C11.6356 9.71805 11.0631 8.99086 11.0357 8.95584C11.2139 8.54907 11.6246 8.07068 12.5287 7.53393C13.885 6.72176 17.2863 3.56389 12.8274 1.06025C12.5975 0.924901 12.4828 0.676654 12.5287 0.428559C12.5977 0.180485 12.8275 6.02959e-06 13.1263 0Z" fill="#E85C26" />
      <path d="M31.672 18V8.496H28.45V6.264H37.558V8.496H34.336V18H31.672ZM39.388 18V6.264H42.034V18H39.388ZM44.802 18V6.264H47.7L49.59 11.484C49.71 11.82 49.824 12.174 49.932 12.546C50.04 12.918 50.154 13.284 50.274 13.644H50.346C50.466 13.284 50.574 12.918 50.67 12.546C50.778 12.174 50.892 11.82 51.012 11.484L52.866 6.264H55.746V18H53.334V13.698C53.334 13.314 53.352 12.888 53.388 12.42C53.436 11.94 53.484 11.46 53.532 10.98C53.592 10.5 53.64 10.074 53.676 9.702H53.604L52.65 12.492L50.976 16.974H49.518L47.844 12.492L46.908 9.702H46.836C46.884 10.074 46.932 10.5 46.98 10.98C47.028 11.46 47.07 11.94 47.106 12.42C47.154 12.888 47.178 13.314 47.178 13.698V18H44.802ZM58.513 18V6.264H65.857V8.496H61.159V10.854H65.155V13.068H61.159V15.768H66.037V18H58.513ZM71.9563 18.216C71.1883 18.216 70.4203 18.072 69.6523 17.784C68.8963 17.496 68.2183 17.076 67.6183 16.524L69.1303 14.706C69.5503 15.066 70.0183 15.36 70.5343 15.588C71.0503 15.816 71.5483 15.93 72.0283 15.93C72.5803 15.93 72.9883 15.828 73.2523 15.624C73.5283 15.42 73.6663 15.144 73.6663 14.796C73.6663 14.424 73.5103 14.154 73.1983 13.986C72.8983 13.806 72.4903 13.608 71.9743 13.392L70.4443 12.744C70.0483 12.576 69.6703 12.354 69.3103 12.078C68.9503 11.79 68.6563 11.436 68.4283 11.016C68.2003 10.596 68.0863 10.104 68.0863 9.54C68.0863 8.892 68.2603 8.304 68.6083 7.776C68.9683 7.248 69.4603 6.828 70.0843 6.516C70.7203 6.204 71.4463 6.048 72.2623 6.048C72.9343 6.048 73.6063 6.18 74.2783 6.444C74.9503 6.708 75.5383 7.092 76.0423 7.596L74.6923 9.27C74.3083 8.97 73.9243 8.742 73.5403 8.586C73.1563 8.418 72.7303 8.334 72.2623 8.334C71.8063 8.334 71.4403 8.43 71.1643 8.622C70.9003 8.802 70.7683 9.06 70.7683 9.396C70.7683 9.756 70.9363 10.026 71.2723 10.206C71.6203 10.386 72.0463 10.578 72.5503 10.782L74.0623 11.394C74.7703 11.682 75.3343 12.078 75.7543 12.582C76.1743 13.086 76.3843 13.752 76.3843 14.58C76.3843 15.228 76.2103 15.828 75.8623 16.38C75.5143 16.932 75.0103 17.376 74.3503 17.712C73.6903 18.048 72.8923 18.216 71.9563 18.216ZM78.3762 18V6.264H81.0222V10.782H85.0722V6.264H87.7362V18H85.0722V13.104H81.0222V18H78.3762ZM90.5051 18V6.264H97.8491V8.496H93.1511V10.854H97.1471V13.068H93.1511V15.768H98.0291V18H90.5051ZM100.366 18V6.264H107.71V8.496H103.012V10.854H107.008V13.068H103.012V15.768H107.89V18H100.366ZM112.514 18V8.496H109.292V6.264H118.4V8.496H115.178V18H112.514ZM123.355 18.216C122.587 18.216 121.819 18.072 121.051 17.784C120.295 17.496 119.617 17.076 119.017 16.524L120.529 14.706C120.949 15.066 121.417 15.36 121.933 15.588C122.449 15.816 122.947 15.93 123.427 15.93C123.979 15.93 124.387 15.828 124.651 15.624C124.927 15.42 125.065 15.144 125.065 14.796C125.065 14.424 124.909 14.154 124.597 13.986C124.297 13.806 123.889 13.608 123.373 13.392L121.843 12.744C121.447 12.576 121.069 12.354 120.709 12.078C120.349 11.79 120.055 11.436 119.827 11.016C119.599 10.596 119.485 10.104 119.485 9.54C119.485 8.892 119.659 8.304 120.007 7.776C120.367 7.248 120.859 6.828 121.483 6.516C122.119 6.204 122.845 6.048 123.661 6.048C124.333 6.048 125.005 6.18 125.677 6.444C126.349 6.708 126.937 7.092 127.441 7.596L126.091 9.27C125.707 8.97 125.323 8.742 124.939 8.586C124.555 8.418 124.129 8.334 123.661 8.334C123.205 8.334 122.839 8.43 122.563 8.622C122.299 8.802 122.167 9.06 122.167 9.396C122.167 9.756 122.335 10.026 122.671 10.206C123.019 10.386 123.445 10.578 123.949 10.782L125.461 11.394C126.169 11.682 126.733 12.078 127.153 12.582C127.573 13.086 127.783 13.752 127.783 14.58C127.783 15.228 127.609 15.828 127.261 16.38C126.913 16.932 126.409 17.376 125.749 17.712C125.089 18.048 124.291 18.216 123.355 18.216Z" fill="white" />
    </svg>
  )
}
const PERIOD_RANGES = {
  'Month to Date':    'Month to Date (01/02/2026 – 28/02/2026)',
  'Last 7 Days':      'Last 7 Days (22/02/2026 – 28/02/2026)',
  'Last 30 Days':     'Last 30 Days (30/01/2026 – 28/02/2026)',
  'Current Month':    'Current Month (01/02/2026 – 28/02/2026)',
  'Previous Month':   'Previous Month (01/01/2026 – 31/01/2026)',
  'Current Quarter':  'Current Quarter (01/01/2026 – 31/03/2026)',
  'Previous Quarter': 'Previous Quarter (01/10/2025 – 31/12/2025)',
  'Year to Date':     'Year to Date (01/01/2026 – 28/02/2026)',
  'Custom Period…':   'Custom Period',
}

/* ── Day column helpers ──────────────────────────────────────────────────── */
const MONTH_SHORT = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

function formatDateDMY(d) {
  if (!d) return ''
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`
}

function getCalGrid(year, month) {
  const firstDow = new Date(year, month, 1).getDay()
  const offset = (firstDow + 6) % 7 // Mon-first
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev  = new Date(year, month, 0).getDate()
  const cells = []
  for (let i = 0; i < offset; i++)
    cells.push({ d: daysInPrev - offset + 1 + i, inMonth: false, date: new Date(year, month - 1, daysInPrev - offset + 1 + i) })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ d, inMonth: true, date: new Date(year, month, d) })
  let nd = 1
  while (cells.length < 42)
    cells.push({ d: nd, inMonth: false, date: new Date(year, month + 1, nd++) })
  return cells
}

function getDayCols(period, customStart, customEnd) {
  const feb = Array.from({ length: 28 }, (_, i) => `FEB ${i + 1}`)
  const jan = Array.from({ length: 31 }, (_, i) => `JAN ${i + 1}`)
  const dec = Array.from({ length: 31 }, (_, i) => `DEC ${i + 1}`)
  const oct = Array.from({ length: 31 }, (_, i) => `OCT ${i + 1}`)
  const nov = Array.from({ length: 30 }, (_, i) => `NOV ${i + 1}`)
  const mar = Array.from({ length: 31 }, (_, i) => `MAR ${i + 1}`)

  if (period === 'Last 7 Days')      return feb.slice(21)
  if (period === 'Last 30 Days')     return [...jan.slice(29), ...feb]
  if (period === 'Previous Month')   return jan
  if (period === 'Current Quarter')  return [...jan, ...feb, ...mar]
  if (period === 'Previous Quarter') return [...oct, ...nov, ...dec]
  if (period === 'Year to Date')     return [...jan, ...feb]
  if (period === 'Custom Period…' && customStart && customEnd) {
    const cols = []
    const cur = new Date(customStart); cur.setHours(0,0,0,0)
    const end = new Date(customEnd);   end.setHours(0,0,0,0)
    while (cur <= end) { cols.push(`${MONTH_SHORT[cur.getMonth()]} ${cur.getDate()}`); cur.setDate(cur.getDate() + 1) }
    return cols
  }
  return feb
}

/* ── Time Type filter ────────────────────────────────────────────────────── */
const TIME_TYPE_OPTIONS = [
  'All',
  'Offshore Billable', 'Offshore Not Billable', 'Offshore Overtime',
  'Onsite Billable',   'Onsite Not Billable',   'Onsite Overtime',
  'Remote Billable',   'Remote Not Billable',   'Remote Overtime',
]
function parseTimeType(value) {
  if (!value || value === 'All') return null
  for (const loc of ['Offshore', 'Onsite', 'Remote']) {
    if (value.startsWith(loc + ' ')) return { location: loc, classification: value.slice(loc.length + 1) }
  }
  return null
}

/* ── Cell type config ────────────────────────────────────────────────────── */
const CELL_STYLES = {
  'approved':    { bg: '#D4F5E9', stroke: '#82C697', color: '#28824B' },
  'draft':       { bg: '#F3F4F6', stroke: '#9CA3AF', color: '#6B7280' },
  'overtime':    { bg: '#FEF3C7', stroke: '#F59E0B', color: '#92400E' },
  'time-off':    { bg: '#CFFAFE', stroke: '#22D3EE', color: '#0E7490', label: 'TO' },
  'nat-holiday': { bg: '#EDE9FE', stroke: '#A78BFA', color: '#5B21B6', label: 'PH' },
  'acc-holiday': { bg: '#FEF9C3', stroke: '#EAB308', color: '#713F12', label: 'AH' },
  'travelling':  { bg: '#CFFAFE', stroke: '#22D3EE', color: '#0E7490', dot: true },
  'training':    { bg: '#F1F5F9', stroke: '#94A3B8', color: '#475569', label: 'T' },
  'merged':      { bg: '#D4F5E9', stroke: '#82C697', color: '#28824B', dot: true },
  'no-hours':    { bg: '#fff',    stroke: '#DC2626', color: '#DC2626', dashed: true, label: '0' },
  'pto-req':     { bg: '#CCFBF1', stroke: '#2DD4BF', color: '#115E59', label: 'PTO' },
  'pto-added':   { bg: '#DCFCE7', stroke: '#4ADE80', color: '#166534', label: 'PA' },
  'weekend':     { bg: '#F5F5F5', color: '#BDBDBD', label: '—' },
}
const CELL_NAMES = {
  'approved': 'Approved', 'draft': 'Draft', 'overtime': 'Overtime',
  'time-off': 'Time Off', 'nat-holiday': 'National Holiday', 'acc-holiday': 'Account Holiday',
  'travelling': 'Travelling', 'training': 'Training', 'merged': 'Merged',
  'no-hours': 'Submit Error', 'pto-req': 'Payed Time Off (PTO)', 'pto-added': 'PTO Added', 'weekend': 'Weekend',
}

/* cell shorthand: { v: hours_value, t: cell_type } */
const c = (v, t) => ({ v, t })

function padDays(knownDays, dayCols, rowId) {
  return dayCols.map((label, i) => {
    if (label in knownDays) return knownDays[label]
    const dow = i % 7
    if (dow === 5 || dow === 6) return null
    return (i + rowId) % 11 === 0 ? c(0, 'no-hours') : c(8, 'approved')
  })
}

const PROJECTS = [
  {
    id: 1,
    name: 'Boston Global HCP Web Experience Jan',
    rows: [
      { id: 1, name: 'David Rayan', role: 'UI Designer', rate: 100, location: 'Onsite',   assignment: '100%', type: 'Billable',     approvedBy: 'Chris Park', days: {
          'DEC 1':c(8,'approved'), 'DEC 2':c(0,'no-hours'), 'DEC 3':c(8,'approved'), 'DEC 4':c(8,'nat-holiday'), 'DEC 9':c(8,'approved'), 'DEC 10':c(10,'overtime'), 'DEC 16':c(8,'training'), 'DEC 17':c(0,'no-hours'),
          'JAN 6':c(8,'approved'), 'JAN 7':c(8,'time-off'), 'JAN 8':c(0,'no-hours'), 'JAN 13':c(8,'approved'), 'JAN 14':c(8,'approved'), 'JAN 20':c(10,'overtime'), 'JAN 21':c(8,'approved'),
          'FEB 1':c(0,'no-hours'), 'FEB 2':c(8,'approved'), 'FEB 3':c(8,'time-off'),  'FEB 4':c(10,'overtime'), 'FEB 5':c(0,'no-hours'), 'FEB 8':c(8,'approved'), 'FEB 9':c(8,'nat-holiday'), 'FEB 10':c(8,'training'), 'FEB 11':c(8,'approved'),
        }, hours: 40, revenue: 100000, discrepancy: false },
      { id: 2, name: 'David Rayan', role: 'UI Designer', rate: 100, location: 'Remote',   assignment: '100%', type: 'Not Billable', approvedBy: 'Chris Park', days: {
          'DEC 1':c(8,'draft'), 'DEC 2':c(0,'no-hours'), 'DEC 3':c(8,'approved'), 'DEC 8':c(8,'pto-req'), 'DEC 9':c(8,'approved'), 'DEC 15':c(0,'no-hours'), 'DEC 16':c(8,'merged'),
          'JAN 5':c(8,'approved'), 'JAN 6':c(0,'no-hours'), 'JAN 12':c(8,'approved'), 'JAN 13':c(8,'draft'), 'JAN 19':c(8,'approved'), 'JAN 20':c(0,'no-hours'),
          'FEB 1':c(8,'approved'), 'FEB 2':c(8,'draft'),    'FEB 3':c(0,'no-hours'), 'FEB 4':c(8,'pto-req'), 'FEB 5':c(0,'no-hours'), 'FEB 8':c(8,'approved'), 'FEB 9':c(8,'approved'), 'FEB 10':c(8,'merged'),  'FEB 11':c(8,'approved'),
        }, hours: 40, revenue: 100000, discrepancy: true  },
      { id: 3, name: 'Sarah Kim',   role: 'Developer',   rate: 90,  location: 'Offshore', assignment: '100%', type: 'Overtime',     approvedBy: 'Chris Park', days: {
          'DEC 1':c(8,'approved'), 'DEC 3':c(8,'acc-holiday'), 'DEC 8':c(8,'approved'), 'DEC 9':c(0,'no-hours'), 'DEC 12':c(8,'travelling'), 'DEC 15':c(8,'pto-added'), 'DEC 16':c(8,'approved'),
          'JAN 7':c(8,'approved'), 'JAN 8':c(0,'no-hours'), 'JAN 9':c(8,'approved'), 'JAN 14':c(8,'approved'), 'JAN 15':c(8,'acc-holiday'), 'JAN 21':c(8,'travelling'),
          'FEB 1':c(8,'approved'), 'FEB 2':c(8,'approved'), 'FEB 3':c(0,'no-hours'),  'FEB 4':c(0,'no-hours'), 'FEB 5':c(8,'acc-holiday'), 'FEB 8':c(8,'approved'), 'FEB 9':c(8,'approved'), 'FEB 10':c(8,'travelling'), 'FEB 11':c(8,'pto-added'),
        }, hours: 40, revenue: 100000, discrepancy: false },
    ],
  },
  {
    id: 2,
    name: 'Client Portal Redesign',
    rows: [
      { id: 4, name: 'Sarah Kim', role: 'Developer', rate: 100, location: 'Remote', assignment: '100%', type: 'Billable', approvedBy: 'Chris Park', days: { 'DEC 1':c(8,'approved'), 'DEC 2':c(8,'draft'), 'DEC 3':c(8,'approved'), 'DEC 8':c(8,'approved'), 'DEC 9':c(0,'no-hours'), 'DEC 10':c(8,'approved'), 'JAN 5':c(8,'approved'), 'JAN 6':c(8,'approved'), 'JAN 7':c(8,'draft'), 'JAN 12':c(8,'approved'), 'JAN 13':c(8,'approved'), 'JAN 14':c(8,'approved'), 'FEB 2':c(8,'approved'), 'FEB 3':c(8,'draft'), 'FEB 4':c(8,'draft'), 'FEB 5':c(8,'approved'), 'FEB 9':c(8,'approved'), 'FEB 10':c(8,'approved'), 'FEB 11':c(8,'approved') }, hours: 88, revenue: 88000, discrepancy: false },
    ],
  },
]

/* ── Reconciliation Data ─────────────────────────────────────────────────── */
const RECON_SOURCE_NAMES = ['SuitProjects Pro', 'Invoice', 'Client CSV', 'Assignment %', 'Variance']

const RECON_PROJECTS = [
  {
    id: 1,
    name: 'Boston Global HCP Web Experience Jan',
    rows: [
      { id: 1, name: 'David Rayan', role: 'UI Designer', rate: 90, location: 'Onsite', type: 'Billable', discrepancy: true,
        sources: {
          'SuitProjects Pro': { rate: '$90',  hours: 168, revenue: 15120, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'nat-holiday'),'FEB 10':c(10,'overtime'),'FEB 11':c(8,'approved') } },
          'Invoice':          { rate: '$90',  hours: 168, revenue: 15120, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'nat-holiday'),'FEB 10':c(10,'overtime'),'FEB 11':c(8,'approved') } },
          'Client CSV':       { rate: '$100', hours: 160, revenue: 16000, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Assignment %':     { rate: null,   hours: null, revenue: null, days: { 'FEB 1':'100%','FEB 2':'100%','FEB 3':'100%','FEB 4':'100%','FEB 5':'100%','FEB 8':'100%','FEB 9':'100%','FEB 10':'100%','FEB 11':'100%' } },
          'Variance':         { rate: '$10',  hours: -8,  revenue: -880,  days: { 'FEB 1':0,'FEB 2':0,'FEB 3':0,'FEB 4':0,'FEB 5':0,'FEB 8':0,'FEB 9':0,'FEB 10':-2,'FEB 11':0 } },
        },
      },
      { id: 2, name: 'Sarah Kim', role: 'Developer', rate: 90, location: 'Remote', type: 'Not Billable', discrepancy: false,
        sources: {
          'SuitProjects Pro': { rate: '$90',  hours: 160, revenue: 14400, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(0,'no-hours'),'FEB 4':c(8,'pto-req'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Invoice':          { rate: '$90',  hours: 168, revenue: 15120, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Client CSV':       { rate: '$90',  hours: 168, revenue: 15120, days: { 'FEB 1':c(8,'approved'),'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 8':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Assignment %':     { rate: null,   hours: null, revenue: null, days: { 'FEB 1':'100%','FEB 2':'100%','FEB 3':'100%','FEB 4':'100%','FEB 5':'100%','FEB 8':'100%','FEB 9':'100%','FEB 10':'100%','FEB 11':'100%' } },
          'Variance':         { rate: null,   hours: 0,   revenue: 0,     days: { 'FEB 1':0,'FEB 2':0,'FEB 3':0,'FEB 4':0,'FEB 5':0,'FEB 8':0,'FEB 9':0,'FEB 10':0,'FEB 11':0 } },
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Client Portal Redesign',
    rows: [
      { id: 3, name: 'Sarah Kim', role: 'Developer', rate: 100, location: 'Remote', type: 'Billable', discrepancy: false,
        sources: {
          'SuitProjects Pro': { rate: '$100', hours: 88, revenue: 8800, days: { 'FEB 2':c(8,'approved'),'FEB 3':c(8,'draft'),'FEB 4':c(8,'draft'),'FEB 5':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Invoice':          { rate: '$100', hours: 88, revenue: 8800, days: { 'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Client CSV':       { rate: '$100', hours: 88, revenue: 8800, days: { 'FEB 2':c(8,'approved'),'FEB 3':c(8,'approved'),'FEB 4':c(8,'approved'),'FEB 5':c(8,'approved'),'FEB 9':c(8,'approved'),'FEB 10':c(8,'approved'),'FEB 11':c(8,'approved') } },
          'Assignment %':     { rate: null,   hours: null, revenue: null, days: { 'FEB 2':'100%','FEB 3':'100%','FEB 4':'100%','FEB 5':'100%','FEB 9':'100%','FEB 10':'100%','FEB 11':'100%' } },
          'Variance':         { rate: null,   hours: 0,   revenue: 0,    days: { 'FEB 2':0,'FEB 3':0,'FEB 4':0,'FEB 5':0,'FEB 9':0,'FEB 10':0,'FEB 11':0 } },
        },
      },
    ],
  },
]

/* ── HR Employees data ───────────────────────────────────────────────────── */
const HR_DISCREPANCY_OPTIONS = [
  'All', 'Mixed Type', 'Missing Booking', 'Overbooking',
  'Break of Service Mismatch', 'Billed Not Assigned', 'Assigned Not Billed',
  'Hours mismatch', 'Break of service',
]

const HR_EMPLOYEES = [
  {
    id: 1, name: 'Sarah Kim', role: 'Developer', location: 'ny', rate: '$100', hours: '168', discrepancy: false, status: null,
    tier: 'T2', projectCode: 'E1', locationLabel: 'New York, US',
    suitProjects: { assignment: '100%', rate: '$100/h', hours: '168 h', locationLabel: 'New York, US', revenue: '$16,800' },
    invoice:      { assignment: '100%', rate: '$100/h', hours: '168 h', locationLabel: 'New York, US', revenue: '$16,800' },
    variance:     { assignment: '—',    rate: '—',      hours: '0 h',   revenue: '$0' },
    workingDays: 21, clientHours: '168 h', estRevenue: '$16,800',
    activity: [
      { color: '#0069b4', text: 'Invoice uploaded by M. Klokov', time: 'Mar 31, 16:42' },
      { color: '#9e9e9e', text: 'SPP timesheets locked for March 2026', time: 'Mar 31, 12:05' },
    ],
    assignees: [
      { initials: 'MK', name: 'Mikhail Klokov', color: '#1a56db' },
      { initials: 'AN', name: 'Anna Nowak', color: '#7e3af2' },
    ],
  },
  {
    id: 2, name: 'David Rayan', role: 'UI Designer', location: 'remote', rate: '$90', hours: '160', discrepancy: true, status: 'Hours mismatch',
    tier: 'T3', projectCode: 'E2', locationLabel: 'Berlin, DE',
    suitProjects: { assignment: '100%', rate: '$90/h',  hours: '160 h', locationLabel: 'Berlin, DE', revenue: '$14,400' },
    invoice:      { assignment: '100%', rate: '$100/h', hours: '168 h', locationLabel: 'Berlin, DE', revenue: '$16,800' },
    variance:     { assignment: '—',    rate: '+$10',   hours: '+8 h',  revenue: '+$2,400' },
    workingDays: 22, clientHours: '168 h', estRevenue: '$14,400',
    activity: [
      { color: '#0069b4', text: 'Invoice uploaded by M. Klokov', time: 'Mar 31, 16:42' },
      { color: '#9e9e9e', text: 'SPP timesheets locked for March 2026', time: 'Mar 31, 12:05' },
      { color: '#DC2626', text: '1 discrepancy flagged on David Rayan', time: 'Mar 31, 16:43' },
    ],
    assignees: [
      { initials: 'MK', name: 'Mikhail Klokov', color: '#1a56db' },
      { initials: 'AN', name: 'Anna Nowak', color: '#7e3af2' },
      { initials: 'TJ', name: 'Tyler Johnson', color: '#057a55' },
      { initials: 'PS', name: 'Paulo Silva', color: '#c81e1e' },
    ],
  },
  {
    id: 3, name: 'Mike Johnson', role: 'Project Manager', location: 'ny', rate: '$80', hours: '168', discrepancy: false, status: null,
    tier: 'T2', projectCode: 'E1', locationLabel: 'New York, US',
    suitProjects: { assignment: '100%', rate: '$80/h',  hours: '168 h', locationLabel: 'New York, US', revenue: '$13,440' },
    invoice:      { assignment: '100%', rate: '$80/h',  hours: '168 h', locationLabel: 'New York, US', revenue: '$13,440' },
    variance:     { assignment: '—',    rate: '—',      hours: '0 h',   revenue: '$0' },
    workingDays: 21, clientHours: '168 h', estRevenue: '$13,440',
    activity: [
      { color: '#0069b4', text: 'Invoice uploaded by M. Klokov', time: 'Mar 31, 16:42' },
      { color: '#9e9e9e', text: 'SPP timesheets locked for March 2026', time: 'Mar 31, 12:05' },
    ],
    assignees: [
      { initials: 'MK', name: 'Mikhail Klokov', color: '#1a56db' },
      { initials: 'TJ', name: 'Tyler Johnson', color: '#057a55' },
    ],
  },
  {
    id: 4, name: 'Priya Nair', role: 'QA Engineer', location: 'remote', rate: '$80', hours: '160', discrepancy: true, status: 'Break of service',
    tier: 'T1', projectCode: 'E3', locationLabel: 'Bangalore, IN',
    suitProjects: { assignment: '80%',  rate: '$80/h',  hours: '160 h', locationLabel: 'Bangalore, IN', revenue: '$12,800' },
    invoice:      { assignment: '100%', rate: '$80/h',  hours: '168 h', locationLabel: 'Bangalore, IN', revenue: '$13,440' },
    variance:     { assignment: '+20%', rate: '—',      hours: '+8 h',  revenue: '+$640' },
    workingDays: 22, clientHours: '168 h', estRevenue: '$12,800',
    activity: [
      { color: '#0069b4', text: 'Invoice uploaded by M. Klokov', time: 'Mar 31, 16:42' },
      { color: '#9e9e9e', text: 'SPP timesheets locked for March 2026', time: 'Mar 31, 12:05' },
      { color: '#DC2626', text: '1 discrepancy flagged on Priya Nair', time: 'Mar 31, 16:43' },
    ],
    assignees: [
      { initials: 'AN', name: 'Anna Nowak', color: '#7e3af2' },
      { initials: 'PS', name: 'Paulo Silva', color: '#c81e1e' },
    ],
  },
]

const STATUS_BADGE_STYLES = {
  'Hours mismatch': { backgroundColor: '#fff7ed', color: '#c2410c', borderColor: '#fed7aa' },
  'Break of service': { backgroundColor: '#fef2f2', color: '#DC2626', borderColor: '#fecaca' },
}

/* ── Employee Avatar ─────────────────────────────────────────────────────── */
function EmployeeAvatar() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#F2F2F2" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#4A4A4A" strokeOpacity="0.1" />
      <path d="M20 13.9C21.16 13.9 22.1 14.84 22.1 16C22.1 17.16 21.16 18.1 20 18.1C18.84 18.1 17.9 17.16 17.9 16C17.9 14.84 18.84 13.9 20 13.9ZM20 22.9C22.97 22.9 26.1 24.36 26.1 25V26.1H13.9V25C13.9 24.36 17.03 22.9 20 22.9ZM20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12ZM20 21C17.33 21 12 22.34 12 25V27C12 27.55 12.45 28 13 28H27C27.55 28 28 27.55 28 27V25C28 22.34 22.67 21 20 21Z" fill="#FF8700" />
    </svg>
  )
}

/* ── Time Breakdown Popup ─────────────────────────────────────────────────── */
function TimeBreakdownPopup({ data, onMouseEnter, onMouseLeave, onClose }) {
  const { row, cell, rect, date } = data
  const { v, t } = cell
  const cs = CELL_STYLES[t] || CELL_STYLES['approved']
  const statusName = CELL_NAMES[t] || t

  const popupWidth = 302
  const left = rect.right + 10 + popupWidth > window.innerWidth
    ? rect.left - popupWidth - 10
    : rect.right + 10
  const top = Math.max(10, Math.min(rect.top - 60, window.innerHeight - 320))

  const initials = row.name.split(' ').map(w => w[0]).join('')
  const approverInitials = row.approvedBy ? row.approvedBy.split(' ').map(w => w[0]).join('') : '?'

  const statusBadge = cs.dashed
    ? <span style={{ padding: '2px 10px', borderRadius: 20, border: `1.5px dashed ${cs.stroke}`, color: cs.color, fontSize: 12, fontWeight: 600 }}>{statusName}</span>
    : <span style={{ padding: '2px 10px', borderRadius: 20, backgroundColor: cs.bg, border: `1px solid ${cs.stroke}`, color: cs.color, fontSize: 12, fontWeight: 600 }}>{statusName}</span>

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{ position: 'fixed', left, top, width: popupWidth, backgroundColor: '#fff', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.15)', zIndex: 1000, padding: '16px' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: '#1a1a1a' }}>Time breakdown</span>
        <button onClick={onClose} style={{ color: '#bbb', background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
      </div>

      {/* Employee */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, borderBottom: '1px solid #e5e7eb', marginBottom: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{initials}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a' }}>{row.name}</div>
          <div style={{ fontSize: 12, color: '#6e6e6e' }}>{row.role}</div>
        </div>
      </div>

      {/* Hours label + date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#9e9e9e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Hours</div>
        {date && <span style={{ fontSize: 11, fontWeight: 600, color: '#6e6e6e', backgroundColor: '#f3f4f6', borderRadius: 4, padding: '2px 6px' }}>{date}</span>}
      </div>

      {/* Hours card */}
      <div style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '10px', textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>{v}h</div>
        <div style={{ fontSize: 12, color: '#6e6e6e', marginTop: 1 }}>{row.type}</div>
      </div>

      {/* Detail rows */}
      {[
        { label: 'Location', content: <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{row.location}</span> },
        { label: 'Status',   content: statusBadge },
        { label: 'Rate',     content: <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>${row.rate}/hr</span> },
        ...(row.approvedBy ? [{ label: 'Approved by', content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 10 }}>{approverInitials}</div>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{row.approvedBy}</span>
          </div>
        )}] : []),
      ].map(({ label, content }, idx, arr) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: idx < arr.length - 1 ? 8 : 0, marginBottom: idx < arr.length - 1 ? 8 : 0, borderBottom: idx < arr.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
          <span style={{ fontSize: 12, color: '#9e9e9e' }}>{label}</span>
          {content}
        </div>
      ))}
    </div>
  )
}

/* ── Day Cell ─────────────────────────────────────────────────────────────── */
function DayCell({ cell, row, date, onEnter, onLeave }) {
  const handleMouseEnter = (e) => {
    if (cell && onEnter) onEnter(row, cell, e.currentTarget.getBoundingClientRect(), date)
  }

  if (!cell) {
    const s = CELL_STYLES['weekend']
    return (
      <td style={{ textAlign: 'center', padding: '0 4px' }}>
        <div style={{ width: 40, height: 40, borderRadius: 7, backgroundColor: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, fontSize: 13, margin: '0 auto' }}>—</div>
      </td>
    )
  }

  const { v, t } = cell
  const s = CELL_STYLES[t] || CELL_STYLES['approved']
  const displayText = s.label !== undefined ? s.label : String(v)
  const fontSize = displayText.length >= 3 ? 9 : 13
  const border = s.dashed
    ? `1.5px dashed ${s.stroke}`
    : s.stroke ? `1.5px solid ${s.stroke}` : 'none'

  return (
    <td style={{ textAlign: 'center', padding: '0 4px' }} onMouseEnter={handleMouseEnter} onMouseLeave={onLeave}>
      <div style={{ width: 40, height: 40, borderRadius: 7, backgroundColor: s.bg, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: s.color, fontSize, margin: '0 auto', cursor: 'pointer', position: 'relative' }}>
        {displayText}
        {s.dot && <span style={{ position: 'absolute', top: 4, right: 4, width: 5, height: 5, borderRadius: '50%', backgroundColor: s.color }} />}
      </div>
    </td>
  )
}

/* sticky column helpers */
const stickyL = (left, bg = '#fff') => ({ position: 'sticky', left, background: bg, zIndex: 2 })
const stickyR = (right, bg = '#fff') => ({ position: 'sticky', right, background: bg, zIndex: 2 })
const hdrBg = '#f9fafb'

/* ── Project Group ───────────────────────────────────────────────────────── */
function ProjectGroup({ project, dayCols, onCellEnter, onCellLeave }) {
  const [expanded, setExpanded] = useState(true)
  const bc = '#dee2e6'
  const hdrBorder = '#e0e0e0'
  return (
    <div style={{ border: `1px solid #d9dade`, borderRadius: 6, marginBottom: 12, overflow: 'hidden', backgroundColor: '#fff' }}>
      <div
        className="flex items-center justify-between cursor-pointer select-none hover:bg-gray-50 transition-colors"
        style={{ padding: '16px 24px', borderBottom: expanded ? `1px solid #d9dade` : 'none' }}
        onClick={() => setExpanded(e => !e)}
      >
        <span className="text-sm font-semibold" style={{ color: '#4a4a4a' }}>{project.name}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {expanded && (
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ borderCollapse: 'collapse', fontSize: 13, width: 'max-content', minWidth: '100%' }}>
            <colgroup>
              <col style={{ width: 190 }} />
              <col style={{ width: 62  }} />
              <col style={{ width: 90  }} />
              <col style={{ width: 90  }} />
              {dayCols.map(d => <col key={d} style={{ width: 56 }} />)}
              <col style={{ width: 68  }} />
              <col style={{ width: 100 }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: hdrBg, borderBottom: `1px solid ${hdrBorder}` }}>
                <th style={{ ...stickyL(0, hdrBg), textAlign:'left',  padding:'8px 12px', fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em' }}>Assignee</th>
                <th style={{ ...stickyL(190,hdrBg), textAlign:'left',  padding:'8px 6px',  fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em' }}>Rate</th>
                <th style={{ ...stickyL(252,hdrBg), textAlign:'left',  padding:'8px 6px',  fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em' }}>Inv.</th>
                <th style={{ ...stickyL(342,hdrBg), textAlign:'left',  padding:'8px 6px',  fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em', borderRight:`1px solid ${hdrBorder}` }}>Assignment</th>
                {dayCols.map(d => (
                  <th key={d} style={{ textAlign:'center', padding:'8px 2px', fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.04em', whiteSpace:'nowrap', minWidth:56 }}>{d}</th>
                ))}
                <th style={{ ...stickyR(100,hdrBg), textAlign:'right', padding:'8px 12px', fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em', borderLeft:`1px solid ${hdrBorder}` }}>Hours</th>
                <th style={{ ...stickyR(0,  hdrBg), textAlign:'right', padding:'8px 12px', fontWeight:600, color:'#6e6e6e', fontSize:11, textTransform:'uppercase', letterSpacing:'0.05em' }}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {project.rows.map((row, i) => {
                const rowBg = row.discrepancy ? '#fdeded' : '#fff'
                return (
                  <tr key={row.id} style={{ borderBottom: i < project.rows.length-1 ? `1px solid ${bc}` : 'none', backgroundColor: rowBg, borderLeft: row.discrepancy ? '4px solid #DC2626' : '4px solid transparent' }}>
                    <td style={{ ...stickyL(0, rowBg), padding:'10px 12px' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                        <EmployeeAvatar />
                        <div>
                          <div style={{ fontWeight:600, color:'#4a4a4a', fontSize:13 }}>{row.name}</div>
                          <div style={{ color:'#6e6e6e', fontSize:12 }}>{row.role}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ ...stickyL(190, rowBg), padding:'10px 6px', color:'#4a4a4a' }}>${row.rate}</td>
                    <td style={{ ...stickyL(252, rowBg), padding:'10px 6px' }}>
                      {(() => {
                        const typeStyles = {
                          'Billable':     { bg:'#EBF5FF', stroke:'#93c5fd', color:'#1D63B1' },
                          'Not Billable': { bg:'#F3F4F6', stroke:'#9CA3AF', color:'#6B7280' },
                          'Overtime':     { bg:'#FEF3C7', stroke:'#F59E0B', color:'#92400E' },
                        }
                        const ts = typeStyles[row.type] || typeStyles['Billable']
                        return <span style={{ display:'inline-flex', alignItems:'center', padding:'4px 8px', borderRadius:3, border:`1px solid ${ts.stroke}`, backgroundColor:ts.bg, color:ts.color, fontSize:12, fontWeight:700, whiteSpace:'nowrap' }}>{row.type}</span>
                      })()}
                    </td>
                    <td style={{ ...stickyL(342, rowBg), padding:'10px 6px', color:'#4a4a4a', borderRight:`1px solid ${bc}` }}>{row.assignment}</td>
                    {padDays(row.days, dayCols, row.id).map((d, di) => <DayCell key={di} cell={d} row={row} date={dayCols[di]} onEnter={onCellEnter} onLeave={onCellLeave} />)}
                    <td style={{ ...stickyR(100, rowBg), padding:'10px 12px', textAlign:'right', fontWeight:600, color:'#4a4a4a', borderLeft:`1px solid ${bc}` }}>{row.hours} h</td>
                    <td style={{ ...stickyR(0,   rowBg), padding:'10px 12px', textAlign:'right', fontWeight:600, color:'#4a4a4a' }}>${row.revenue.toLocaleString()}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

/* ── Reconciliation Project Group ────────────────────────────────────────── */
const RECON_COL = { assignee: 178, source: 158, rate: 76, day: 80, hours: 60, revenue: 100 }

function ReconciliationProjectGroup({ project, dayCols, onCellEnter, onCellLeave }) {
  const [expanded, setExpanded] = useState(true)
  const [hoveredKey, setHoveredKey] = useState(null)
  const bc = '#e0e0e0'
  const N = RECON_SOURCE_NAMES.length
  const { assignee: AW, source: SW, rate: RW, day: DW, hours: HW, revenue: VW } = RECON_COL

  return (
    <div style={{ border: '1px solid #d9dade', borderRadius: 6, marginBottom: 12, overflow: 'hidden', backgroundColor: '#fff' }}>
      <div
        className="flex items-center justify-between cursor-pointer select-none hover:bg-gray-50 transition-colors"
        style={{ padding: '16px 24px', borderBottom: expanded ? '1px solid #d9dade' : 'none' }}
        onClick={() => setExpanded(e => !e)}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#4a4a4a' }}>{project.name}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {expanded && (
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ borderCollapse: 'collapse', fontSize: 13, width: 'max-content', minWidth: '100%' }}>
            <colgroup>
              <col style={{ width: AW }} />
              <col style={{ width: SW }} />
              <col style={{ width: RW }} />
              {dayCols.map(d => <col key={d} style={{ width: DW }} />)}
              <col style={{ width: HW }} />
              <col style={{ width: VW }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: '#fff', borderBottom: `1px solid ${bc}` }}>
                <th style={{ ...stickyL(0,       '#fff'), textAlign: 'left',  padding: '0 8px 0 24px', height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13 }}>Assignee</th>
                <th style={{ ...stickyL(AW,      '#fff'), textAlign: 'left',  padding: '0 8px',         height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13 }}>Source</th>
                <th style={{ ...stickyL(AW+SW,   '#fff'), textAlign: 'left',  padding: '0 8px',         height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13, borderRight: `1px solid ${bc}` }}>Rate</th>
                {dayCols.map(d => (
                  <th key={d} style={{ textAlign: 'center', padding: '0 8px', height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13, whiteSpace: 'nowrap', minWidth: DW }}>{d}</th>
                ))}
                <th style={{ ...stickyR(VW, '#fff'), textAlign: 'right', padding: '0 12px', height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13, borderLeft: `1px solid ${bc}` }}>Hours</th>
                <th style={{ ...stickyR(0,  '#fff'), textAlign: 'right', padding: '0 12px', height: 36, fontWeight: 600, color: '#4a4a4a', fontSize: 13 }}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {project.rows.map((row, rowIdx) => {
                const assigneeBg = row.discrepancy ? '#fdeded' : '#fff'
                const isLastRow = rowIdx === project.rows.length - 1
                return RECON_SOURCE_NAMES.map((srcName, srcIdx) => {
                  const source = row.sources[srcName]
                  const isFirst = srcIdx === 0
                  const isLast  = srcIdx === N - 1
                  const rowKey  = `${row.id}-${srcName}`
                  const isHov   = hoveredKey === rowKey
                  const isVar   = srcName === 'Variance'
                  const isAssign = srcName === 'Assignment %'
                  const srcBgBase = isVar ? '#fffbeb' : isAssign ? '#f9fafb' : '#fff'
                  const srcBg   = isHov ? (isVar ? '#fff3cd' : isAssign ? '#f0f2f5' : '#f5f7fa') : srcBgBase
                  const trBorder = isLast ? (!isLastRow ? `1px solid ${bc}` : 'none') : '1px solid #f0f0f0'

                  return (
                    <tr
                      key={rowKey}
                      style={{ borderBottom: trBorder, backgroundColor: srcBg }}
                      onMouseEnter={() => setHoveredKey(rowKey)}
                      onMouseLeave={() => setHoveredKey(null)}
                    >
                      {isFirst && (
                        <td rowSpan={N} style={{ ...stickyL(0, assigneeBg), padding: '22px 8px 0 14px', borderLeft: row.discrepancy ? '4px solid #DC2626' : '4px solid transparent', borderRight: `1px solid ${bc}`, verticalAlign: 'top' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <EmployeeAvatar />
                            <div>
                              <div style={{ fontWeight: 600, color: '#4a4a4a', fontSize: 13 }}>{row.name}</div>
                              <div style={{ color: '#6e6e6e', fontSize: 12 }}>{row.role}</div>
                            </div>
                          </div>
                        </td>
                      )}
                      <td style={{ ...stickyL(AW, srcBg), padding: '12px 8px', borderRight: '1px solid #ebebeb' }}>
                        <span style={{ fontSize: 12, color: isVar ? '#92400e' : isAssign ? '#9e9e9e' : '#4a4a4a', fontWeight: isVar ? 600 : 400 }}>{srcName}</span>
                      </td>
                      <td style={{ ...stickyL(AW+SW, srcBg), padding: '12px 8px', color: '#4a4a4a', fontSize: 13, borderRight: `1px solid ${bc}` }}>
                        {source.rate || '—'}
                      </td>
                      {dayCols.map((label, colIdx) => {
                        const dow = colIdx % 7
                        if (dow === 5 || dow === 6) {
                          const s = CELL_STYLES['weekend']
                          return (
                            <td key={label} style={{ textAlign: 'center', padding: '12px 4px' }}>
                              <div style={{ width: 40, height: 40, borderRadius: 7, backgroundColor: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, fontSize: 13, margin: '0 auto' }}>—</div>
                            </td>
                          )
                        }
                        const val = source.days[label]
                        if (isAssign) {
                          return (
                            <td key={label} style={{ textAlign: 'center', padding: '12px 4px' }}>
                              <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#4a4a4a', margin: '0 auto' }}>{val !== undefined ? val : '—'}</div>
                            </td>
                          )
                        }
                        if (isVar) {
                          const v = val !== undefined ? val : null
                          const col = v === null ? '#9e9e9e' : v < 0 ? '#DC2626' : v > 0 ? '#16a34a' : '#9e9e9e'
                          return (
                            <td key={label} style={{ textAlign: 'center', padding: '12px 4px' }}>
                              <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: v ? 600 : 400, color: col, margin: '0 auto' }}>
                                {v !== null ? (v > 0 ? `+${v}` : v < 0 ? v : '0') : '—'}
                              </div>
                            </td>
                          )
                        }
                        if (val === undefined) return <td key={label} style={{ textAlign: 'center', padding: '12px 4px' }}><div style={{ width: 40, height: 40, margin: '0 auto' }} /></td>
                        return <DayCell key={label} cell={val} row={row} date={label} onEnter={onCellEnter} onLeave={onCellLeave} />
                      })}
                      <td style={{ ...stickyR(VW, srcBg), padding: '12px', textAlign: 'right', fontWeight: 600, borderLeft: `1px solid ${bc}`,
                        color: isVar && source.hours !== null ? (source.hours < 0 ? '#DC2626' : source.hours > 0 ? '#16a34a' : '#9e9e9e') : '#4a4a4a' }}>
                        {source.hours !== null ? (isVar ? (source.hours > 0 ? `+${source.hours} h` : `${source.hours} h`) : `${source.hours} h`) : '—'}
                      </td>
                      <td style={{ ...stickyR(0, srcBg), padding: '12px', textAlign: 'right', fontWeight: 600,
                        color: isVar && source.revenue !== null ? (source.revenue < 0 ? '#DC2626' : source.revenue > 0 ? '#16a34a' : '#9e9e9e') : '#4a4a4a' }}>
                        {source.revenue !== null
                          ? (isVar
                            ? (source.revenue > 0 ? `+$${source.revenue.toLocaleString()}` : `-$${Math.abs(source.revenue).toLocaleString()}`)
                            : `$${source.revenue.toLocaleString()}`)
                          : '—'}
                      </td>
                    </tr>
                  )
                })
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const PROJECT_OPTIONS = ['Boston Global HCP Web Experience Jan', 'Client Portal Redesign']

/* ── Project Multi-Select ────────────────────────────────────────────────── */
function ProjectMultiSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(value)
  const [search, setSearch] = useState('')

  function openDropdown() { setPending(value); setOpen(true) }
  function close() { setOpen(false); setSearch('') }
  function apply() { onChange(pending); close() }
  function clearAll() { setPending([]) }
  function toggle(name) { setPending(p => p.includes(name) ? p.filter(v => v !== name) : [...p, name]) }

  const filtered = PROJECT_OPTIONS.filter(n => n.toLowerCase().includes(search.toLowerCase()))
  const hasSelection = value.length > 0
  const displayText = value.length === 0 ? 'All Projects' : value.length === 1 ? value[0] : `${value.length} Projects`

  return (
    <Popover open={open} onOpenChange={v => { if (v) openDropdown(); else close() }}>
      <PopoverTrigger
        style={{ width: 270, height: 40, borderRadius: 6, border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 12px', fontSize: 14, color: '#4a4a4a', cursor: 'pointer', outline: 'none', gap: 4 }}
      >
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayText}</span>
        {hasSelection
          ? <span role="button" onClick={e => { e.stopPropagation(); onChange([]); close() }} style={{ display: 'flex', alignItems: 'center', color: '#6b7280', cursor: 'pointer', flexShrink: 0 }}><XIcon size={14} /></span>
          : <ChevronDownIcon size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        }
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" sideOffset={4} style={{ width: 270, padding: '0', borderRadius: 6 }}>
        <div style={{ padding: '8px 10px 4px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#9e9e9e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Select Projects</div>
          <input autoFocus value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects…" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 4, padding: '5px 8px', fontSize: 13, outline: 'none', color: '#4a4a4a' }} />
        </div>
        <div style={{ maxHeight: 200, overflowY: 'auto' }}>
          {filtered.length === 0
            ? <div style={{ padding: '8px 12px', color: '#9e9e9e', fontSize: 13 }}>No results</div>
            : filtered.map(name => (
              <label key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', cursor: 'pointer', fontSize: 14, color: '#4a4a4a' }} className="hover:bg-accent">
                <Checkbox checked={pending.includes(name)} onCheckedChange={() => toggle(name)} />
                {name}
              </label>
            ))
          }
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderTop: '1px solid #f0f0f0' }}>
          <button onClick={clearAll} style={{ fontSize: 13, color: '#0069b4', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear All</button>
          <button onClick={apply} style={{ fontSize: 13, fontWeight: 600, color: '#fff', backgroundColor: '#0069b4', border: 'none', borderRadius: 4, padding: '5px 14px', cursor: 'pointer' }}>Apply</button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/* ── Rate Range Filter ───────────────────────────────────────────────────── */
function RateRangeFilter({ min, max, onApply }) {
  const [open, setOpen] = useState(false)
  const [pendingMin, setPendingMin] = useState(min)
  const [pendingMax, setPendingMax] = useState(max)

  function openDropdown() { setPendingMin(min); setPendingMax(max); setOpen(true) }
  function apply() { onApply(pendingMin, pendingMax); setOpen(false) }

  const hasFilter = min !== '' || max !== ''
  const displayText = !hasFilter ? 'All' : min !== '' && max !== '' ? `$${min} – $${max}` : min !== '' ? `From $${min}` : `Up to $${max}`

  return (
    <Popover open={open} onOpenChange={v => { if (v) openDropdown(); else setOpen(false) }}>
      <PopoverTrigger
        style={{ width: 130, height: 40, borderRadius: 6, border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 12px', fontSize: 14, color: '#4a4a4a', cursor: 'pointer', outline: 'none', gap: 4 }}
      >
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayText}</span>
        {hasFilter
          ? <span role="button" onClick={e => { e.stopPropagation(); onApply('', ''); setOpen(false) }} style={{ display: 'flex', alignItems: 'center', color: '#6b7280', cursor: 'pointer', flexShrink: 0 }}><XIcon size={14} /></span>
          : <ChevronDownIcon size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        }
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" sideOffset={4} style={{ width: 220, padding: '10px 12px', borderRadius: 6 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#9e9e9e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Rate Range ($/hr)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: '#9e9e9e', marginBottom: 3 }}>Min</div>
            <input type="number" min="0" value={pendingMin} onChange={e => setPendingMin(e.target.value)} placeholder="0" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 4, padding: '5px 8px', fontSize: 13, outline: 'none', color: '#4a4a4a' }} />
          </div>
          <span style={{ color: '#9e9e9e', marginTop: 16 }}>–</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: '#9e9e9e', marginBottom: 3 }}>Max</div>
            <input type="number" min="0" value={pendingMax} onChange={e => setPendingMax(e.target.value)} placeholder="∞" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 4, padding: '5px 8px', fontSize: 13, outline: 'none', color: '#4a4a4a' }} />
          </div>
        </div>
        <button onClick={apply} style={{ width: '100%', fontSize: 13, fontWeight: 600, color: '#fff', backgroundColor: '#0069b4', border: 'none', borderRadius: 4, padding: '6px 0', cursor: 'pointer' }}>Apply</button>
      </PopoverContent>
    </Popover>
  )
}

const DISCREPANCY_OPTIONS = [
  'All', 'Mixed Type', 'Missing Booking', 'Overbooking',
  'Break of Service Mismatch', 'Billed Not Assigned', 'Assigned Not Billed',
]

/* ── Searchable Select (single-value, with text search) ─────────────────── */
function SearchableSelect({ value, onChange, options, placeholder = 'Search...', width = 270 }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const filtered = options.filter(o => o.toLowerCase().includes(search.toLowerCase()))
  return (
    <Popover open={open} onOpenChange={v => { setOpen(v); if (!v) setSearch('') }}>
      <PopoverTrigger
        style={{ width, height: 40, borderRadius: 6, border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 12px', fontSize: 14, color: '#4a4a4a', cursor: 'pointer', outline: 'none', gap: 4 }}
      >
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
        <ChevronDownIcon size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" sideOffset={4} style={{ width, padding: '4px 0', borderRadius: 6 }}>
        <div style={{ padding: '6px 8px', borderBottom: '1px solid #f0f0f0' }}>
          <input
            autoFocus
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={placeholder}
            style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 4, padding: '5px 8px', fontSize: 13, outline: 'none', color: '#4a4a4a' }}
          />
        </div>
        <div style={{ maxHeight: 220, overflowY: 'auto' }}>
          {filtered.length === 0
            ? <div style={{ padding: '8px 12px', color: '#9e9e9e', fontSize: 13 }}>No results</div>
            : filtered.map(opt => (
              <div
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); setSearch('') }}
                style={{ padding: '7px 12px', cursor: 'pointer', fontSize: 14, color: opt === value ? '#0069b4' : '#4a4a4a', fontWeight: opt === value ? 600 : 400 }}
                className="hover:bg-accent"
              >{opt}</div>
            ))
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

/* ── Employee Multi-Select ───────────────────────────────────────────────── */
const EMPLOYEE_OPTIONS = ['David Rayan', 'Sarah Kim', 'Mike Johnson', 'Priya Nair']

function EmployeeMultiSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(value)
  const [search, setSearch] = useState('')

  function openDropdown() { setPending(value); setOpen(true) }
  function close() { setOpen(false); setSearch('') }
  function apply() { onChange(pending); close() }
  function clearAll() { setPending([]) }
  function toggle(name) { setPending(p => p.includes(name) ? p.filter(v => v !== name) : [...p, name]) }

  const filtered = EMPLOYEE_OPTIONS.filter(n => n.toLowerCase().includes(search.toLowerCase()))
  const hasSelection = value.length > 0
  const displayText = value.length === 0 ? 'All Employees' : value.length === 1 ? value[0] : `${value.length} Employees`

  return (
    <Popover open={open} onOpenChange={v => { if (v) openDropdown(); else close() }}>
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', width: 160 }}>
        <PopoverTrigger
          style={{ width: '100%', height: 40, borderRadius: 6, border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 12px', fontSize: 14, color: '#4a4a4a', cursor: 'pointer', outline: 'none', gap: 4 }}
        >
          <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayText}</span>
          {hasSelection
            ? <span role="button" onClick={e => { e.stopPropagation(); onChange([]); close() }} style={{ display: 'flex', alignItems: 'center', color: '#6b7280', cursor: 'pointer', flexShrink: 0 }}><XIcon size={14} /></span>
            : <ChevronDownIcon size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          }
        </PopoverTrigger>
      </div>
      <PopoverContent side="bottom" align="start" sideOffset={4} style={{ width: 220, padding: '0', borderRadius: 6 }}>
        <div style={{ padding: '8px 10px 4px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#9e9e9e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Employee Name</div>
          <input autoFocus value={search} onChange={e => setSearch(e.target.value)} placeholder="Search employees…" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 4, padding: '5px 8px', fontSize: 13, outline: 'none', color: '#4a4a4a' }} />
        </div>
        <div style={{ maxHeight: 200, overflowY: 'auto' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', cursor: 'pointer', fontSize: 14, color: '#4a4a4a' }} className="hover:bg-accent">
            <Checkbox checked={pending.length === 0} onCheckedChange={() => clearAll()} />
            All Employees
          </label>
          {filtered.length === 0
            ? <div style={{ padding: '8px 12px', color: '#9e9e9e', fontSize: 13 }}>No results</div>
            : filtered.map(name => (
              <label key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', cursor: 'pointer', fontSize: 14, color: '#4a4a4a' }} className="hover:bg-accent">
                <Checkbox checked={pending.includes(name)} onCheckedChange={() => toggle(name)} />
                {name}
              </label>
            ))
          }
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderTop: '1px solid #f0f0f0' }}>
          <button onClick={clearAll} style={{ fontSize: 13, color: '#0069b4', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear All</button>
          <button onClick={apply} style={{ fontSize: 13, fontWeight: 600, color: '#fff', backgroundColor: '#0069b4', border: 'none', borderRadius: 4, padding: '5px 14px', cursor: 'pointer' }}>Apply</button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/* ── Period Select ───────────────────────────────────────────────────────── */
const PERIOD_GROUPS = [
  ['Month to Date', 'Last 30 Days', 'Last 7 Days'],
  ['Current Month', 'Previous Month'],
  ['Current Quarter', 'Previous Quarter'],
  ['Year to Date'],
  ['Custom Period…'],
]

function PeriodSelect({ value, onChange, customStart, customEnd, onCustomRange }) {
  const [open, setOpen] = useState(false)
  const [calYear, setCalYear]   = useState(2026)
  const [calMonth, setCalMonth] = useState(1)
  const [pendingStart, setPendingStart] = useState(customStart || null)
  const [pendingEnd,   setPendingEnd]   = useState(customEnd   || null)
  const [phase, setPhase] = useState('start')

  const isCustom   = value === 'Custom Period…'
  const displayVal = value === 'Custom Period…' ? 'Custom Period' : value

  function handleSelect(p) {
    onChange(p)
    if (p !== 'Custom Period…') setOpen(false)
  }

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
  }

  function handleDayClick(date) {
    if (phase === 'start' || !pendingStart) {
      setPendingStart(date); setPendingEnd(null); setPhase('end')
    } else {
      let s = pendingStart, e = date
      if (e < s) { s = date; e = pendingStart }
      setPendingEnd(e); setPhase('start')
      onCustomRange(s, e)
    }
  }

  function clearDates() {
    setPendingStart(null); setPendingEnd(null); setPhase('start'); onCustomRange(null, null)
  }
  function goToday() {
    const t = new Date(); setCalYear(t.getFullYear()); setCalMonth(t.getMonth())
  }

  const isSel = d => d && ((pendingStart && pendingStart.getTime() === d.getTime()) || (pendingEnd && pendingEnd.getTime() === d.getTime()))
  const inRange = d => d && pendingStart && pendingEnd && d > pendingStart && d < pendingEnd

  const cells = getCalGrid(calYear, calMonth)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        style={{ width: 180, height: 40, borderRadius: 6, border: open ? '1.5px solid var(--color-primary)' : '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px 0 12px', fontSize: 14, color: '#4a4a4a', cursor: 'pointer', outline: 'none', gap: 4 }}
      >
        <span style={{ flex: 1, textAlign: 'left' }}>{displayVal}</span>
        <ChevronDownIcon size={16} style={{ color: 'var(--color-primary)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s', flexShrink: 0 }} />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" sideOffset={4} style={{ width: 240, padding: 0, borderRadius: 8 }}>
        {/* Option groups */}
        <div style={{ padding: '4px 0' }}>
          {PERIOD_GROUPS.map((group, gi) => (
            <div key={gi}>
              {gi > 0 && <div style={{ height: 1, backgroundColor: '#f0f0f0', margin: '4px 0' }} />}
              {group.map(p => (
                <div
                  key={p}
                  onClick={() => handleSelect(p)}
                  style={{ padding: '8px 14px', cursor: 'pointer', fontSize: 14, color: value === p ? 'var(--color-primary)' : '#4a4a4a', fontWeight: value === p ? 600 : 400, backgroundColor: value === p ? '#eef4ff' : 'transparent' }}
                  className={value !== p ? 'hover:bg-accent' : ''}
                >
                  {p === 'Custom Period…' ? 'Custom Period' : p}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Custom date range section */}
        {isCustom && (
          <div style={{ borderTop: '1px solid #e2e8f0', padding: '10px 12px 12px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#9e9e9e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Date Range</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: 4, padding: '6px 8px', fontSize: 12, color: pendingStart ? '#4a4a4a' : '#bbb' }}>
                {pendingStart ? formatDateDMY(pendingStart) : 'dd.mm.yyyy'}
              </div>
              <span style={{ color: '#9e9e9e' }}>→</span>
              <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: 4, padding: '6px 8px', fontSize: 12, color: pendingEnd ? '#4a4a4a' : '#bbb' }}>
                {pendingEnd ? formatDateDMY(pendingEnd) : 'dd.mm.yyyy'}
              </div>
            </div>

            {/* Calendar header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#4a4a4a' }}>{MONTH_NAMES[calMonth]} {calYear}</span>
              <div style={{ display: 'flex', gap: 2 }}>
                <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6e6e6e', padding: '2px 5px', fontSize: 14, lineHeight: 1 }}>↑</button>
                <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6e6e6e', padding: '2px 5px', fontSize: 14, lineHeight: 1 }}>↓</button>
              </div>
            </div>

            {/* Day-of-week headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: 2 }}>
              {['M','T','W','T','F','S','S'].map((d, i) => (
                <div key={i} style={{ fontSize: 11, fontWeight: 600, color: '#9e9e9e', padding: '2px 0' }}>{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
              {cells.map((cell, i) => {
                const sel = isSel(cell.date)
                const inR = inRange(cell.date)
                return (
                  <div
                    key={i}
                    onClick={() => cell.inMonth && handleDayClick(cell.date)}
                    style={{
                      padding: '4px 0',
                      fontSize: 12,
                      borderRadius: 4,
                      color: !cell.inMonth ? '#ccc' : sel ? '#fff' : '#4a4a4a',
                      backgroundColor: sel ? 'var(--color-primary)' : inR ? '#dbeafe' : 'transparent',
                      cursor: cell.inMonth ? 'pointer' : 'default',
                      fontWeight: sel ? 600 : 400,
                    }}
                    className={cell.inMonth && !sel ? 'hover:bg-accent' : ''}
                  >
                    {cell.d}
                  </div>
                )
              })}
            </div>

            {/* Clear / Today */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <button onClick={clearDates} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: 13 }}>Clear</button>
              <button onClick={goToday}    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: 13 }}>Today</button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

/* ── Report Page (shared by Time Reports & Reconciliation) ───────────────── */
function ReportPage({ title }) {
  const [popup, setPopup]                 = useState(null)
  const hideTimerRef                      = useRef(null)

  const handleCellEnter = (row, cell, rect, date) => {
    clearTimeout(hideTimerRef.current)
    setPopup({ row, cell, rect, date })
  }
  const handleCellLeave = () => { hideTimerRef.current = setTimeout(() => setPopup(null), 120) }
  const handlePopupEnter = () => clearTimeout(hideTimerRef.current)
  const handlePopupLeave = () => { hideTimerRef.current = setTimeout(() => setPopup(null), 120) }

  const [account, setAccount]               = useState("Macy's")
  const [selectedProjects, setSelectedProjects] = useState([])
  const [period, setPeriod]                 = useState('Current Month')
  const [customStart, setCustomStart]       = useState(null)
  const [customEnd,   setCustomEnd]         = useState(null)
  const [discrepancy, setDiscrepancy]       = useState('All')
  const [filterEmployee, setFilterEmployee] = useState([])
  const [filterRateMin, setFilterRateMin]   = useState('')
  const [filterRateMax, setFilterRateMax]   = useState('')
  const [filterTimeType, setFilterTimeType] = useState('All')
  const [legendOpen, setLegendOpen]         = useState(false)

  const clearFilters = () => {
    setFilterEmployee([])
    setFilterRateMin('')
    setFilterRateMax('')
    setFilterTimeType('All')
  }

  const dayCols = getDayCols(period, customStart, customEnd)
  const ttFilter = parseTimeType(filterTimeType)

  const filteredProjects = PROJECTS
    .filter(p => selectedProjects.length === 0 || selectedProjects.includes(p.name))
    .map(p => ({
      ...p,
      rows: p.rows.filter(row => {
        if (filterEmployee.length > 0 && !filterEmployee.includes(row.name)) return false
        if (filterRateMin !== '' && row.rate < Number(filterRateMin)) return false
        if (filterRateMax !== '' && row.rate > Number(filterRateMax)) return false
        if (ttFilter && row.location !== ttFilter.location) return false
        if (ttFilter && row.type !== ttFilter.classification) return false
        return true
      })
    }))
    .filter(p => p.rows.length > 0)

  return (
    <>
      {/* ── Scope Selection ── */}
      <div className="bg-white border-b border-border" style={{ padding: '16px 24px' }}>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#4a4a4a' }}>{title}</h1>
        <div className="flex items-end gap-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: '#6e6e6e' }}>Account</label>
            <SearchableSelect value={account} onChange={setAccount} options={["Macy's", 'Nike Inc.', 'TechCorp', 'Retail Group', 'FinServ Ltd.']} placeholder="Search accounts..." width={270} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: '#6e6e6e' }}>Projects</label>
            <ProjectMultiSelect value={selectedProjects} onChange={setSelectedProjects} />
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ backgroundColor: '#f9fafb', padding: '16px 24px', borderBottom: '1px solid #dee2e6' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <p className="text-sm" style={{ color: '#6e6e6e' }}>
            {`Selected Period: ${period === 'Custom Period…' && customStart && customEnd ? `Custom Period (${formatDateDMY(customStart)} – ${formatDateDMY(customEnd)})` : (PERIOD_RANGES[period] || period)}`}
          </p>
          <Button variant="outline" className="h-10 px-5 font-semibold text-sm" style={{ color: '#0069b4', borderColor: '#0069b4', borderRadius: 0 }}>
            Download results
          </Button>
        </div>
        <div className="flex" style={{ gap: '32px' }}>
          <StatCard label="Total Revenue" value="$542,310.00" sub="Estimated revenue is shown for reference only." wide />
          <StatCard label="Billable Time" value="5,693 h" sub="21 employees / 21" />
          <StatCard label="Offshore Overtime" value="69 h" />
          <StatCard label="Offshore Time" value="4,592 h" />
          <StatCard label="Onsite Time" value="1,032 h" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <main style={{ padding: '24px' }}>

        {/* Filters */}
        <div className="flex items-end gap-4 flex-wrap" style={{ marginBottom: 12 }}>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Period</label>
            <PeriodSelect value={period} onChange={setPeriod} customStart={customStart} customEnd={customEnd} onCustomRange={(s, e) => { setCustomStart(s); setCustomEnd(e) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Discrepancy</label>
            <Select value={discrepancy} onValueChange={setDiscrepancy}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: '200px', height: '40px', borderRadius: '6px', fontSize: '14px', color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {DISCREPANCY_OPTIONS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Employee name</label>
            <EmployeeMultiSelect value={filterEmployee} onChange={setFilterEmployee} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Rate</label>
            <RateRangeFilter min={filterRateMin} max={filterRateMax} onApply={(min, max) => { setFilterRateMin(min); setFilterRateMax(max) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Time Type</label>
            <Select value={filterTimeType} onValueChange={setFilterTimeType}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: '180px', height: '40px', borderRadius: '6px', fontSize: '14px', color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {TIME_TYPE_OPTIONS.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <button onClick={clearFilters} className="hover:opacity-70 transition-opacity" style={{ fontSize: '14px', fontWeight: 400, color: '#9e9e9e', height: '40px', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            Clear all
          </button>
        </div>

        {/* Legend */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 12, overflow: 'hidden' }}>
          <div
            className="flex items-center justify-between cursor-pointer select-none hover:bg-gray-50 transition-colors"
            style={{ padding: '12px 16px' }}
            onClick={() => setLegendOpen(o => !o)}
          >
            <span className="text-sm font-medium" style={{ color: '#4a4a4a' }}>Cell State Legend</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: legendOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {legendOpen && (
            <div style={{ padding: '10px 16px', borderTop: '1px solid #e0e0e0', overflowX: 'auto' }}>
              <div className="flex items-center flex-wrap gap-x-5 gap-y-2" style={{ fontSize: 11, color: '#6e6e6e', whiteSpace: 'nowrap' }}>
                {[
                  { t: 'approved', v: 8 }, { t: 'overtime', v: 10 }, { t: 'weekend', v: null },
                  { t: 'pto-req', v: null }, { t: 'nat-holiday', v: null }, { t: 'acc-holiday', v: null }, { t: 'no-hours', v: null },
                ].map(({ t, v }) => {
                  const s = CELL_STYLES[t]
                  const display = s.label !== undefined ? s.label : String(v)
                  const border = s.dashed ? `1.5px dashed ${s.stroke}` : s.stroke ? `1.5px solid ${s.stroke}` : 'none'
                  return (
                    <div key={t} className="flex items-center gap-1.5">
                      <div style={{ width: 24, height: 24, borderRadius: 5, backgroundColor: s.bg, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: s.color, fontSize: display.length >= 3 ? 8 : 11, flexShrink: 0 }}>
                        {display}
                      </div>
                      <span>{CELL_NAMES[t]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Project Groups */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px', color: '#9e9e9e' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 12px' }}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#6e6e6e', marginBottom: 4 }}>No records found</p>
            <p style={{ fontSize: 13 }}>No time records match the selected filters. Try adjusting or clearing the filters.</p>
          </div>
        ) : (
          filteredProjects.map(p => <ProjectGroup key={p.id} project={p} dayCols={dayCols} onCellEnter={handleCellEnter} onCellLeave={handleCellLeave} />)
        )}
      </main>

      {popup && (
        <TimeBreakdownPopup data={popup} onMouseEnter={handlePopupEnter} onMouseLeave={handlePopupLeave} onClose={() => setPopup(null)} />
      )}
    </>
  )
}

/* ── Reconciliation Page ─────────────────────────────────────────────────── */
function ReconciliationPage() {
  const [popup, setPopup]                   = useState(null)
  const hideTimerRef                        = useRef(null)
  const handleCellEnter = (row, cell, rect, date) => { clearTimeout(hideTimerRef.current); setPopup({ row, cell, rect, date }) }
  const handleCellLeave = () => { hideTimerRef.current = setTimeout(() => setPopup(null), 120) }
  const handlePopupEnter = () => clearTimeout(hideTimerRef.current)
  const handlePopupLeave = () => { hideTimerRef.current = setTimeout(() => setPopup(null), 120) }

  const [account, setAccount]               = useState("Macy's")
  const [selectedProjects, setSelectedProjects] = useState([])
  const [period, setPeriod]                 = useState('Current Month')
  const [customStart, setCustomStart]       = useState(null)
  const [customEnd,   setCustomEnd]         = useState(null)
  const [discrepancy, setDiscrepancy]       = useState('All')
  const [filterEmployee, setFilterEmployee] = useState([])
  const [filterRateMin, setFilterRateMin]   = useState('')
  const [filterRateMax, setFilterRateMax]   = useState('')
  const [filterTimeType, setFilterTimeType] = useState('All')
  const [legendOpen, setLegendOpen]         = useState(false)

  const clearFilters = () => { setFilterEmployee([]); setFilterRateMin(''); setFilterRateMax(''); setFilterTimeType('All') }

  const dayCols  = getDayCols(period, customStart, customEnd)
  const ttFilter = parseTimeType(filterTimeType)

  const filteredProjects = RECON_PROJECTS
    .filter(p => selectedProjects.length === 0 || selectedProjects.includes(p.name))
    .map(p => ({
      ...p,
      rows: p.rows.filter(row => {
        if (filterEmployee.length > 0 && !filterEmployee.includes(row.name)) return false
        if (filterRateMin !== '' && row.rate < Number(filterRateMin)) return false
        if (filterRateMax !== '' && row.rate > Number(filterRateMax)) return false
        if (ttFilter && row.location !== ttFilter.location) return false
        if (ttFilter && row.type !== ttFilter.classification) return false
        return true
      })
    }))
    .filter(p => p.rows.length > 0)

  const periodLabel = period === 'Custom Period…' && customStart && customEnd
    ? `Custom Period (${formatDateDMY(customStart)} – ${formatDateDMY(customEnd)})`
    : (PERIOD_RANGES[period] || period)

  return (
    <>
      {/* ── Scope Selection ── */}
      <div className="bg-white border-b border-border" style={{ padding: '16px 24px' }}>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#4a4a4a' }}>Reconciliation</h1>
        <div className="flex items-end gap-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: '#6e6e6e' }}>Account</label>
            <SearchableSelect value={account} onChange={setAccount} options={["Macy's", 'Nike Inc.', 'TechCorp', 'Retail Group', 'FinServ Ltd.']} placeholder="Search accounts..." width={270} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: '#6e6e6e' }}>Projects</label>
            <ProjectMultiSelect value={selectedProjects} onChange={setSelectedProjects} />
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ backgroundColor: '#f9fafb', padding: '16px 24px', borderBottom: '1px solid #dee2e6' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <p className="text-sm" style={{ color: '#6e6e6e' }}>Selected Period: {periodLabel}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button className="h-10 px-5 font-semibold text-sm" style={{ backgroundColor: '#0069b4', color: '#fff', borderRadius: 0, border: 'none' }}>
              Upload Client File
            </Button>
            <Button variant="outline" className="h-10 px-5 font-semibold text-sm" style={{ color: '#0069b4', borderColor: '#0069b4', borderRadius: 0 }}>
              Download results
            </Button>
          </div>
        </div>
        <div className="flex" style={{ gap: '32px' }}>
          <StatCard label="Total SOP Revenue"        value="$542K"     sub="Estimated revenue is shown for reference only." wide />
          <StatCard label="Client Approved"          value="$542K"     sub="21 employees / 21" />
          <StatCard label="Variance"                 value="+ $410.00" sub="Invoice vs. Internal" />
          <StatCard label="Reconciliation Progress"  value="92%"       sub="14 discrepancies open" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <main style={{ padding: '24px' }}>

        {/* Filters */}
        <div className="flex items-end gap-4 flex-wrap" style={{ marginBottom: 12 }}>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Period</label>
            <PeriodSelect value={period} onChange={setPeriod} customStart={customStart} customEnd={customEnd} onCustomRange={(s, e) => { setCustomStart(s); setCustomEnd(e) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Discrepancy</label>
            <Select value={discrepancy} onValueChange={setDiscrepancy}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: '200px', height: '40px', borderRadius: '6px', fontSize: '14px', color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {DISCREPANCY_OPTIONS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Employee name</label>
            <EmployeeMultiSelect value={filterEmployee} onChange={setFilterEmployee} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Rate</label>
            <RateRangeFilter min={filterRateMin} max={filterRateMax} onApply={(min, max) => { setFilterRateMin(min); setFilterRateMax(max) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Time Type</label>
            <Select value={filterTimeType} onValueChange={setFilterTimeType}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: '180px', height: '40px', borderRadius: '6px', fontSize: '14px', color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {TIME_TYPE_OPTIONS.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <button onClick={clearFilters} className="hover:opacity-70 transition-opacity" style={{ fontSize: '14px', fontWeight: 400, color: '#9e9e9e', height: '40px', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            Clear all
          </button>
        </div>

        {/* Legend */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 12, overflow: 'hidden' }}>
          <div
            className="flex items-center justify-between cursor-pointer select-none hover:bg-gray-50 transition-colors"
            style={{ padding: '12px 16px' }}
            onClick={() => setLegendOpen(o => !o)}
          >
            <span className="text-sm font-medium" style={{ color: '#4a4a4a' }}>Cell State Legend</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6e6e6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: legendOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {legendOpen && (
            <div style={{ padding: '10px 16px', borderTop: '1px solid #e0e0e0', overflowX: 'auto' }}>
              <div className="flex items-center flex-wrap gap-x-5 gap-y-2" style={{ fontSize: 11, color: '#6e6e6e', whiteSpace: 'nowrap' }}>
                {[
                  { t: 'approved', v: 8 }, { t: 'overtime', v: 10 }, { t: 'weekend', v: null },
                  { t: 'pto-req', v: null }, { t: 'nat-holiday', v: null }, { t: 'acc-holiday', v: null }, { t: 'no-hours', v: null },
                ].map(({ t, v }) => {
                  const s = CELL_STYLES[t]
                  const display = s.label !== undefined ? s.label : String(v)
                  const border = s.dashed ? `1.5px dashed ${s.stroke}` : s.stroke ? `1.5px solid ${s.stroke}` : 'none'
                  return (
                    <div key={t} className="flex items-center gap-1.5">
                      <div style={{ width: 24, height: 24, borderRadius: 5, backgroundColor: s.bg, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: s.color, fontSize: display.length >= 3 ? 8 : 11, flexShrink: 0 }}>{display}</div>
                      <span>{CELL_NAMES[t]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Project Groups */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px', color: '#9e9e9e' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 12px' }}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#6e6e6e', marginBottom: 4 }}>No records found</p>
            <p style={{ fontSize: 13 }}>No time records match the selected filters.</p>
          </div>
        ) : (
          filteredProjects.map(p => <ReconciliationProjectGroup key={p.id} project={p} dayCols={dayCols} onCellEnter={handleCellEnter} onCellLeave={handleCellLeave} />)
        )}
      </main>

      {popup && <TimeBreakdownPopup data={popup} onMouseEnter={handlePopupEnter} onMouseLeave={handlePopupLeave} onClose={() => setPopup(null)} />}
    </>
  )
}

/* ── HR Employee Group (3 rows: SuitProjects Pro / Invoice / Variance) ───── */
/* ── HR Employee Detail Sheet ────────────────────────────────────────────── */
function HREmployeeDetailSheet({ employee, open, onClose }) {
  if (!employee) return null
  const { name, role, tier, projectCode, locationLabel, status, discrepancy,
          suitProjects, invoice, variance, workingDays, clientHours, estRevenue,
          activity, assignees } = employee

  const initials = name.split(' ').map(w => w[0]).join('')
  const badgeStyle = status ? STATUS_BADGE_STYLES[status] : null

  const AVATAR_COLORS = ['#1a56db','#7e3af2','#057a55','#c81e1e','#b45309','#0694a2']
  const avatarBg = AVATAR_COLORS[employee.id % AVATAR_COLORS.length]

  const CompareCard = ({ label, data, isVariance }) => (
    <div style={{
      flex: 1, border: `1.5px solid ${isVariance && discrepancy ? '#fecaca' : '#e0e0e0'}`,
      borderRadius: 8, padding: '14px 16px',
      backgroundColor: isVariance && discrepancy ? '#fff5f5' : '#fff',
    }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9e9e9e' }}>{label}</span>
        {isVariance
          ? <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#9e9e9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          : label === 'Invoice'
            ? <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="1.5" width="9" height="13" rx="1" stroke="#9e9e9e" strokeWidth="1.2"/><path d="M5 5h6M5 8h6M5 11h4" stroke="#9e9e9e" strokeWidth="1.2" strokeLinecap="round"/></svg>
            : <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="2.5" width="13" height="11" rx="1" stroke="#9e9e9e" strokeWidth="1.2"/><path d="M1.5 6h13" stroke="#9e9e9e" strokeWidth="1.2"/></svg>
        }
      </div>
      {[
        { k: 'Hours',      v: data.hours },
        { k: 'Rate',       v: data.rate },
        { k: 'Assignment', v: data.assignment },
        ...(data.locationLabel ? [{ k: 'Location', v: data.locationLabel }] : []),
        { k: 'Revenue',    v: data.revenue },
      ].map(({ k, v }) => (
        <div key={k} className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: '#6e6e6e' }}>{k}</span>
          <span style={{
            fontSize: 13, fontWeight: 600,
            color: isVariance && discrepancy && v && v !== '—' && v !== '$0' && v !== '0 h' ? '#DC2626' : '#1a1a1a'
          }}>{v}</span>
        </div>
      ))}
    </div>
  )

  return (
    <Sheet open={open} onOpenChange={v => { if (!v) onClose() }}>
      <SheetContent side="right" showCloseButton={false} className="p-0 flex flex-col gap-0" style={{ width: 680, maxWidth: '90vw' }}>
        <ScrollArea className="flex-1 h-0">
          <div style={{ padding: '24px 24px 0' }}>
            {/* Header */}
            <div className="flex items-start justify-between" style={{ marginBottom: 16 }}>
              <div className="flex items-center gap-3">
                <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                  {initials}
                </div>
                <div>
                  <SheetTitle style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{name}</SheetTitle>
                  <div className="flex items-center gap-3" style={{ fontSize: 13, color: '#6e6e6e' }}>
                    <span className="flex items-center gap-1"><BriefcaseIcon size={13} />{role}</span>
                    <span className="flex items-center gap-1" style={{ color: '#9e9e9e' }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="2.5" width="13" height="11" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1.5 6h13" stroke="currentColor" strokeWidth="1.2"/></svg>
                      {tier}
                    </span>
                    <span className="flex items-center gap-1"><MapPinIcon size={13} />{locationLabel}</span>
                    <span className="flex items-center gap-1"><HashIcon size={13} />{projectCode}</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose} style={{ color: '#9e9e9e', background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginTop: -2 }}>
                <XIcon size={18} />
              </button>
            </div>

            {/* Status badge */}
            {badgeStyle && (
              <div style={{ marginBottom: 16 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 20, border: `1px solid ${badgeStyle.borderColor}`, backgroundColor: badgeStyle.backgroundColor, color: badgeStyle.color }}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="currentColor"/></svg>
                  {status}
                </span>
              </div>
            )}

            {/* Discrepancy alert */}
            {discrepancy && (
              <div style={{ backgroundColor: '#fff5f5', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 14px', marginBottom: 20 }}>
                <div className="flex items-center gap-2" style={{ marginBottom: 4 }}>
                  <AlertCircleIcon size={16} color="#DC2626" />
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#DC2626' }}>
                    {status}: {variance.hours !== '0 h' ? variance.hours.replace('+', '') + ' difference' : 'discrepancy found'}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: '#9e9e9e', marginLeft: 24 }}>
                  SPP reports {suitProjects.hours}, client reports {invoice.hours} for March 2026. Review flagged days below.
                </p>
              </div>
            )}

            {/* Comparison cards */}
            <div className="flex gap-3" style={{ marginBottom: 24 }}>
              <CompareCard label="SPP (Internal)" data={suitProjects} isVariance={false} />
              <CompareCard label="Invoice"         data={invoice}      isVariance={false} />
              <CompareCard label="Variance"        data={variance}     isVariance={true} />
            </div>

            <Separator style={{ marginBottom: 20 }} />

            {/* Month at a glance */}
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#1a1a1a' }}>Month at a glance</span>
              <span style={{ fontSize: 12, color: '#9e9e9e' }}>March 2026</span>
            </div>
            <div className="flex gap-3" style={{ marginBottom: 24 }}>
              {[
                { label: 'Working Days',     value: workingDays,   red: false },
                { label: 'SPP Hours',        value: suitProjects.hours, red: discrepancy },
                { label: 'Client Hours',     value: clientHours,   red: false },
                { label: 'Est. Revenue (SPP)', value: estRevenue,  red: false },
              ].map(({ label, value, red }) => (
                <div key={label} style={{ flex: 1, border: '1px solid #e0e0e0', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9e9e9e', marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: red ? '#DC2626' : '#1a1a1a' }}>{value}</div>
                </div>
              ))}
            </div>

            <Separator style={{ marginBottom: 20 }} />

            {/* Activity */}
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#1a1a1a' }}>Activity</span>
              <span style={{ fontSize: 12, color: '#9e9e9e' }}>Last 7 days</span>
            </div>
            <div style={{ marginBottom: 24 }}>
              {activity.map((item, i) => (
                <div key={i} className="flex items-start gap-3" style={{ marginBottom: i < activity.length - 1 ? 12 : 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.color, flexShrink: 0, marginTop: 5 }} />
                  <div>
                    <span style={{ fontSize: 13, color: '#4a4a4a' }}>{item.text}</span>
                    <span style={{ fontSize: 12, color: '#9e9e9e', marginLeft: 6 }}>· {item.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <Separator style={{ marginBottom: 20 }} />

            {/* Assign to */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: '#6e6e6e', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="3" stroke="#9e9e9e" strokeWidth="1.2"/><path d="M1 13c0-2.761 2.239-4 5-4" stroke="#9e9e9e" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 9v6M8 12h6" stroke="#9e9e9e" strokeWidth="1.4" strokeLinecap="round"/></svg>
                Assign to
              </div>
              <div className="flex flex-wrap gap-2">
                {assignees.map(a => (
                  <div key={a.name} className="flex items-center gap-2" style={{ border: '1px solid #e0e0e0', borderRadius: 20, padding: '5px 12px 5px 6px', fontSize: 13, color: '#4a4a4a' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 10 }}>{a.initials}</div>
                    {a.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e0e0e0', padding: '12px 24px', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ height: 38, padding: '0 20px', fontSize: 14, fontWeight: 600, color: '#4a4a4a', border: '1px solid #d0d0d0', borderRadius: 4, background: '#fff', cursor: 'pointer' }}>
            Close
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function HREmployeeGroup({ employee, isLast, onClick }) {
  const [hovered, setHovered] = useState(false)
  const { name, role, discrepancy, status, suitProjects, invoice, variance } = employee
  const discBg = '#fdeded'
  const hoverBg = discrepancy ? '#f9d8d8' : '#f5f5f5'
  const baseBg = discrepancy ? discBg : undefined
  const bg = hovered ? hoverBg : baseBg
  const rowBorder = { borderBottom: `1px solid ${discrepancy ? '#f5c6c6' : '#e0e0e0'}` }
  const lastBorder = isLast ? {} : rowBorder
  const cell = { backgroundColor: bg, cursor: 'pointer', transition: 'background-color 0.12s' }
  const badgeStyle = status ? STATUS_BADGE_STYLES[status] : null
  const groupHandlers = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), onClick }

  return (
    <>
      <tr style={rowBorder} {...groupHandlers}>
        <td rowSpan={3} style={{ verticalAlign: 'top', padding: '12px 8px 0 0', ...cell,
          ...(discrepancy ? { borderLeft: '4px solid #DC2626', paddingLeft: 14 } : { paddingLeft: 24 }) }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <EmployeeAvatar />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>{name}</div>
              <div style={{ fontSize: 12, color: '#6e6e6e', marginTop: 2 }}>{role}</div>
            </div>
          </div>
        </td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a4a4a', ...cell }}>SuitProjects Pro</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a4a4a', ...cell }}>{suitProjects.assignment}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a4a4a', ...cell }}>{suitProjects.rate}</td>
        <td style={{ padding: '12px 8px', ...cell }}>
          {badgeStyle && (
            <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 500, padding: '3px 8px', borderRadius: 4, border: `1px solid ${badgeStyle.borderColor}`, backgroundColor: badgeStyle.backgroundColor, color: badgeStyle.color, whiteSpace: 'nowrap' }}>
              {status}
            </span>
          )}
        </td>
        <td style={cell} />
        <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, textAlign: 'right', color: discrepancy ? '#DC2626' : '#4a4a4a', ...cell }}>{suitProjects.hours}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, textAlign: 'right', color: '#4a4a4a', ...cell }}>{suitProjects.revenue}</td>
      </tr>
      <tr style={rowBorder} {...groupHandlers}>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#6e6e6e', ...cell }}>Invoice</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#6e6e6e', ...cell }}>{invoice.assignment}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#6e6e6e', ...cell }}>{invoice.rate}</td>
        <td style={cell} />
        <td style={cell} />
        <td style={{ padding: '12px 8px', fontSize: 13, textAlign: 'right', color: '#6e6e6e', ...cell }}>{invoice.hours}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, textAlign: 'right', color: '#4a4a4a', ...cell }}>{invoice.revenue}</td>
      </tr>
      <tr style={lastBorder} {...groupHandlers}>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#9e9e9e', ...cell }}>Variance</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#9e9e9e', ...cell }}>{variance.assignment}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, color: '#9e9e9e', ...cell }}>{variance.rate}</td>
        <td style={{ padding: '12px 8px', ...cell }}>
          {discrepancy && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 500, color: '#DC2626' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7.5" stroke="#DC2626"/><path d="M8 4.5v4" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="0.75" fill="#DC2626"/></svg>
              1 issue
            </span>
          )}
        </td>
        <td style={cell} />
        <td style={{ padding: '12px 8px', fontSize: 13, textAlign: 'right', color: '#9e9e9e', ...cell }}>{variance.hours}</td>
        <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, textAlign: 'right', color: '#4a4a4a', ...cell }}>{variance.revenue}</td>
      </tr>
    </>
  )
}

/* ── HR Reconciliation Page ──────────────────────────────────────────────── */
function HRReconciliationPage() {
  const [period, setPeriod]                 = useState('Current Month')
  const [customStart, setCustomStart]       = useState(null)
  const [customEnd, setCustomEnd]           = useState(null)
  const [discrepancy, setDiscrepancy]       = useState('All')
  const [filterEmployee, setFilterEmployee] = useState([])
  const [filterRateMin, setFilterRateMin]   = useState('')
  const [filterRateMax, setFilterRateMax]   = useState('')
  const [filterTimeType, setFilterTimeType] = useState('All')
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  const clearFilters = () => {
    setDiscrepancy('All'); setFilterEmployee([]); setFilterRateMin(''); setFilterRateMax(''); setFilterTimeType('All')
  }

  const periodLabel = period === 'Custom Period…' && customStart && customEnd
    ? `Custom Period (${formatDateDMY(customStart)} – ${formatDateDMY(customEnd)})`
    : (PERIOD_RANGES[period] || period)

  const ttFilter = parseTimeType(filterTimeType)

  const HR_LOCATION_MAP = { Onsite: 'ny', Remote: 'remote' }

  const visible = HR_EMPLOYEES.filter(emp => {
    if (filterEmployee.length > 0 && !filterEmployee.includes(emp.name)) return false
    if (discrepancy === 'With Discrepancy'    && !emp.discrepancy) return false
    if (discrepancy === 'Without Discrepancy' &&  emp.discrepancy) return false
    if (discrepancy !== 'All' && discrepancy !== 'With Discrepancy' && discrepancy !== 'Without Discrepancy') {
      if (emp.status !== discrepancy) return false
    }
    const empRateNum = parseFloat(emp.rate.replace(/[^0-9.]/g, ''))
    if (filterRateMin !== '' && empRateNum < Number(filterRateMin)) return false
    if (filterRateMax !== '' && empRateNum > Number(filterRateMax)) return false
    if (ttFilter && emp.location !== HR_LOCATION_MAP[ttFilter.location]) return false
    return true
  })

  return (
    <>
      {/* ── Scope Selection ── */}
      <div className="bg-white border-b border-border" style={{ padding: '16px 24px' }}>
        <h1 className="text-2xl font-bold" style={{ color: '#4a4a4a' }}>HR Reconciliation</h1>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ backgroundColor: '#f9fafb', padding: '16px 24px', borderBottom: '1px solid #dee2e6' }}>
        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: '#6e6e6e' }}>Selected Period: {periodLabel}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button className="h-10 px-5 font-semibold text-sm" style={{ backgroundColor: '#0069b4', color: '#fff', borderRadius: 0, border: 'none' }}>
              Upload Client File
            </Button>
            <Button variant="outline" className="h-10 px-5 font-semibold text-sm" style={{ color: '#0069b4', borderColor: '#0069b4', borderRadius: 0 }}>
              Download results
            </Button>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main style={{ padding: '24px' }}>

        {/* Filters */}
        <div className="flex items-end gap-4 flex-wrap" style={{ marginBottom: 12 }}>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Period</label>
            <PeriodSelect value={period} onChange={setPeriod} customStart={customStart} customEnd={customEnd} onCustomRange={(s, e) => { setCustomStart(s); setCustomEnd(e) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Discrepancy</label>
            <Select value={discrepancy} onValueChange={setDiscrepancy}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: 200, height: 40, borderRadius: 6, fontSize: 14, color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {HR_DISCREPANCY_OPTIONS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Employee name</label>
            <EmployeeMultiSelect value={filterEmployee} onChange={setFilterEmployee} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Rate</label>
            <RateRangeFilter min={filterRateMin} max={filterRateMax} onApply={(min, max) => { setFilterRateMin(min); setFilterRateMax(max) }} />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#8f8f8f' }}>Time Type</label>
            <Select value={filterTimeType} onValueChange={setFilterTimeType}>
              <SelectTrigger className="[&_svg]:!text-primary" style={{ width: 180, height: 40, borderRadius: 6, fontSize: 14, color: '#4a4a4a', backgroundColor: '#fff' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                {TIME_TYPE_OPTIONS.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <button onClick={clearFilters} className="hover:opacity-70 transition-opacity" style={{ fontSize: 14, fontWeight: 400, color: '#9e9e9e', height: 40, textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            Clear all
          </button>
        </div>

        {/* Table */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden', backgroundColor: '#fff' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <colgroup>
              <col style={{ width: 245 }} />
              <col style={{ width: 158 }} />
              <col style={{ width: 130 }} />
              <col style={{ width: 76 }} />
              <col style={{ width: 160 }} />
              <col />
              <col style={{ width: 84 }} />
              <col style={{ width: 100 }} />
            </colgroup>
            <thead>
              <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fff' }}>
                <th style={{ textAlign: 'left', padding: '0 8px 0 24px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Assignee</th>
                <th style={{ textAlign: 'left', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Source</th>
                <th style={{ textAlign: 'left', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Assignment %</th>
                <th style={{ textAlign: 'left', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Rate</th>
                <th style={{ textAlign: 'left', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Status</th>
                <th />
                <th style={{ textAlign: 'right', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Hours</th>
                <th style={{ textAlign: 'right', padding: '0 8px', height: 36, fontWeight: 600, fontSize: 13, color: '#4a4a4a' }}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '48px 24px', color: '#9e9e9e', fontSize: 13 }}>
                    No employees match the selected filters.
                  </td>
                </tr>
              ) : (
                visible.map((emp, i) => (
                  <HREmployeeGroup key={emp.id} employee={emp} isLast={i === visible.length - 1} onClick={() => setSelectedEmployee(emp)} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <HREmployeeDetailSheet
        employee={selectedEmployee}
        open={!!selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  )
}

const NAV_ITEMS = [
  { path: '/time-reports',     label: 'Time Reports' },
  { path: '/reconciliation',   label: 'Reconciliation' },
  { path: '/hr-reconciliation', label: 'HR Reconciliation' },
]

/* ── Main App ─────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>

      {/* ── Header ── */}
      <header className="bg-primary" style={{ height: '72px' }}>
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-8 h-full">
            <NavLink to="/time-reports" className="flex items-center shrink-0">
              <TimesheetsLogo />
            </NavLink>
            <nav className="flex items-stretch h-full">
              {NAV_ITEMS.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center px-4 text-sm font-semibold transition-colors border-b-2 ${isActive ? 'text-white border-white' : 'text-white/70 border-transparent hover:text-white'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-1.5 text-white hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="3" cy="3" r="2.5" /><circle cx="10" cy="3" r="2.5" /><circle cx="17" cy="3" r="2.5" />
                <circle cx="3" cy="10" r="2.5" /><circle cx="10" cy="10" r="2.5" /><circle cx="17" cy="10" r="2.5" />
                <circle cx="3" cy="17" r="2.5" /><circle cx="10" cy="17" r="2.5" /><circle cx="17" cy="17" r="2.5" />
              </svg>
            </button>
            <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Avatar className="ring-2 ring-white/40">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback className="bg-white/20 text-white text-xs">U</AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold">Username</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/time-reports" replace />} />
        <Route path="/time-reports" element={<ReportPage title="Time reports" />} />
        <Route path="/reconciliation" element={<ReconciliationPage />} />
        <Route path="/hr-reconciliation" element={<HRReconciliationPage />} />
      </Routes>

    </div>
  )
}
