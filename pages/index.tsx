import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				What it is?
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Helping Hand is a simple app to help users keep track of social goals
					with contextual notifications that they'll receive on all devices
					whereever they are. That's it, we don't aim to be anything other than
					the best system to help you improve your habits and behaviours to
					improve yourself for both you and those around you
					{/* <span className='font-medium text-zinc-900 dark:text-zinc-50'>
						448 million tons
					</span>{' '} */}
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					To be more specific, this is a cheap tool to help people who struggle
					with socialising and need the right, timed pushes to get them where
					they need to be
				</p>
			</div>
		</Section>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Why use it?
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Calendars, todo lists, reminder apps, all these things can be
					perfectly adequate for some people. But for others, like me, you might
					feel that they fail to engage you enough and in the right way. This
					leads you end up ignoring reminders and forget to do things that are
					for your own good
				</p>
				<br />
				<p className='text-zinc-600 dark:text-zinc-400'>
					We've researched a lot of the science behind habit formation and
					motivation to produce a notification system that helps in three key
					ways.
				</p>
				<br />
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Contextual:{' '}
					</span>
					Firstly, rather than sending generic notifications that are easy to
					ignore, it uses your own rationals and reasoning for wanting to use
					something to prompt you in the way that's best for you. For example,
					rather than just sending something like "Go to Tech Meetup at 3pm",
					it'll send you a variety of different notifications like "Remember to
					go to your Tech Meetup at 3pm! You could meet someone to help with
					your Music app there!" and "Tomorrow is the tech meetup you wanted to
					go to, before you sleep, try and think about all the ways that single
					event could change your life". Maybe our notifications don't hit you
					the right way, if that's the case, you can always alter the ways we
					engage you to be more in line with what will help you the most.
				</p>
				<br />
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Nuanced:{' '}
					</span>
					Secondly, we send those contextual notifications at the right time,
					not just at some fixed interval. A lot of research shows that
					reminders help most when they're repeated at key times, so we send you
					notifications at a variety of times. For example, the night before an
					event, we'll send you a notification to remind you to think about the
					potential unforeseen positives just turning up to that event could
					have for you! If you don't like our defaults, you can always set these
					yourself if you like!
				</p>
				<br />
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Widespread:{' '}
					</span>
					Finally, we don't just send these notifications to your phone but to
					your PC, mobile, email, smartwatch, whatever you want! The idea is
					that you shouldn't have to rely on a single medium to get the
					reminders you need. Not only this, but you can also enter a friend's
					number, with their consent of course, so that they also get the
					reminders to help push you if we fail to
				</p>
			</div>
		</Section>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				How to use it?
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Set a goal:{' '}
					</span>
					The basic idea is that you can set a goal, whether that's to go to an
					event, keep in touch with a specific friend or try and maintain a
					certain habit, and get custom notifications based on psychology
					research that'll make sure you keep it on your mind and push you to
					stick with it
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Let us know why you have that goal:{' '}
					</span>
					In order to give you the best contextual notifications, we need to
					know why you want to do a certain goal. This allows us to tailor your
					notifications to your specific needs. Don't worry, we have a strict
					privacy policy and don't share or use your data in anyway other than
					to use in your notifications
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Customise and let us know your preferences:{' '}
					</span>
					We'll give you an idea of the times we'll send notifications and to
					what devices, and if you don't like what we'll selected or want to
					customise it further, you'll have the options to do that here!
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Confirm and you're done!:{' '}
					</span>
					It's that simple. Your goal will be set and you'll get the reminders
					you need! You'll be able to edit your goal at any time with our simple
					interface
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Checkups:{' '}
					</span>
					We'll checkup with you when you've set for your goal to end to see
					whether you did it or not and provide some suggestions as to how you
					might improve if you fail to achieve it as well as ask if you want to
					set some followups if you succeed!
				</p>
			</div>
			<br />
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Achievements:{' '}
					</span>
					Socialising can be particularly hard for a lot of people. We try to
					remind you every now and again of your achievements, particularly at
					the end of each year so that you don't forget all the ways you've
					improved!
				</p>
			</div>
		</Section>
	</Page>
)

export default Index
