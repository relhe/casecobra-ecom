import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
    const user = undefined;
    const isAdmin = false; // Replace with actual logic to check if user is admin
    return (
        <nav className="sticky z-[100] h-14 insert-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg translate-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-center border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        case <span className="text-green-600">cobra</span>
                    </Link>
                    <div className="flex items-center space-x-4 h-full">
                        {user ? (
                            <>
                                <Link
                                    href="/api/auth/logout"
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}
                                >
                                    Sign Out
                                </Link>
                                {isAdmin ? (
                                    <Link
                                        href="/api/auth/logout"
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            size: 'sm',
                                        })}
                                    >
                                        {' '}
                                        Dashboard ✨
                                    </Link>
                                ) : null}
                                <Link
                                    href="/configure/upload"
                                    className={buttonVariants({
                                        className:
                                            'hidden sm:flex items-center gap-1',
                                        size: 'sm',
                                    })}
                                >
                                    {' '}
                                    Create case{' '}
                                    <ArrowRight className="ml-1.5 w-5 h-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/register"
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}
                                >
                                    Sign in
                                </Link>

                                <Link
                                    href="/api/auth/login"
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}
                                >
                                    {' '}
                                    Login{' '}
                                    <ArrowRight className="ml-1.5 w-5 h-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;