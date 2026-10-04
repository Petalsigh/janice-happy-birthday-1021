import React, { useState } from 'react';
import { DAYS, COLORS, useCourses } from './useCourses';

const PERIODS = 12;
const emptyCourse = {
  name: '',
  place: '',
  note: '',
  day: 0,
  start: 1,
  end: 2,
  color: COLORS[0],
};

function CourseForm({ course, onSave, onDelete, onClose }) {
  const [form, setForm] = useState(course);
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const invalid = !form.name.trim() || form.end < form.start;

  const submit = (e) => {
    e.preventDefault();
    if (invalid) return;
    onSave({ ...form, name: form.name.trim() });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="编辑课程"
    >
      <form onSubmit={submit} className="w-full max-w-sm space-y-3 rounded-2xl bg-white p-5 shadow-xl">
        <h2 className="text-lg font-semibold">{course.id ? '编辑课程' : '添加课程'}</h2>
        <input
          aria-label="课程名称"
          placeholder="课程名称"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className="w-full rounded border p-2"
          autoFocus
        />
        <input
          aria-label="地点"
          placeholder="地点（可选）"
          value={form.place}
          onChange={(e) => set('place', e.target.value)}
          className="w-full rounded border p-2"
        />
        <input
          aria-label="备注"
          placeholder="备注（老师、周次等，可选）"
          value={form.note}
          onChange={(e) => set('note', e.target.value)}
          className="w-full rounded border p-2"
        />
        <div className="grid grid-cols-3 gap-2">
          <select aria-label="星期" value={form.day} onChange={(e) => set('day', +e.target.value)} className="rounded border p-2">
            {DAYS.map((d, i) => (
              <option key={d} value={i}>{d}</option>
            ))}
          </select>
          <select aria-label="开始节次" value={form.start} onChange={(e) => set('start', +e.target.value)} className="rounded border p-2">
            {Array.from({ length: PERIODS }, (_, i) => (
              <option key={i} value={i + 1}>第{i + 1}节起</option>
            ))}
          </select>
          <select aria-label="结束节次" value={form.end} onChange={(e) => set('end', +e.target.value)} className="rounded border p-2">
            {Array.from({ length: PERIODS }, (_, i) => (
              <option key={i} value={i + 1}>第{i + 1}节止</option>
            ))}
          </select>
        </div>
        {form.end < form.start && <p className="text-sm text-red-500">结束节次不能早于开始节次</p>}
        <div className="flex gap-2" role="radiogroup" aria-label="颜色">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={form.color === c}
              aria-label={`颜色 ${c}`}
              onClick={() => set('color', c)}
              className={`h-7 w-7 rounded-full border-2 ${form.color === c ? 'border-gray-800' : 'border-transparent'}`}
              style={{ background: c }}
            />
          ))}
        </div>
        <div className="flex justify-between pt-2">
          {course.id ? (
            <button type="button" onClick={() => { onDelete(course.id); onClose(); }} className="text-red-500">
              删除
            </button>
          ) : <span />}
          <div className="space-x-2">
            <button type="button" onClick={onClose} className="rounded px-3 py-1.5">取消</button>
            <button type="submit" disabled={invalid} className="rounded bg-pink-500 px-3 py-1.5 text-white disabled:opacity-40">
              保存
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/** Freely editable weekly timetable; data is stored in localStorage. */
export default function Timetable() {
  const { courses, saveCourse, deleteCourse } = useCourses();
  const [editing, setEditing] = useState(null);

  return (
    <main className="mx-auto max-w-5xl p-4">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">我的课表</h1>
        <button onClick={() => setEditing(emptyCourse)} className="rounded-full bg-pink-500 px-4 py-2 text-white">
          + 添加课程
        </button>
      </header>

      <div className="overflow-x-auto">
        <div
          className="grid min-w-[640px] gap-px rounded-lg bg-gray-200"
          style={{ gridTemplateColumns: '3rem repeat(7, 1fr)', gridTemplateRows: `2.5rem repeat(${PERIODS}, 3.5rem)` }}
        >
          <div className="bg-white" />
          {DAYS.map((d, i) => (
            <div key={d} className="flex items-center justify-center bg-white font-medium" style={{ gridColumn: i + 2, gridRow: 1 }}>
              {d}
            </div>
          ))}
          {Array.from({ length: PERIODS }, (_, p) => (
            <React.Fragment key={p}>
              <div className="flex items-center justify-center bg-white text-sm text-gray-500" style={{ gridColumn: 1, gridRow: p + 2 }}>
                {p + 1}
              </div>
              {DAYS.map((d, i) => (
                <button
                  key={d}
                  aria-label={`${d}第${p + 1}节 添加`}
                  onClick={() => setEditing({ ...emptyCourse, day: i, start: p + 1, end: p + 1 })}
                  className="bg-white hover:bg-pink-50"
                  style={{ gridColumn: i + 2, gridRow: p + 2 }}
                />
              ))}
            </React.Fragment>
          ))}
          {courses.map((c) => (
            <button
              key={c.id}
              data-testid="course"
              onClick={() => setEditing(c)}
              className="z-[1] overflow-hidden rounded-md p-1 text-left text-xs shadow-sm"
              style={{ gridColumn: c.day + 2, gridRow: `${c.start + 1} / ${c.end + 2}`, background: c.color }}
            >
              <div className="font-semibold">{c.name}</div>
              {c.place && <div>{c.place}</div>}
              {c.note && <div className="opacity-70">{c.note}</div>}
            </button>
          ))}
        </div>
      </div>

      {editing && (
        <CourseForm course={editing} onSave={saveCourse} onDelete={deleteCourse} onClose={() => setEditing(null)} />
      )}
    </main>
  );
}
